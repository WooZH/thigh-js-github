export declare function getCurrentWallet(): Promise<void>;
export declare function getGasBalance(): Promise<void>;
export declare function getBalanceOf(tokenAddress: string, account: string): Promise<any>;
export declare function getETHBalanceOf(account: string): Promise<import("ethers").BigNumber>;
