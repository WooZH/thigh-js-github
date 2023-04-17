const { Thigh } = require('../dist/index.cjs');

const params = {
    chainId: '0x05',
    rpc: 'https://goerli.infura.io/v3/171804856af343c29413c25bef295230',
};

const thigh = new Thigh(params);
const test_accoumt = '0xEA82594EB8328aA829327edb61f1c98e4ad5507D';

// LP Pool address
// Thigh.module.farming
//     .getPendingReward(address)
//     .then((res) => {
//         console.log('Farming getPendingReward', res);
//     })
//     .catch((e) => {
//         console.log('error', e);
//     });

// getAllPendingRewards

/**
 * govRewards,
    farmingRewards,
    voteAgainstRewards,
    tradingRewardPools,
    stakedRewardPools,
    createRewardPools,
    voteRewardPools
 */
/**
 *
 * @param {*} params
 */
// Farming
// getPendingReward & harvestAll
// function harvestAll(params) {
//     console.log('params', params);
//     Thigh.module.farming
//         .harvestAllRewards(params)
//         .then((res) => {
//             console.log('Farming harvestAllRewards', res);
//         })
//         .catch((e) => {
//             console.log('error', e);
//         });
// }

thigh.module.farming
    .getAllPendingRewards(test_accoumt)
    .then((res) => {
        console.log('getAllPendingRewards', res);
        // harvestAll(res);
    })
    .catch((e) => {
        console.log('error', e);
    });
