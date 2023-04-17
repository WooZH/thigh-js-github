'use strict';
const Thigh = require('../dist/index.cjs');

const params = {
    // thigh_account: '0xEA82594EB8328aA829327edb61f1c98e4ad5507D',
    thigh_chainId: '0x05',
    // thigh_name: 'Infura',
    thigh_rpc: 'https://goerli.infura.io/v3/171804856af343c29413c25bef295230',
    thigh_private_key: '1197602796b46cde4c166d90fc468032b533b39d22269d44d058f21b567669bc',
};
Thigh.config.init(params);

const thigh = new Thigh.Thigh(Thigh.config);

const account = '0xEA82594EB8328aA829327edb61f1c98e4ad5507D';

const tokenAddress = '0x54c31aBbBd6811DA7fAa7f46813AD46f0bcD0101';
const ETHAddress = '0xF7aEe75F7AEFF5349796A88e3d3d70bfc5EF1276';

// console.log('Thigh.module', Thigh.module);

thigh.module.account
    .getBalanceOf(tokenAddress, account)
    .then((res) => {
        console.log('getBalanceOf IPISTR:', res);
    })
    .catch((e) => {
        console.log('getBalanceOf', e);
    });

thigh.module.account
    .getETHBalanceOf(account)
    .then((res) => {
        console.log('getETHBalanceOf:', res);
        console.log('getETHBalanceOf String:', res.toString());
    })
    .catch((e) => {
        console.log('getETHBalanceOf', e);
    });
