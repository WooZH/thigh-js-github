import type { ThighConfig } from '../types/types';
export declare class Thigh {
    config: ThighConfig;
    module: Record<string, any>;
    constructor(config: ThighConfig);
    update(config: ThighConfig): void;
    getConfig(): ThighConfig;
}
