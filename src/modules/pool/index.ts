import { BigNumber, utils, providers } from 'ethers';
import * as tradingHub from '../../contracts/tradingHub';
import { getThighInstance } from '../../thigh';
import * as poolGuardian from '../../contracts/poolGuardian';
import * as strPool from '../../contracts/strPool';
import * as erc20 from '../../contracts/token/erc20';
import * as wrapRouter from '../../contracts/wrapRouter';
import { poolLog } from '../../types/types';
/**POOL MODULE */

/**
 * done
 * Get pool's id by token and status
 * return a list
 * @param {*} tokenAddress tokenAddress default: null
 * @param {*} status 0:ALL; 1:RUNNING; 2:CLOSING; 3:RECOVER; 4:ENDED default: 0
 * @returns [] poolId list
 *
 */
export async function getPools(tokenAddress: string = '', status: number = 0) {
    const NULL_TOKEN = '0x0000000000000000000000000000000000000000';
    const TOKEN = tokenAddress ? tokenAddress : NULL_TOKEN;
    let statusList = [];
    if (status) {
        statusList = [status];
    } else {
        statusList = [1, 2, 3, 4];
    }
    const multiCallList: Array<any> = [];
    const poolGuardianContract = await poolGuardian.getMulticallContract();
    statusList.forEach((status) => {
        multiCallList.push(poolGuardianContract.queryPools(TOKEN, status));
    });
    const callProvider = await getThighInstance().ethUtil.getMulticallProvider();

    const resultTmp = await callProvider.all(multiCallList);
    const result = resultTmp.map((item) => {
        return { ...item };
    });

    return result;
}

export async function getMetaInfo(poolId: string) {
    const poolGuardianContract = await poolGuardian.getContract();
    const poolInfo = await poolGuardianContract.getPoolInfo(poolId);
    const strPoolContract = await strPool.getContract(poolInfo.strToken);
    const res = await strPoolContract.getMetaInfo();
    return { ...res, strToken: poolInfo.strToken };
}

/**
 * get pool info by poolId
 * @param poolId string
 * @returns
 */
export async function getPoolInfo(poolId: string) {
    const poolGuardianContract = await poolGuardian.getContract();
    const poolInfo = await poolGuardianContract.getPoolInfo(poolId);
    const strToken = poolInfo.strToken;
    const stateFlag = poolInfo.stateFlag;
    const strPoolContract = strPool.getMulticallContract(strToken);
    const ERC20ContractStr = await erc20.getMulticallContract(strToken);
    const wrapRouterContract = await wrapRouter.getMulticallContract();
    const multiCallList = [];
    multiCallList.push(strPoolContract.getMetaInfo());
    multiCallList.push(ERC20ContractStr.totalSupply());
    multiCallList.push(wrapRouterContract.controvertibleAmounts(strToken));
    const callProvider = await getThighInstance().ethUtil.getMulticallProvider();
    const multiResult = await callProvider.all(multiCallList);

    const poolBasicInfo = multiResult[0];
    const totalDeposited = multiResult[1];
    const availableAmount = multiResult[2];
    return {
        creator: poolBasicInfo.creator_,
        leverage: poolBasicInfo.leverage_,
        strToken,
        stakedToken: { address: poolBasicInfo.stakedToken_, decimals: poolBasicInfo.stakedTokenDecimals_ },
        stableToken: { address: poolBasicInfo.stableToken_, decimals: poolBasicInfo.stableTokenDecimals_ },
        totalDeposited,
        availableAmount,
        durationDays: poolBasicInfo.durationDays_,
        status: stateFlag,
        startBlock: poolBasicInfo.startBlock_,
        endBlock: poolBasicInfo.endBlock_,
    };
}

/**
 *
 * @param {*} poolId
 *
 * @return count: { providerCount: , traderCount: }
 */
export async function getParticipantNumber(poolId: string) {
    // get now blockNumber
    let providerCount = 0;
    let traderCount = 0;

    const poolGuardianContract = await poolGuardian.getContract();
    const poolInfo = await poolGuardianContract.getPoolInfo(poolId);
    const strToken = poolInfo.strToken;
    const strPoolContract = await strPool.getContract(strToken);
    const poolBasicInfo = await strPoolContract.getMetaInfo();

    const startBlock = poolBasicInfo.startBlock_;
    const endBlock = poolBasicInfo.endBlock_;

    const filterTopics = await getThighInstance().ethUtil.encodeFilterTopics(strPool.abi, 'Deposit');
    const resultProviderCount = await getThighInstance().ethUtil.getLogs({
        fromBlock: Number(startBlock.toString()),
        toBlock: Number(endBlock.toString()),
        topics: filterTopics,
        contractAddr: strToken,
    });
    providerCount = resultProviderCount.length || 0;

    const topic = await getThighInstance().ethUtil.encodeFilterTopics(tradingHub.abi, 'PositionOpened');
    const coderAbi = new utils.AbiCoder();
    topic.push(coderAbi.encode(['uint256'], [poolId]));
    const resultTraderCount = await getThighInstance().ethUtil.getLogs({
        fromBlock: Number(startBlock.toString()),
        toBlock: Number(endBlock.toString()),
        topics: topic,
        contractName: 'tradingHub',
    });
    traderCount = resultTraderCount.length || 0;

    return {
        providerCount,
        traderCount,
    };
}

/**
 * done
 * deposit token in the pool
 * @param {*} strToken
 * @param {*} amount
 * @returns
 */
export async function deposit(strToken: string, amount: number) {
    const strPoolContract = await strPool.getContract(strToken, false);
    const tx = await strPoolContract.deposit(amount);
    const deposit = await tx.wait();
    return deposit;
}

/**
 * done
 * withdraw from the pool
 * @param {*} strToken
 * @param {BigNumber} amount
 */
export async function withdrawByAmount(strToken: string, amount: BigNumber) {
    return withdraw(strToken, 0, amount);
}

/**
 *
 * @param {*} strToken
 * @param {INTEGER} percent percent > 0 && percent <= 100
 */
export async function withdrawByPercent(strToken: string, percent: number) {
    const NO_AMOUNT = BigNumber.from('0');
    return withdraw(strToken, percent, NO_AMOUNT);
}

async function withdraw(strToken: string, percent: number, amount: BigNumber) {
    const strPoolContract = await strPool.getContract(strToken, false);
    const tx = await strPoolContract.withdraw(percent, amount);
    const withdraw = await tx.wait();
    return withdraw;
}

/**
 * done
 * @param {*} strToken
 * @param {*} amount
 * @returns
 */
export async function approve(strToken: string, amount: any = 'MAX') {
    let approveAmount = amount;
    if (approveAmount === 'MAX') {
        approveAmount = '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff';
    }
    const strPoolContract = await strPool.getContract(strToken, false);
    const tx = await strPoolContract.approve(getThighInstance().ethUtil.getContractAddress('shorterBone'), approveAmount);
    const approveResult = await tx.wait();
    return approveResult;
}

/**
 * done
 * get allowance by address/account
 * get allowance for deposit  //address: staked token address
 * get allowance for withdraw //address: strToken---poolAddress
 * @param {} strToken
 * @param {*} account
 * @returns
 */
export async function allowance(strToken: string, account: any = null) {
    const strPoolContract = await strPool.getContract(strToken);
    const allowance = await strPoolContract.allowance(account, getThighInstance().ethUtil.getContractAddress('shorterBone'));
    return allowance;
}

/**
 * done
 * @param poolId string
 * @param account string
 * @returns Log
 */
export async function getLogs(poolId: string, account: string) {
    const { startBlock_, endBlock_, strToken } = await getMetaInfo(poolId);
    const startBlock = Number(startBlock_.toString());
    const endBlock = Number(endBlock_.toString());

    const POOL_DEPOSIT = await getThighInstance().ethUtil.encodeFilterTopics(strPool.abi, 'Deposit');
    const POOL_WITHDRAW = await getThighInstance().ethUtil.encodeFilterTopics(strPool.abi, 'Withdraw');
    const POSITION_OPEN = await getThighInstance().ethUtil.encodeFilterTopics(tradingHub.abi, 'PositionOpened');
    const POSITION_INCREASE = await getThighInstance().ethUtil.encodeFilterTopics(tradingHub.abi, 'PositionIncreased');
    const POSITION_DECREASE = await getThighInstance().ethUtil.encodeFilterTopics(tradingHub.abi, 'PositionDecreased');

    operationMap.set(POOL_DEPOSIT[0], 'Deposit');
    operationMap.set(POOL_WITHDRAW[0], 'Withdraw');
    operationMap.set(POSITION_OPEN[0], 'Open');
    operationMap.set(POSITION_INCREASE[0], 'Borrow');
    operationMap.set(POSITION_DECREASE[0], 'Repay');

    const coderAbi = new utils.AbiCoder();
    const poolIdString = poolId.toString();
    const topic_ACCOUNT = coderAbi.encode(['address'], [account]);
    const topic_POOLID = coderAbi.encode(['uint256'], [poolIdString]);

    const filterStrPool = {
        fromBlock: startBlock,
        toBlock: endBlock,
        topics: [[POOL_DEPOSIT[0], POOL_WITHDRAW[0]], topic_ACCOUNT],
        contractAddr: strToken,
    };
    const filterPostition = {
        fromBlock: startBlock,
        toBlock: endBlock,
        topics: [[POSITION_OPEN[0], POSITION_INCREASE[0], POSITION_DECREASE[0]], topic_POOLID, topic_ACCOUNT],
        contractName: 'tradingHub',
    };
    const poolLogs = await getThighInstance().ethUtil.getLogs(filterStrPool);
    const positionLogs = await getThighInstance().ethUtil.getLogs(filterPostition);

    const formattedPoolLogs = poolLogs.map((item: providers.Log) => {
        return decodePoolLog(item);
    });
    const formattedPositionLogs = positionLogs.map((item: providers.Log) => {
        return decodePositionLog(item);
    });
    return {
        poolId,
        user: account,
        logs: [...formattedPoolLogs, ...formattedPositionLogs],
    };
}

const operationMap = new Map();

function decodePoolLog(log: providers.Log): poolLog {
    const { topics, data } = log;

    const coderAbi = new utils.AbiCoder();

    const operation = operationMap.get(topics[0]);
    const amount = coderAbi.decode(['uint256'], data);

    return {
        operation,
        amount: amount[0],
    };
}

function decodePositionLog(log: providers.Log): poolLog {
    const { topics, data } = log;

    const coderAbi = new utils.AbiCoder();

    const operation = operationMap.get(topics[0]);
    const amount = coderAbi.decode(['uint256'], data);

    return {
        operation,
        amount: amount[0],
    };
}
