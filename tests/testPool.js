// 2022-1128
const { Thigh } = require('../dist/index.cjs');

const params = {
    chainId: '0x05',
    rpc: 'https://goerli.infura.io/v3/171804856af343c29413c25bef295230',
};

const thigh = new Thigh(params);
const test_accoumt = '0xEA82594EB8328aA829327edb61f1c98e4ad5507D';
// thigh.module.pool.getLogs('0x16a', test_accoumt).then((res) => {
//     console.log('getLogs', res);
// });

// thigh.module.pool.getParticipantNumber('0x16a').then((res) => {
//     console.log('getLogs', res);
// });

// thigh.module.pool.getPools('0x3e15f804c48963dCB8370a5D96EB2b154b98B91D', 1).then((res) => {
//     console.log('getPools', res);
// });
