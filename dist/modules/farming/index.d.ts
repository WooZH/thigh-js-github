export declare function getAllPendingRewards(account: string): Promise<{
    govRewards: any;
    farmingRewards: any;
    voteAgainstRewards: any;
    tradingRewards: any;
    stakedRewards: any;
    creatorRewards: any;
    voteRewards: any;
    tradingRewardPools: any;
    stakedRewardPools: any;
    createRewardPools: any;
    voteRewardPools: any;
}>;
export declare function harvestAllRewards(params: any): Promise<any>;
export declare function getPendingReward(account: string): Promise<{
    reward: any;
    unlockedReward: any;
}>;
export declare function harvest(): Promise<any>;
