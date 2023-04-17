import { JsonFragment } from '@ethersproject/abi';
declare const abi: ReadonlyArray<JsonFragment>;
declare function getContract(contractAddress: string, flag?: boolean): Promise<import("ethers").Contract>;
declare function getMulticallContract(contractAddress: string): import("ethers-multicall").Contract;
export { abi, getContract, getMulticallContract };
