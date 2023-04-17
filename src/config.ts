import { DEFAULT_THIGH_CHAIN_ID, DEFAULT_THIGH_CHAIN_NAME } from "./constants/const";
import { ThighSetting } from "./types/types";

export class ThighConfig {
    chainId: string = DEFAULT_THIGH_CHAIN_ID
    chainName: string = DEFAULT_THIGH_CHAIN_NAME
    account: string = ''
    rpc: string = ''
    privateKey: string = ''
    customProvider: any = null
    
    constructor(config: ThighSetting) {
        this.update(config)
    }
    
    update(config: ThighSetting) {
        if (!config.rpc && !config.customProvider) {
            throw new Error("Please enter the complete initialization parameters. rpc or customProvider is necessary.");
        }
        
        this.account = config.account;
        this.chainId = config.chainId || DEFAULT_THIGH_CHAIN_ID;
        this.chainName = config.chainName;
        this.rpc = config.rpc;
        this.privateKey = config.privateKey || '';
        this.customProvider = config.customProvider
    }


    getConfig(): ThighSetting {
        return {
            chainId: this.chainId,
            chainName: this.chainName,
            account: this.account,
            rpc: this.rpc,
            customProvider: this.customProvider
        }
    }
};
