const { Thigh } = require('../dist/index.cjs');

const params = {
    chainId: '0x05',
    rpc: 'https://goerli.infura.io/v3/171804856af343c29413c25bef295230',
};

const thigh = new Thigh(params);
// IPISTR
const tokenAddress = '0x54c31aBbBd6811DA7fAa7f46813AD46f0bcD0101';
// ETH
// const tokenAddress = '0xF7aEe75F7AEFF5349796A88e3d3d70bfc5EF1276';

// thigh.module.token
//     .getTokenPrice(tokenAddress)
//     .then((res) => {
//         console.log('getTokenPrice', res);
//     })
//     .catch((e) => {
//         console.log('error getTokenPrice', e);
//     });

thigh.module.token
    .getGasPrice()
    .then((res) => {
        console.log('getGasPrice', res);
    })
    .catch((e) => {
        console.log('error getTokenPrice', e);
    });

// // getTokenInfo
// thigh.module.token
//     .getTokenInfo(tokenAddress)
//     .then((res) => {
//         console.log('getTokenInfo', res);
//     })
//     .catch((e) => {
//         console.log('error getTokenInfo', e);
//     });

// // getTokenWhiteList;
// thigh.module.token
//     .getTokenWhiteList(tokenAddress)
//     .then((res) => {
//         console.log('getTokenWhiteList', res);
//     })
//     .catch((e) => {
//         console.log('error getTokenWhiteList', e);
//     });
