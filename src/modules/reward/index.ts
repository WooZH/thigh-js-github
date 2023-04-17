import * as GrabReward from '../../contracts/grabReward';
import * as govReward from '../../contracts/govReward';
import * as poolReward from '../../contracts/poolReward';
import * as tradingReward from '../../contracts/tradingReward';
import * as voteReward from '../../contracts/voteReward';

/**
 * done
 * getCommitteeReward
 * @param {userAccount} account
 * @returns
 */
export async function getCommitteeReward(account: string) {
    const govContract = await govReward.getContract();
    const res = await govContract.pendingReward(account);
    return res;
}

/**
 * done
 * get Grab Reward
 * @returns
 */
export async function getGrabReward() {
    const grabContract = await GrabReward.getContract();
    const res = await grabContract.pendingReward();
    return {
        reward: res.reward,
        estimateGasLimit: res.estimateGasLimit,
        data: res.data,
        signature: res._signature,
    };
}

/**
 * done
 *  harvest grab reward
 * @param {*} data
 * @param {*} signature
 * @returns
 */
export async function grabReward(data: any, signature: any) {
    const grabContract = await GrabReward.getContract(false);
    const tx = await grabContract.harvest(data, signature);
    const res = await tx.wait();
    return res;
}

// Pool Reward

/**
 * done
 * @returns pool contract IPISTR reward per block
 */
export async function getPoolIpistrPerBlock() {
    const poolRewardContract = await poolReward.getContract();
    const result = await poolRewardContract.ipistrPerBlock();
    return result;
}

/**
 * done
 * @param {Number} poolId
 * @returns
 */
export async function getPoolRewardMap(poolId: number) {
    const poolRewardContract = await poolReward.getContract();
    const result = await poolRewardContract.poolInfoMap(poolId);
    return {
        accIPISTRPerShare: result.accIPISTRPerShare,
        allocPoint: result.allocPoint,
        multiplier: result.multiplier,
        lastRewardBlock: result.lastRewardBlock,
    };
}

/**
 * get total reward weight by strToken
 * @returns
 */
export async function totalAllocPoint() {
    const poolRewardContract = await poolReward.getContract();

    const result = await poolRewardContract.totalAllocWeight();
    return result;
}

/**
 * done
 * get personal IPISTR reward by poolId
 * @param {} poolId
 * @param {*} account
 * @returns
 */
export async function getPendingIpistrs(poolId: number, account: string) {
    const contract = await poolReward.getContract();
    const rewards = await contract.pendingPoolReward(account, poolId);
    return rewards;
}

// trading reward done

/**
 * done
 * get trading reward by user account
 * @param {*} account
 * @returns
 */
export async function getTradingReward(account: string) {
    const tradingRewardContract = await tradingReward.getContract();
    const res = await tradingRewardContract.pendingReward(account);
    return {
        rewards: res.rewards,
        poolIds: res.poolIds,
    };
}

// Vote reward

/**
 * get pool failure reward
 * @param {*} account
 * @returns
 */
export async function getPoolFailureReward(account: string) {
    const voteRewardContract = await voteReward.getContract();
    const reward = await voteRewardContract.pendingReward(account);
    return reward;
}
