import { ethers } from 'ethers';
export declare function isMetaMaskAvailable(): boolean;
export declare function getMetamaskProvider(): ethers.providers.Web3Provider | null;
export declare function fetchChainId(): Promise<any>;
/**
 *
 * @returns account list
 */
export declare function fetchAccount(): Promise<any>;
export declare function connectMetamask(): Promise<void>;
export declare function signMessage(): Promise<void>;
