const Thigh = require('../dist/index.cjs');

console.log(Thigh);
const params = {
    thigh_account: '0xEA82594EB8328aA829327edb61f1c98e4ad5507D',
    thigh_chainId: '0x04',
    thigh_name: 'Infura',
    thigh_rpc: 'https://rinkeby.infura.io/v3/171804856af343c29413c25bef295230',
};
Thigh.config.init(params);
