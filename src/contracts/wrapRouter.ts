import { JsonFragment } from '@ethersproject/abi';
import { getThighInstance } from '../thigh';

const abi: ReadonlyArray<JsonFragment> = [
    {
        inputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        name: 'controvertibleAmounts',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
];

const contractName = 'WrapRouter';

async function getContract(flag = true) {
    return getThighInstance().ethUtil.getContractByName(contractName, abi, flag);
}
function getMulticallContract() {
    return getThighInstance().ethUtil.getMulticallContractByName(contractName, abi);
}

export { abi, getMulticallContract, getContract };
