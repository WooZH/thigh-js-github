import { ThighSetting } from './types/types';
import { ThighConfig } from './config';
import { EthUtil } from './ethUtil';
export declare function getThighInstance(): Thigh;
export declare class Thigh {
    config: ThighConfig;
    ethUtil: EthUtil;
    module: Record<string, any>;
    constructor(config: ThighSetting);
    update(config: ThighSetting): void;
    getConfig(): ThighSetting;
}
