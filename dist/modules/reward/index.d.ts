/**
 * done
 * getCommitteeReward
 * @param {userAccount} account
 * @returns
 */
export declare function getCommitteeReward(account: string): Promise<any>;
/**
 * done
 * get Grab Reward
 * @returns
 */
export declare function getGrabReward(): Promise<{
    reward: any;
    estimateGasLimit: any;
    data: any;
    signature: any;
}>;
/**
 * done
 *  harvest grab reward
 * @param {*} data
 * @param {*} signature
 * @returns
 */
export declare function grabReward(data: any, signature: any): Promise<any>;
/**
 * done
 * @returns pool contract IPISTR reward per block
 */
export declare function getPoolIpistrPerBlock(): Promise<any>;
/**
 * done
 * @param {Number} poolId
 * @returns
 */
export declare function getPoolRewardMap(poolId: number): Promise<{
    accIPISTRPerShare: any;
    allocPoint: any;
    multiplier: any;
    lastRewardBlock: any;
}>;
/**
 * get total reward weight by strToken
 * @returns
 */
export declare function totalAllocPoint(): Promise<any>;
/**
 * done
 * get personal IPISTR reward by poolId
 * @param {} poolId
 * @param {*} account
 * @returns
 */
export declare function getPendingIpistrs(poolId: number, account: string): Promise<any>;
/**
 * done
 * get trading reward by user account
 * @param {*} account
 * @returns
 */
export declare function getTradingReward(account: string): Promise<{
    rewards: any;
    poolIds: any;
}>;
/**
 * get pool failure reward
 * @param {*} account
 * @returns
 */
export declare function getPoolFailureReward(account: string): Promise<any>;
