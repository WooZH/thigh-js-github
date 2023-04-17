import { ThighSetting } from "./types/types";
export declare class ThighConfig {
    chainId: string;
    chainName: string;
    account: string;
    rpc: string;
    privateKey: string;
    customProvider: any;
    constructor(config: ThighSetting);
    update(config: ThighSetting): void;
    getConfig(): ThighSetting;
}
