import * as pool from './modules/pool';
import * as farming from './modules/reward/farming';
import * as reward from './modules/reward';
import * as committee from './modules/committee';
import * as position from './modules/trading/position';
import * as trading from './modules/trading';
import * as liquidation from './modules/liquidation';
import * as token from './modules/trading/quotation';
import * as account from './modules/account';

import { ThighSetting } from './types/types';
import { ThighConfig } from './config';
import { EthUtil } from './ethUtil';

let ThighInstance: Thigh | null = null;
export function getThighInstance(): Thigh {
    if (!ThighInstance) {
        throw new Error('Please init Thigh');
    }

    return ThighInstance;
}

export class Thigh {
    config: ThighConfig;
    ethUtil: EthUtil;

    module: Record<string, any>;

    constructor(config: ThighSetting) {
        this.config = new ThighConfig(config);
        this.ethUtil = new EthUtil(this.config);

        this.module = {
            pool,
            farming,
            reward,
            committee,
            trading,
            position,
            liquidation,
            token,
            account,
        };

        ThighInstance = this;
    }

    update(config: ThighSetting): void {
        this.config.update(config);
    }

    getConfig(): ThighSetting {
        return this.config.getConfig();
    }
}
