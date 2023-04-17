import { JsonFragment } from '@ethersproject/abi';
declare const abi: ReadonlyArray<JsonFragment>;
declare function getContract(): Promise<import("ethers").Contract>;
declare function getMulticallContract(): import("ethers-multicall").Contract;
export { abi, getContract, getMulticallContract };
