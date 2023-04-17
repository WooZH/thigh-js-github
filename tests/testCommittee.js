const { Thigh } = require('../dist/index.cjs');

const params = {
    chainId: '0x05',
    rpc: 'https://goerli.infura.io/v3/171804856af343c29413c25bef295230',
};

const thigh = new Thigh(params);

// //createPoolProposal
// //create pool 0xAfFdA2029D05046672Db1b498CFe19901A39DE85 1 5 {from: '0xB7221e5Ab1171a860F1A7809c1CbE4B041BF703b'}

/**
 *
 */
thigh.module.committee
    .getAllProposals()
    .then((res) => {
        console.log('getAllProposals:', res, res.length);
    })
    .catch((e) => {
        console.log('getAllProposals error', e);
    });
// thigh.module.committee
//     .getProposalIdList()
//     .then((res) => {
//         console.log('getProposalIdList:', res);
//     })
//     .catch((e) => {
//         console.log('getProposalIdList error', e);
//     });

// //vote
// Thigh.module.committee
//     .vote(1707, false, 100)
//     .then((res) => {
//         console.log('vote:', res);
//     })
//     .catch((e) => {
//         console.log('vote error', e);
//     });

// //isRuler
// Thigh.module.committee
//     .isRuler('0xEA82594EB8328aA829327edb61f1c98e4ad5507D')
//     .then((res) => {
//         console.log('isRuler:', res);
//     })
//     .catch((e) => {
//         console.log('isRuler error', e);
//     });

// //deposit
// Thigh.module.committee
//     .deposit(100.33, '0xB7221e5Ab1171a860F1A7809c1CbE4B041BF703b')
//     .then((res) => {
//         console.log('deposit:', res);
//     })
//     .catch((e) => {
//         console.log('deposit error', e);
//     });

// //withdraw
// Thigh.module.committee
//     .withdraw(100, '0xB7221e5Ab1171a860F1A7809c1CbE4B041BF703b')
//     .then((res) => {
//         console.log('withdraw:', res);
//     })
//     .catch((e) => {
//         console.log('withdraw error', e);
//     });

// //getUserShare
// Thigh.module.committee
//     .getUserShares('0xB7221e5Ab1171a860F1A7809c1CbE4B041BF703b')
//     .then((res) => {
//         console.log('getUserShare:', res);
//     })
//     .catch((e) => {
//         console.log('getUserShare error', e);
//     });

// //getProposalInfoById
// Thigh.module.committee
//     .getProposalInfoById(1707)
//     .then((res) => {
//         console.log('getProposalInfoById:', res);
//     })
//     .catch((e) => {
//         console.log('getProposalInfoById error', e);
//     });

// //poolMetersMap
// Thigh.module.committee
//     .poolMetersMap(1707)
//     .then((res) => {
//         console.log('poolMetersMap:', res);
//     })
//     .catch((e) => {
//         console.log('poolMetersMap error', e);
//     });

// getTotalIpistrStakedShare
// Thigh.module.committee
//     .getTotalIpistrStakedShare()
//     .then((res) => {
//         console.log('getTotalIpistrStakedShare:', res);
//     })
//     .catch((e) => {
//         console.log('getTotalIpistrStakedShare error', e);
//     });

// getProposalIdList

// Thigh.module.committee
//     .getProposalIdList()
//     .then((res) => {
//         console.log('getProposalIdList:', res);
//     })
//     .catch((e) => {
//         console.log('getProposalIdList error', e);
//     });

// getProposalHistory

// const id = 1903;
// Thigh.module.committee
//     .getProposalHistory(id)
//     .then((res) => {
//         console.log('getProposalHistory:', res);
//     })
//     .catch((e) => {
//         console.log('getProposalHistory error', e);
//     });
