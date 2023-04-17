import * as auctionHall from '../../contracts/auctionHall';
import * as vaultButler from '../../contracts/vaultButler';
import { getThighInstance } from '../../thigh';
import { BigNumber, utils } from 'ethers';
import { isSwapRouterV3 } from '../trading';
/**
 * done
 * @param {*} address
 * @returns
 */
export async function getPhase1Info(address: string) {
    const contract = await auctionHall.getContract();
    const { bidSize, liquidationPrice, flag, isSorted } = await contract.phase1Infos(address);
    return {
        bidSize,
        liquidationPrice,
        isSorted,
        flag, // true: debts have been cleared
    };
}

/**
 * done
 * @param {*} address
 * @returns
 */
export async function getPhase2Info(address: string) {
    const contract = await auctionHall.getContract();
    const res = await contract.phase2Infos(address);
    return {
        isWithdrawn: res.isWithdrawn,
        rulerAddr: res.rulerAddr,
        debtSize: res.debtSize,
        usedCash: res.usedCash,
        dexCoverReward: res.dexCoverReward,
        flag: res.flag,
    };
}

/**
 * done
 * get legacy information
 * @param {*} positionHash
 * @returns
 */
export async function getLegacyInfo(positionHash: string) {
    const contract = await vaultButler.getContract();

    const res = await contract.legacyInfos(positionHash);
    return {
        bidSize: res.bidSize,
        usedCash: res.usedCash,
    };
}

/**
 * done
 * @param {String} address
 * @param {Number} fromBlock
 * @param {Number} toBlock Optional
 * @returns
 */
export async function getPhase1BidList(address: string, fromBlock: number, toBlock: number | string = 'latest') {
    const topics = await getThighInstance().ethUtil.encodeFilterTopics(auctionHall.abi, 'BidTanto');

    const coderAbi = new utils.AbiCoder();
    topics.push(coderAbi.encode(['address'], [address]));
    const res = await getThighInstance().ethUtil.getLogs({
        fromBlock,
        toBlock,
        topics,
        contractName: 'auctionHall',
    });
    const decodedRes = res.map((item) => {
        return transPhase1BidLog(item);
    });
    return decodedRes;
}

function transPhase1BidLog(log: any) {
    try {
        const iface = new utils.Interface(auctionHall.abi);
        const item = iface.parseLog(log);
        if (item.name === 'BidTanto') {
            const args = item.args;
            return {
                ruler: args.ruler,
                positionAddr: args.positionAddr,
                bidSize: args.bidSize,
                priorityFee: args.priorityFee,
                blockNumber: log.blockNumber,
                transactionHash: log.transactionHash,
            };
        }
        return false;
    } catch (error) {
        return null;
    }
}

/**
 * done
 * query residues by position's hash and user account
 * @param {*} address
 * @param {*} account
 * @returns
 */
export async function queryResidues(address: string, account: string) {
    const contract = await auctionHall.getContract();
    const res = await contract.queryResidues(address, account);
    return {
        debtTokenSize: res.debtTokenSize,
        priorityFee: res.priorityFee,
        stableTokenSize: res.stableTokenSize,
    };
}

/**
 *done
 * @param {positionHash} address
 * @returns
 */

export async function getResidues(address: string) {
    const contract = await auctionHall.getContract(false);
    const tx = await contract.retrieve(address);
    const result = await tx.wait();
    return result;
}

/**
 * phase1 step bid
 * @param {*} address
 * @param {BigNumber} bidSize
 * @param {BigNumber} priorityFee
 * @returns
 */
export async function bidTanto(address: string, bidSize: BigNumber, priorityFee: BigNumber) {
    const contract = await auctionHall.getContract(false);

    const tx = await contract.bidTanto(address, bidSize, priorityFee);
    const result = await tx.wait();
    return result;
}

/**
 * phase2 step bid
 * @param {} address
 * @param {*} path
 * @param {*} swapRouter - stakedToken's swapRouter
 * @returns
 */
export async function bidKatana(address: string, stakedToken: any, stableToken: any, swapRouter: any) {
    const contract = await auctionHall.getContract(false);
    let path = [stakedToken, stableToken];
    const isV3 = await isSwapRouterV3(swapRouter);
    if (isV3) {
        path = path.reverse();
    }
    const fees = [3000];
    const encodedPath = getThighInstance().ethUtil.encodePath(path, fees);
    const tx = await contract.bidKatana(address, encodedPath);
    const result = await tx.wait();
    return result;
}

/**
 * done
 * legacy step bid
 * @param {*} hash
 * @param {*} bidSize
 * @returns
 */
export async function executeNaginata(hash: string, bidSize: any) {
    const contract = await vaultButler.getContract(false);
    const tx = await contract.executeNaginata(hash, bidSize);
    const result = await tx.wait();
    return result;
}

/**
 * done
 * @param {*} positionHash
 * @param {Number} fromBlock
 * @param {Number} toBlock optional
 * @returns
 */
export async function getLegacyBidList(positionHash: string, fromBlock: number, toBlock: number | string = 'latest') {
    const topics = await getThighInstance().ethUtil.encodeFilterTopics(vaultButler.abi, 'ExecuteNaginata');

    const coderAbi = new utils.AbiCoder();
    topics.push(coderAbi.encode(['address'], [positionHash]));
    const res = await getThighInstance().ethUtil.getLogs({
        fromBlock,
        toBlock,
        topics,
        contractName: 'vaultButler',
    });
    const decodedRes = res.map((item) => {
        return transLegacyLog(item);
    });
    return decodedRes;
}

function transLegacyLog(log: any) {
    try {
        const iface = new utils.Interface(vaultButler.abi);
        const item = iface.parseLog(log);
        if (item.name === 'ExecuteNaginata') {
            const args = item.args;
            return {
                ruler: args.ruler,
                positionAddr: args.positionAddr,
                bidSize: args.bidSize,
                receiveSize: args.receiveSize,
                blockNumber: log.blockNumber,
                transactionHash: log.transactionHash,
            };
        }
        return null;
    } catch (error) {
        console.log(error);
        return null;
    }
}
