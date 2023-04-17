import { JsonFragment } from '@ethersproject/abi';
declare const abi: ReadonlyArray<JsonFragment>;
declare function getContract(flag?: boolean): Promise<import("ethers").Contract>;
declare function getMulticallContract(): import("ethers-multicall").Contract;
export { abi, getMulticallContract, getContract };
