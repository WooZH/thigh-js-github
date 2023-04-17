'use strict';
const Thigh = require('../dist/index.cjs');

const params = {
    thigh_account: '0xB7221e5Ab1171a860F1A7809c1CbE4B041BF703b',
    thigh_chainId: '0x04',
    thigh_name: 'Infura',
    thigh_rpc: 'https://rinkeby.infura.io/v3/171804856af343c29413c25bef295230',
    thigh_private_key: '1197602796b46cde4c166d90fc468032b533b39d22269d44d058f21b567669bc',
};
Thigh.config.init(params);

// grabReward
// get and grab
// done
// Thigh.module.reward
//     .getGrabReward()
//     .then((res) => {
//         console.log('reward getGrabReward', res);
//         Thigh.module.reward.grabReward(res.data, res.signature).then((res) => {
//             console.log('grab', res);
//         });
//     })
//     .catch((e) => {
//         console.log('error', e);
//     });

const account = '0xB7221e5Ab1171a860F1A7809c1CbE4B041BF703b';
// Thigh.module.reward
//     .getCommitteeReward(account)
//     .then((res) => {
//         console.log('reward getCommitteeReward', res, res.toString());
//     })
//     .catch((e) => {
//         console.log('error getCommitteeReward', e);
//     });

// getPoolIpistrPerBlock
// Thigh.module.reward
//     .getPoolIpistrPerBlock()
//     .then((res) => {
//         console.log('reward getPoolIpistrPerBlock', res, res.toString());
//     })
//     .catch((e) => {
//         console.log('error getPoolIpistrPerBlock', e);
//     });

// getPoolRewardMap
// const poolId = 1775;

// Thigh.module.reward
//     .getPoolRewardMap(poolId)
//     .then((res) => {
//         console.log('reward getPoolRewardMap', res);
//     })
//     .catch((e) => {
//         console.log('error getPoolRewardMap', e);
//     });

//totalAllocPoint

// Thigh.module.reward
//     .totalAllocPoint()
//     .then((res) => {
//         console.log('reward totalAllocPoint', res);
//     })
//     .catch((e) => {
//         console.log('error totalAllocPoint', e);
//     });

//getTradingReward
// Thigh.module.reward
//     .getTradingReward(account)
//     .then((res) => {
//         console.log('reward getTradingReward', res);
//     })
//     .catch((e) => {
//         console.log('error getTradingReward', e);
//     });

//getPoolFailureReward
// Thigh.module.reward
//     .getPoolFailureReward(account)
//     .then((res) => {
//         console.log('reward getPoolFailureReward', res);
//     })
//     .catch((e) => {
//         console.log('error getPoolFailureReward', e);
//     });
