export declare function getSignProvider(type: string, chainId?: string, rpc?: string): Promise<any>;
export declare function isChainSupported(): void;
export declare function getContract(contractName: string, ABI: any, walletRequired?: boolean): void;
export declare function isInvocable(): void;
export declare function ensureInvocable(): void;
