import { providers, Contract as EthersContract } from 'ethers';
import { JsonFragment } from '@ethersproject/abi';
import { Provider as MulticallProvider, Contract as MulticallContract } from 'ethers-multicall';
import { ThighConfig } from './config';
import { LogFilter } from './types/types';
export declare class EthUtil {
    private config;
    constructor(config: ThighConfig);
    getCurrentBlockNumber(): Promise<number>;
    getProvider(isSigner?: boolean): Promise<providers.BaseProvider>;
    getMulticallProvider(): Promise<MulticallProvider>;
    getContractAddress(contractName: string): string;
    getContractDeployBlock(contractName: string): string;
    getContractByName(contractName: string, abi: any, flag?: boolean): Promise<EthersContract>;
    getContractByAddr(contractAddr: string, abi: any, flag?: boolean): Promise<EthersContract>;
    createContract(contractAddr: string, abi: any, flag: boolean): Promise<EthersContract>;
    getContractWithSigner(contract: EthersContract, provider: any): EthersContract;
    getMulticallContractByName(contractName: string, abi: any): MulticallContract;
    getMulticallContractByAddr(contractAddress: string, abi: any): MulticallContract;
    getLogs(filter: LogFilter | any): Promise<providers.Log[]>;
    decodeLogs(log: providers.Log, abi: ReadonlyArray<JsonFragment>): unknown;
    encodePath(path: string[], fees: any[]): string;
    encodeFilterTopics(abi: any, functionName: any, values?: any): Promise<(string | string[])[]>;
}
