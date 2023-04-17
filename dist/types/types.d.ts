import { providers } from 'ethers';
/** @ts-ignore **/
import BigNumber from 'bignumber.js';
export interface ThighSetting {
    account: string;
    chainId: string;
    chainName: string;
    rpc: string;
    customProvider: any;
    privateKey?: string;
}
export interface LogFilter extends providers.Filter {
    contractName?: string;
    contractAddr?: string;
}
export interface poolLog {
    operation: string;
    amount: BigNumber;
}
