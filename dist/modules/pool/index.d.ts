import { BigNumber } from 'ethers';
import { poolLog } from '../../types/types';
/**POOL MODULE */
/**
 * done
 * Get pool's id by token and status
 * return a list
 * @param {*} tokenAddress tokenAddress default: null
 * @param {*} status 0:ALL; 1:RUNNING; 2:CLOSING; 3:RECOVER; 4:ENDED default: 0
 * @returns [] poolId list
 *
 */
export declare function getPools(tokenAddress?: string, status?: number): Promise<any[]>;
export declare function getMetaInfo(poolId: string): Promise<any>;
/**
 * get pool info by poolId
 * @param poolId string
 * @returns
 */
export declare function getPoolInfo(poolId: string): Promise<{
    creator: any;
    leverage: any;
    strToken: any;
    stakedToken: {
        address: any;
        decimals: any;
    };
    stableToken: {
        address: any;
        decimals: any;
    };
    totalDeposited: any;
    availableAmount: any;
    durationDays: any;
    status: any;
    startBlock: any;
    endBlock: any;
}>;
/**
 *
 * @param {*} poolId
 *
 * @return count: { providerCount: , traderCount: }
 */
export declare function getParticipantNumber(poolId: string): Promise<{
    providerCount: number;
    traderCount: number;
}>;
/**
 * done
 * deposit token in the pool
 * @param {*} strToken
 * @param {*} amount
 * @returns
 */
export declare function deposit(strToken: string, amount: number): Promise<any>;
/**
 * done
 * withdraw from the pool
 * @param {*} strToken
 * @param {BigNumber} amount
 */
export declare function withdrawByAmount(strToken: string, amount: BigNumber): Promise<any>;
/**
 *
 * @param {*} strToken
 * @param {INTEGER} percent percent > 0 && percent <= 100
 */
export declare function withdrawByPercent(strToken: string, percent: number): Promise<any>;
/**
 * done
 * @param {*} strToken
 * @param {*} amount
 * @returns
 */
export declare function approve(strToken: string, amount?: any): Promise<any>;
/**
 * done
 * get allowance by address/account
 * get allowance for deposit  //address: staked token address
 * get allowance for withdraw //address: strToken---poolAddress
 * @param {} strToken
 * @param {*} account
 * @returns
 */
export declare function allowance(strToken: string, account?: any): Promise<any>;
/**
 * done
 * @param poolId string
 * @param account string
 * @returns Log
 */
export declare function getLogs(poolId: string, account: string): Promise<{
    poolId: string;
    user: string;
    logs: poolLog[];
}>;
