'use strict';
const Thigh = require('../dist/index.cjs');
const ethers = require('ethers');
const params = {
    thigh_account: '0xB7221e5Ab1171a860F1A7809c1CbE4B041BF703b',
    thigh_chainId: '0x04',
    thigh_name: 'Infura',
    thigh_rpc: 'https://rinkeby.infura.io/v3/171804856af343c29413c25bef295230',
    thigh_private_key: '1197602796b46cde4c166d90fc468032b533b39d22269d44d058f21b567669bc',
};
Thigh.config.init(params);

console.log('liquidation', Thigh.module.liquidation);

// const address = '0xE29657Ccdb737ad738a2E694787E1d9fC3ECaea5';

// Thigh.module.liquidation
//     .getPhase1Info(address)
//     .then((res) => {
//         console.log('getPhase1Info:', res);
//     })
//     .catch((e) => {
//         console.log('getPhase1Info', e);
//     });

// Thigh.module.liquidation
//     .getPhase2Info(address)
//     .then((res) => {
//         console.log('getPhase2Info:', res);
//     })
//     .catch((e) => {
//         console.log('getPhase2Info', e);
//     });

// queryResidues
const account = '0xB7221e5Ab1171a860F1A7809c1CbE4B041BF703b';
// Thigh.module.liquidation
//     .queryResidues(address, account)
//     .then((res) => {
//         console.log('queryResidues:', res);
//     })
//     .catch((e) => {
//         console.log('queryResidues', e);
//     });

//getPhase1BidList
// const fromBlock = 11225039;

// Thigh.module.liquidation
//     .getPhase1BidList(address, fromBlock)
//     .then((res) => {
//         console.log('getPhase1BidList:', res);
//     })
//     .catch((e) => {
//         console.log('getPhase1BidList', e);
//     });

// getLegacyInfo
// Thigh.module.liquidation
//     .getLegacyInfo(address)
//     .then((res) => {
//         console.log('getLegacyInfo:', res);
//     })
//     .catch((e) => {
//         console.log('getLegacyInfo', e);
//     });

// getResidues
const address = '0x93Bc8f6204d3A75B042311415AA5372318aED2E7';
// const bidSize = ethers.utils.parseUnits('0.01', 18);
// Thigh.module.liquidation
//     .executeNaginata(address, bidSize)
//     .then((res) => {
//         console.log('getResidues:', res);
//     })
//     .catch((e) => {
//         console.log('getResidues', e);
//     });

// getLegacyBidList
const fromBlock = 11262112;

Thigh.module.liquidation
    .getLegacyBidList(address, fromBlock)
    .then((res) => {
        console.log('getLegacyBidList:', res);
    })
    .catch((e) => {
        console.log('getLegacyBidList', e);
    });
