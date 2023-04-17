import * as committee from '../../contracts/committee';
import { BigNumber, utils } from 'ethers';
import { getThighInstance } from '../../thigh';
import { spliceIntoChunks } from '../../utils/array';
/**
 * get all rulers
 * ruler: voteWeight > 0.001(0.1%)
 * @returns all rulers
 * [
 *   {
 *      account: String,
 *      amount: BigNUmber,
 *      voteWeight: Number,
 *   },
 *   ...
 * ]
 */
export async function getAllRulers() {
    const START_BLOCK = getThighInstance().ethUtil.getContractDeployBlock('committee');
    const topics = await getThighInstance().ethUtil.encodeFilterTopics(committee.abi, 'DepositCommittee' as any);
    const depositedUsers = await getThighInstance().ethUtil.getLogs({
        fromBlock: START_BLOCK,
        toBlock: 'latest',
        topics,
        contractName: 'committee',
    });
    const committeeMultiContract = committee.getMulticallContract();
    const callList: any[] = [];

    const totalIPISTR = await getTotalIpistrStakedShare();
    const res = new Map();
    const decodedRes = depositedUsers
        .map((item) => {
            return getThighInstance().ethUtil.decodeLogs(item, committee.abi);
        })
        .map((item: any) => {
            return {
                account: item.args.user,
            };
        })
        .filter((item) => !res.has(item['account']) && res.set(item['account'], 1));

    decodedRes.map((item) => {
        callList.push(committeeMultiContract.getUserShares(item.account));
    });
    const callProvider = await getThighInstance().ethUtil.getMulticallProvider();

    const temp = await callProvider.all(callList);

    const rulersList = decodedRes
        .map((item, index) => {
            const percent = temp[index].totalShare.toString() / totalIPISTR.toString();
            return {
                account: item.account,
                amount: temp[index].totalShare,
                voteWeight: percent,
            };
        })
        .filter((item) => item.voteWeight > 0.001)
        .sort((a, b) => b.voteWeight - a.voteWeight);
    return rulersList;
}

/**
 * done
 * get all proposalId from committee contract deploy block
 * @returns return all proposalId
 * {
            proposalId: item.args.proposalId,
            proposer: item.args.proposer,
            blockNumber: item.blockNumber,
        }
 */
export async function getProposalIdList() {
    const START_BLOCK = getThighInstance().ethUtil.getContractDeployBlock('committee');
    const topics = await getThighInstance().ethUtil.encodeFilterTopics(committee.abi, 'PoolProposalCreated' as any);
    const res = await getThighInstance().ethUtil.getLogs({
        fromBlock: START_BLOCK,
        toBlock: 'latest',
        topics,
        contractName: 'committee',
    });
    const decodedRes = res.map((item) => {
        return getThighInstance().ethUtil.decodeLogs(item, committee.abi);
    });
    return decodedRes.map((item: any) => {
        return {
            proposalId: item.args.proposalId,
            proposer: item.args.proposer,
            blockNumber: item.blockNumber,
        };
    });
}

export async function getAllProposals() {
    const proposalIdList = await getProposalIdList();
    const committeeMultiContract = committee.getMulticallContract();
    const callList: any[] = [];
    proposalIdList.forEach((item) => {
        callList.push(committeeMultiContract.proposalGallery(item.proposalId));
        callList.push(committeeMultiContract.poolMetersMap(item.proposalId));
    });
    const callProvider = await getThighInstance().ethUtil.getMulticallProvider();

    const res = await callProvider.all(callList);
    const temp = spliceIntoChunks(res, 2);
    const splitedRes = temp.map((item) => {
        const gallery = item[0];
        const meters = item[1];
        return {
            proposalId: gallery.id,
            status: gallery.status,
            proposer: gallery.proposer,
            startBlock: gallery.startBlock,
            endBlock: gallery.endBlock,
            catagory: gallery.catagory,
            totalFor: gallery.forShares,
            totalAgainst: gallery.againstShares,
            duration: meters.durationDays,
            leverage: meters.leverage,
            tokenAddress: meters.tokenContract,
        };
    });

    return splitedRes;
}

/**
 * done
 * get proposal history
 * @param {Number} id proposal id
 * @returns [{
 *  proposalId: BigNumber,
 *  status: String,
 *  blockNumber: Number
 * }]
 */
export async function getProposalHistory(id: string) {
    const { startBlock } = await getProposalInfoById(id);
    const topics = await getThighInstance().ethUtil.encodeFilterTopics(committee.abi, 'ProposalStatusChanged' as any);
    const START_BLOCK = Number(startBlock.toString());
    const coderAbi = new utils.AbiCoder();
    topics.push(coderAbi.encode(['uint256'], [id]));

    const res = await getThighInstance().ethUtil.getLogs({
        fromBlock: START_BLOCK,
        toBlock: 'latest',
        topics,
        contractName: 'committee',
    });
    const decodedRes = res.map((item) => {
        return getThighInstance().ethUtil.decodeLogs(item, committee.abi);
    });

    return decodedRes.map((item: any) => {
        return {
            proposalId: item.args.proposalId,
            status: item.args.ps.toString(),
            blockNumber: item.blockNumber,
        };
    });
}

/**
 * done
 * get proposal info by id
 * @param {Number} id
 * @returns
 */
export async function getProposalInfoById(id: string) {
    const contract = await committee.getContract();
    const proposalGallery = await contract.proposalGallery(id);
    return {
        id,
        status: proposalGallery.status,
        proposer: proposalGallery.proposer,
        category: proposalGallery.catagory,
        forShares: proposalGallery.forShares,
        againstShares: proposalGallery.againstShares,
        endBlock: proposalGallery.endBlock,
        startBlock: proposalGallery.startBlock,
    };
}

/**
 * done
 * create pool proposal
 * @param {String} tokenAddress token address
 * @param {Number} leverage 1,2,5,10
 * @param {Number} durationDays 1~1000
 * @param {String} from user account
 * @returns
 */
export async function createPoolProposal(tokenAddress: string, leverage: number, durationDays: number, from: string) {
    const contract = await committee.getContract(false);
    const tx = await contract.createPoolProposal(tokenAddress, leverage, durationDays, { from });
    const receipt = await tx.wait();
    return receipt;
}
/**
 * done
 * create ETH pool proposal
 * @param {Number} leverage 1,2,5,10
 * @param {Number} durationDays 1~1000
 * @param {String} from user account
 * @returns
 */
export async function createEthPoolProposal(leverage: number, durationDays: number, from: string) {
    const ETH_ADDRESS = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE';
    const contract = await committee.getContract(false);
    const tx = await contract.createPoolProposal(ETH_ADDRESS, leverage, durationDays, { from });
    const receipt = await tx.wait();
    return receipt;
}

/**
 * done
 *  get pool committee detail
 * @param {*} id
 * @returns return new pool proposal information
 */
export async function poolMetersMap(id: string) {
    const contract = await committee.getContract();
    const { durationDays, leverage, tokenContract } = await contract.poolMetersMap(id);
    return {
        durationDays,
        leverage,
        tokenContract,
    };
}

/**
 * done
 * withdraw
 * @param {*} amount
 * @param {*} account
 * @returns
 */
export async function withdraw(amount: BigNumber, account: string) {
    let withdrawAmount = amount;
    if (!BigNumber.isBigNumber(amount)) {
        withdrawAmount = utils.parseUnits(withdrawAmount.toString(), 18);
    }
    const contract = await committee.getContract(false);
    const tx = await contract.withdraw(withdrawAmount, { from: account });
    const result = await tx.wait();
    return result;
}

/**
 * done
 * deposit ipistr to committee contract
 * @param {BigNumber} amount
 * @param {address} account
 * @returns
 */
export async function deposit(amount: BigNumber, account: string) {
    let depositAmount = amount;
    if (!BigNumber.isBigNumber(amount)) {
        depositAmount = utils.parseUnits(depositAmount.toString(), 18);
    }
    const contract = await committee.getContract(false);
    const tx = await contract.deposit(depositAmount, { from: account });
    const result = await tx.wait();
    return result;
}

/**
 * done
 * vote for proposal
 * @param {Number} proposalId
 * @param {Boolean} direction BOOLEAN true: in favour; false: against
 * @param {Number/BigNumber} voteShare
 * @returns
 */
export async function vote(proposalId: number, direction: boolean, voteShare: number | BigNumber) {
    let share = voteShare;
    if (BigNumber.isBigNumber(voteShare)) {
        share = utils.parseUnits(share.toString(), 18);
    }
    const contract = await committee.getContract(false);
    const tx = await contract.vote(proposalId, direction, share);
    const voteResult = await tx.wait();
    return voteResult;
}

/**
 * done
 * Determine the identity of the user
 * @param {String} account
 * @returns
 */
export async function isRuler(account: string) {
    const contract = await committee.getContract();
    const result = await contract.isRuler(account);
    return result;
}

/**
 * done
 * get total staked ipistr amount
 * @returns
 */
export async function getTotalIpistrStakedShare() {
    const contract = await committee.getContract();
    const res = await contract.totalIpistrStakedShare();
    return res;
}

/**
 * done
 * get user shares
 * @param {String} account
 * @returns
 */
export async function getUserShares(account: string) {
    const contract = await committee.getContract();
    const res = await contract.getUserShares(account);
    return {
        lockedShare: res.lockedShare,
        totalShare: res.totalShare,
    };
}
