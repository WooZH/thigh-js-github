import { JsonFragment } from '@ethersproject/abi';
import { getThighInstance } from '../thigh';

const abi: ReadonlyArray<JsonFragment> = [
    {
        inputs: [
            {
                internalType: 'address',
                name: 'tokenAddr',
                type: 'address',
            },
        ],
        name: 'getLatestMixinPrice',
        outputs: [
            {
                internalType: 'uint256',
                name: 'tokenPrice',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
];

const contractName = 'PriceOracle';
async function getContract(flag = true) {
    const Contract = await getThighInstance().ethUtil.getContractByName(contractName, abi, flag);
    return Contract;
}
function getMulticallContract() {
    return getThighInstance().ethUtil.getMulticallContractByName(contractName, abi);
}
export { abi, getContract, getMulticallContract };
