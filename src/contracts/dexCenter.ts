import { JsonFragment } from '@ethersproject/abi';
import { getThighInstance } from '../thigh';

const abi: ReadonlyArray<JsonFragment> = [
    {
        inputs: [{ internalType: 'address', name: '', type: 'address' }],
        name: 'isSwapRouterV3',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        stateMutability: 'view',
        type: 'function',
    },
];

async function getContract() {
    const Contract = await getThighInstance().ethUtil.getContractByName('dexCenter', abi);
    return Contract;
}
function getMulticallContract() {
    return getThighInstance().ethUtil.getMulticallContractByName('dexCenter', abi);
}

export { abi, getMulticallContract, getContract };
