import { BigNumber } from 'ethers';
/**
 * done
 * get all positions by poolId/status
 * @param {string} poolId
 * @param {number} status 1:open 2:closing 4:overdrawn 8:closed
 */
export declare function getPositions(poolId?: string, status?: number): Promise<any>;
/**
 *
 * @param status 1: closing; 2: legacy; 3:finished
 * @returns
 */
export declare function getLiquidatingPositions(status?: number): Promise<{
    positionBaseInfo: {
        symbol: any;
        hash: any;
        leverage: any;
        strToken: any;
        stakedToken: any;
    };
    phase1Info: {
        bidSize: any;
        liquidationPrice: any;
        flag: any;
    };
    phase2Info: {
        isWithdrawn: any;
        debtSize: any;
        usedCash: any;
        dexCoverReward: any;
        flag: any;
    };
    legacyInfo: {
        bidSize: any;
        usedCash: any;
    };
}[]>;
/**
 *  done
 * @param {String} hash position hash
 * @returns
 */
export declare function getPositionInfoByHash(hash: string): Promise<{
    closedFlag: any;
    poolId: any;
    poolStrToken: any;
    size: any;
    state: any;
    trader: any;
    totalFee: any;
    margin: any;
    unsettledCash: any;
    remnantAsset: any;
}>;
/**
 *  done
 * get position's blocks by hash
 * @param {String} address position hash
 * @returns {
    * openBlock,
    * closingBlock,
    * overdrawnBlock,
    * closedBlock,
 * }

 */
export declare function getPositionBlocks(address: string): Promise<{
    openBlock: any;
    closingBlock: any;
    overdrawnBlock: any;
    closedBlock: any;
}>;
export declare const POSITION_STATUS: {
    0: string;
    1: string;
    2: string;
    4: string;
    8: string;
    5: string;
    6: string;
};
/**
 *  done
 *  buy v2/v3
 * @param {String} poolId
 * @param {BigNumber} amount
 * @param {String} swapRouter
 * @param {String} token0
 * @param {String} token1
 * @returns
 */
export declare function buyCover(poolId: string, amount: BigNumber, swapRouter: string, token0: string, token1: string): Promise<any>;
/**
 * done
 * sellShort v2/v3
 * @param {*} poolId
 * @param {*} amount
 * @param {*} swapRouter
 * @param {*} token0
 * @param {*} token1
 * @returns
 */
export declare function sellShort(poolId: number, amount: BigNumber, swapRouter: string, token0: string, token1: string): Promise<any>;
