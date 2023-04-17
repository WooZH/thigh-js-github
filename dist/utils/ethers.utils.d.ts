import { Provider, Contract } from 'ethers-multicall';
export declare const ethersUtils: {
    /**
     *
     * @returns current blockNumber
     */
    getCurrentBlockNumber(): Promise<any>;
    getMulticallProvider(): Promise<Provider>;
    getContractAddress(contractName: string): any;
    getContractDeployBlock(contractName: string): any;
    getMulticallContract(contractName: string, abi: any): Contract;
    getMulticallContractByAddr(contractAddress: string, abi: any): Contract;
    createEthersProvider(signer?: any): Promise<any>;
    /**
     *
     * @returns ethers contract
     */
    getContract(contractName: string, abi: any, flag?: boolean): Promise<any>;
    getContractByAddr(contractAddr: string, abi: any, flag?: boolean): Promise<any>;
    createContract(contractAddr: string, abi: any, flag: boolean): Promise<any>;
    getContractWithSigner(contract: any, provider: any): any;
    /** common get logs */
    getLogs(filter: any): Promise<any[]>;
    decodeLogs(log: any, abi: any): unknown;
    encodePath(path: string[], fees: any[]): string;
    /**
     *
     * @param {*} abi
     * @param {*} functionName functionName
     * @param {*} values
     * @returns
     */
    encodeFilterTopics(abi: any, functionName: any, values?: never[]): Promise<(string | string[])[]>;
};
