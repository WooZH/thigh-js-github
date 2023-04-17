'use strict';
const Thigh = require('../dist/index.cjs');
// StaticJsonRpcProvider
const params = {
    thigh_account: '0xB7221e5Ab1171a860F1A7809c1CbE4B041BF703b', //
    thigh_chainId: '0x04',
    thigh_name: 'Infura',
    thigh_rpc: 'https://rinkeby.infura.io/v3/171804856af343c29413c25bef295230',
    thigh_private_key: '1197602796b46cde4c166d90fc468032b533b39d22269d44d058f21b567669bc',
};
// JsonRpcProvider
// only view
const params1 = {
    thigh_chainId: '0x04',
    thigh_rpc: 'https://app.shorter.finance/rpc/rinkebyn',
};
Thigh.config.init(params1);

console.log(Thigh.eventListener);
// get currentBlockNumber
Thigh.ethersUtils
    .getCurrentBlockNumber()
    .then((res) => {
        console.log('block:', res);
    })
    .catch((e) => {
        console.log('error', e);
    });

const account = '0xB7221e5Ab1171a860F1A7809c1CbE4B041BF703b';

const tokenAddress = '0x9aa723B288692Df415d7E5E04eC3d271ef0aAdE4';

function receiver(log) {
    console.log('get log', new Date(), log);
}
// // Position Open

// on: 增加监听 off: 移除监听
Thigh.eventListener.on('tradingHub', 'PositionOpened', receiver);
// Thigh.eventListener.off('tradingHub', 'PositionOpened');

// {
//   name: 'PositionOpened',
//   signature: 'PositionOpened(uint256,address,address,uint256)',
//   topic: '0x9931fc1a74664316f768453232cd4f17f63c060ff3c43c99e92c83814879817a',
//   args: [
//     BigNumber { _hex: '0x0622', _isBigNumber: true },
//     '0xB7221e5Ab1171a860F1A7809c1CbE4B041BF703b',
//     '0x9c4a81F36DE08501C14A201755e94CF1fDF3521E',
//     BigNumber { _hex: '0x016345785d8a0000', _isBigNumber: true },
//     poolId: BigNumber { _hex: '0x0622', _isBigNumber: true },
//     trader: '0xB7221e5Ab1171a860F1A7809c1CbE4B041BF703b',
//     positionAddr: '0x9c4a81F36DE08501C14A201755e94CF1fDF3521E',
//     orderSize: BigNumber { _hex: '0x016345785d8a0000', _isBigNumber: true }
//   ]
// }
// // New Proposal
// Thigh.eventListener('tradingHub', 'PositionClosing', receiver);
// // Overdraw/Aborted
// Thigh.eventListener('tradingHub', 'PositionOverdrawn', receiver);
// // New Pool proposal
// Thigh.eventListener('committee', 'PoolProposalCreated', receiver);
// {
//     name: 'PoolProposalCreated',
//     signature: 'PoolProposalCreated(uint256,address)',
//     topic: '0xff43b0400f1576ad94e6bfaef0ab22965a42a52b8b1b7f486c7d451c2b024215',
//     args: [
//     BigNumber { _hex: '0x09b8', _isBigNumber: true },
//     '0xB7221e5Ab1171a860F1A7809c1CbE4B041BF703b',
//     proposalId: BigNumber { _hex: '0x09b8', _isBigNumber: true },
//     proposer: '0xB7221e5Ab1171a860F1A7809c1CbE4B041BF703b'
//     ]
// }

// // Proposal passed/failed
// Thigh.eventListener('committee', 'ProposalStatusChanged', receiver);
// {
//   name: 'ProposalStatusChanged',
//   signature: 'ProposalStatusChanged(uint256,uint256)',
//   topic: '0xf9ee1c4b5236b4677a9c5ade57b448076b6511f83fb5211a4bd7ff06612d10c3',
//   args: [
//     proposalId: BigNumber { _hex: '0x09b8', _isBigNumber: true },
//     ps: BigNumber { _hex: '0x03', _isBigNumber: true } // ps: 1 Passed; 2 Failed
//   ]
// }
// // Tanto Bidding
// const positionHash = '0xAc48Be682a004f0Fc48aAe67aEe9E7049ea0C794';
// Thigh.eventListener('auctionHall', 'BidTanto', receiver, positionHash);
//{
//   name: 'BidTanto',
//   signature: 'BidTanto(address,address,uint256,uint256)',
//   topic: '0xae5eb2c72552d379e9589a067a181f1e1ca969299075d1972feb7413996579ef',
//   args: [
//     '0xAc48Be682a004f0Fc48aAe67aEe9E7049ea0C794',
//     '0xECdA85c940d7392A5D8D78dE605d59b6aE8313B4',
//     BigNumber { _hex: '0x0de0b6b3a7640000', _isBigNumber: true },
//     BigNumber { _hex: '0x8ac7230489e80000', _isBigNumber: true },
//     positionAddr: '0xAc48Be682a004f0Fc48aAe67aEe9E7049ea0C794',
//     ruler: '0xECdA85c940d7392A5D8D78dE605d59b6aE8313B4',
//     bidSize: BigNumber { _hex: '0x0de0b6b3a7640000', _isBigNumber: true },
//     priorityFee: BigNumber { _hex: '0x8ac7230489e80000', _isBigNumber: true }
//   ]
// }
