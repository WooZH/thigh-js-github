import * as Farming from '../../contracts/farming';
import * as FarmingReward from '../../contracts/farmingReward';

export async function getAllPendingRewards(account: string) {
    const contract = await Farming.getContract();
    const res = await contract.allPendingRewards(account);
    return {
        govRewards: res.govRewards,
        farmingRewards: res.farmingRewards,
        voteAgainstRewards: res.voteAgainstRewards,
        tradingRewards: res.tradingRewards,
        stakedRewards: res.stakedRewards,
        creatorRewards: res.creatorRewards,
        voteRewards: res.voteRewards,
        tradingRewardPools: res.tradingRewardPools,
        stakedRewardPools: res.stakedRewardPools,
        createRewardPools: res.createRewardPools,
        voteRewardPools: res.voteRewardPools,
    };
}

export async function harvestAllRewards(params: any) {
    const contract = await Farming.getContract(false);
    const tx = await contract.harvestAll(
        params.govRewards,
        params.farmingRewards,
        params.voteAgainstRewards,
        params.tradingRewardPools,
        params.stakedRewardPools,
        params.createRewardPools,
        params.voteRewardPools
    );
    const results = await tx.wait();
    return results;
}

export async function getPendingReward(account: string) {
    const contract = await FarmingReward.getContract();
    const res = await contract.pendingReward(account);
    return {
        reward: res.rewards_,
        unlockedReward: res.unLockRewards_,
    };
}

export async function harvest() {
    const contract = await Farming.getContract();
    const tx = await contract.harvest();
    const receipt = await tx.wait();
    return receipt;
}
