const { Thigh } = require('../dist/index.cjs');

const params = {
    chainId: '0x05',
    rpc: 'https://goerli.infura.io/v3/171804856af343c29413c25bef295230',
};

const thigh = new Thigh(params);
const test_accoumt = '0xEA82594EB8328aA829327edb61f1c98e4ad5507D';

//1: closing 2: legacy 3:finished
thigh.module.position.getLiquidatingPositions(3).then((res) => {
    console.log('getLiquidationPositions finished', res);
});

//positionHash 0xb34D748dCc2C6875E0201C53191263b9089edF9b

const positionHash = '0xb34D748dCc2C6875E0201C53191263b9089edF9b';
// Thigh.module.position
//     .getInfoByAddress(positionHash)
//     .then((res) => {
//         console.log('getInfoByAddress:', res);
//     })
//     .catch((e) => {
//         console.log('getInfoByAddress', e);
//     });
// console.log('POSITION_STATUS', Thigh.module.position.POSITION_STATUS);
// Thigh.module.position
//     .getPositionBlocks(positionHash)
//     .then((res) => {
//         console.log('getPositionBlocks:', res);
//     })
//     .catch((e) => {
//         console.log('getPositionBlocks', e);
//     });

// swap 0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D
// poolId, amount, swapRouter, token0 staked, token1 stable
// v2
// const poolId = 1775;
// const token0 = '0x05DeA077274b999691BB5a53df4970794198f8A3';
// const token1 = '0x9aa723B288692Df415d7E5E04eC3d271ef0aAdE4';
// const swap = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D';
// v3
const poolId = 1707;
const token0 = '0x05DeA077274b999691BB5a53df4970794198f8A3';
const token1 = '0xAfFdA2029D05046672Db1b498CFe19901A39DE85';
const swap = '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45';

// const amount = ethers.utils.parseUnits('0.01', 18);
// Thigh.module.position
//     .buyCover(poolId, amount, swap, token0, token1)
//     .then((res) => {
//         console.log('buyCover:', res);
//     })
//     .catch((e) => {
//         console.log('buyCover', e);
//     });

// const amount = ethers.utils.parseUnits('0.1', 18);
// Thigh.module.position
//     .sellShort(poolId, amount, swap, token0, token1)
//     .then((res) => {
//         console.log('buyCover:', res);
//     })
//     .catch((e) => {
//         console.log('buyCover', e);
//     });
// Thigh.module.trading
//     .getExpectedPrice(amount, token0, token1, swap, 300)
//     .then((res) => {
//         console.log('getExpectedPrice:', res);
//     })
//     .catch((e) => {
//         console.log('getExpectedPrice', e);
//     });
