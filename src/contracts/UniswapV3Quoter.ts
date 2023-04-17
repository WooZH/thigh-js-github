import { JsonFragment } from '@ethersproject/abi';
import { getThighInstance } from '../thigh';

const abi: ReadonlyArray<JsonFragment> = [
    {
        inputs: [
            {
                internalType: 'address',
                name: '_factory',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_WETH9',
                type: 'address',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        inputs: [],
        name: 'WETH9',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'factory',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes',
                name: 'path',
                type: 'bytes',
            },
            {
                internalType: 'uint256',
                name: 'amountIn',
                type: 'uint256',
            },
        ],
        name: 'quoteExactInput',
        outputs: [
            {
                internalType: 'uint256',
                name: 'amountOut',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'tokenIn',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'tokenOut',
                type: 'address',
            },
            {
                internalType: 'uint24',
                name: 'fee',
                type: 'uint24',
            },
            {
                internalType: 'uint256',
                name: 'amountIn',
                type: 'uint256',
            },
            {
                internalType: 'uint160',
                name: 'sqrtPriceLimitX96',
                type: 'uint160',
            },
        ],
        name: 'quoteExactInputSingle',
        outputs: [
            {
                internalType: 'uint256',
                name: 'amountOut',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes',
                name: 'path',
                type: 'bytes',
            },
            {
                internalType: 'uint256',
                name: 'amountOut',
                type: 'uint256',
            },
        ],
        name: 'quoteExactOutput',
        outputs: [
            {
                internalType: 'uint256',
                name: 'amountIn',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'tokenIn',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'tokenOut',
                type: 'address',
            },
            {
                internalType: 'uint24',
                name: 'fee',
                type: 'uint24',
            },
            {
                internalType: 'uint256',
                name: 'amountOut',
                type: 'uint256',
            },
            {
                internalType: 'uint160',
                name: 'sqrtPriceLimitX96',
                type: 'uint160',
            },
        ],
        name: 'quoteExactOutputSingle',
        outputs: [
            {
                internalType: 'uint256',
                name: 'amountIn',
                type: 'uint256',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'int256',
                name: 'amount0Delta',
                type: 'int256',
            },
            {
                internalType: 'int256',
                name: 'amount1Delta',
                type: 'int256',
            },
            {
                internalType: 'bytes',
                name: 'path',
                type: 'bytes',
            },
        ],
        name: 'uniswapV3SwapCallback',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
];
const contractName = 'UniswapV3Quoter';
async function getContract(flag = true) {
    const Contract = await getThighInstance().ethUtil.getContractByName(contractName, abi, flag);
    return Contract;
}
function getMulticallContract() {
    return getThighInstance().ethUtil.getMulticallContractByName(contractName, abi);
}

export { abi, getMulticallContract, getContract };
