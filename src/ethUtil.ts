import { getDefaultProvider, providers, Contract as EthersContract, Wallet, utils } from 'ethers';
import { JsonFragment } from '@ethersproject/abi';
import { Provider as MulticallProvider, Contract as MulticallContract } from 'ethers-multicall';

import { ThighConfig } from './config';
import { getContractAddrFromManifest, getContractDeployBlockFromManifest } from './constants/constHelper';
import { LogFilter } from './types/types';

export class EthUtil {
    constructor(private config: ThighConfig) {}

    async getCurrentBlockNumber(): Promise<number> {
        const provider = await this.getProvider(undefined);
        const blockNumber = await provider.getBlockNumber();
        return blockNumber;
    }

    async getProvider(isSigner: boolean = false): Promise<providers.BaseProvider> {
        const customProvider = this.config.customProvider;

        if (customProvider) {
            if (!isSigner) {
                return customProvider;
            }

            const account = this.config.account || null;
            return customProvider.getSigner(account);
        }

        const rpc = this.config.rpc;

        const chainId = Number(this.config.chainId);
        if (chainId && rpc) {
            return new providers.StaticJsonRpcProvider(rpc, {
                name: this.config.chainName,
                chainId,
            });
        } else if (rpc) {
            return new providers.JsonRpcProvider(rpc);
        }

        return getDefaultProvider();
    }

    async getMulticallProvider(): Promise<MulticallProvider> {
        const provider = await this.getProvider(false);
        const multicallProvider = new MulticallProvider(provider);
        await multicallProvider.init();

        return multicallProvider;
    }

    getContractAddress(contractName: string): string {
        if (!contractName) {
            return '';
        }
        return getContractAddrFromManifest(contractName, this.config.chainId);
    }

    getContractDeployBlock(contractName: string): string {
        if (!contractName) {
            return '';
        }
        return getContractDeployBlockFromManifest(contractName, this.config.chainId);
    }

    getContractByName(contractName: string, abi: any, flag = true) {
        const contractAddr = getContractAddrFromManifest(contractName, this.config.chainId);
        return this.createContract(contractAddr, abi, flag);
    }

    getContractByAddr(contractAddr: string, abi: any, flag = true) {
        return this.createContract(contractAddr, abi, flag);
    }

    async createContract(contractAddr: string, abi: any, flag: boolean): Promise<EthersContract> {
        if (typeof window === 'object') {
            const provider = await this.getProvider(!flag);
            return new EthersContract(contractAddr, abi, provider);
        } else {
            const provider = await this.getProvider(false);
            const Contract = new EthersContract(contractAddr, abi, provider);

            if (flag) {
                return Contract;
            } else {
                return this.getContractWithSigner(Contract, provider);
            }
        }
    }

    getContractWithSigner(contract: EthersContract, provider: any): EthersContract {
        const privateKey = this.config.privateKey;
        const wallet = new Wallet(privateKey, provider);
        return contract.connect(wallet);
    }

    getMulticallContractByName(contractName: string, abi: any): MulticallContract {
        const contractAddr = getContractAddrFromManifest(contractName, this.config.chainId);
        return new MulticallContract(contractAddr, abi);
    }

    getMulticallContractByAddr(contractAddress: string, abi: any): MulticallContract {
        return new MulticallContract(contractAddress, abi);
    }
    // any for topics
    // (string | string[])[]
    async getLogs(filter: LogFilter | any) {
        const provider = await this.getProvider();

        const { fromBlock, toBlock, topics, contractName, contractAddr } = filter;

        const address = contractAddr ? contractAddr : this.getContractAddress(contractName || '');

        const distance = Number(toBlock || 0) - Number(fromBlock || 0);
        const MAX_BLOCKS_DISTANCE = 100000;

        if (distance <= MAX_BLOCKS_DISTANCE || toBlock === 'latest') {
            const logs = (await provider.getLogs({ fromBlock, toBlock, topics, address })) || [];
            return logs;
        }

        let logs: Array<providers.Log> = [];
        const filters = [];
        const n = Math.floor(distance / MAX_BLOCKS_DISTANCE) + 1;
        for (let i = 0, sum = 0; i < n; i++) {
            filters.push({
                fromBlock: Number(fromBlock) + i * MAX_BLOCKS_DISTANCE + sum,
                toBlock: i < n - 1 ? Number(fromBlock) + (i + 1) * MAX_BLOCKS_DISTANCE + sum : toBlock,
                topics,
                address,
            });
            sum += 1;
        }

        await Promise.all(
            filters.map(async (item) => {
                const res = await provider.getLogs(item);
                logs = [...res, ...logs];
            })
        );

        return logs;
    }

    decodeLogs(log: providers.Log, abi: ReadonlyArray<JsonFragment>) {
        try {
            const iface = new utils.Interface(abi);
            const item = iface.parseLog(log);
            return {
                hash: log.transactionHash,
                blockNumber: log.blockNumber,
                args: item.args,
                event: item.name,
            };
        } catch (error) {
            return error;
        }
    }

    encodePath(path: string[], fees: any[]) {
        if (path.length != fees.length + 1) {
            throw new Error('path/fee lengths do not match');
        }

        let encoded = '0x';
        for (let i = 0; i < fees.length; i++) {
            // 20 byte encoding of the address
            encoded += path[i].slice(2);
            // 3 byte encoding of the fee
            encoded += fees[i].toString(16).padStart(2 * 3, '0');
        }
        // encode the final token
        encoded += path[path.length - 1].slice(2);

        return encoded.toLowerCase();
    }

    async encodeFilterTopics(abi: any, functionName: any, values: any = []) {
        const iface = new utils.Interface(abi);
        const result = iface.encodeFilterTopics(functionName, values);
        //['0x...','0x...',...]
        return result;
    }
}
