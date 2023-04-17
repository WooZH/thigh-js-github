import { BigNumber } from 'ethers';
/**
 * done
 * @param {*} address
 * @returns
 */
export declare function getPhase1Info(address: string): Promise<{
    bidSize: any;
    liquidationPrice: any;
    isSorted: any;
    flag: any;
}>;
/**
 * done
 * @param {*} address
 * @returns
 */
export declare function getPhase2Info(address: string): Promise<{
    isWithdrawn: any;
    rulerAddr: any;
    debtSize: any;
    usedCash: any;
    dexCoverReward: any;
    flag: any;
}>;
/**
 * done
 * get legacy information
 * @param {*} positionHash
 * @returns
 */
export declare function getLegacyInfo(positionHash: string): Promise<{
    bidSize: any;
    usedCash: any;
}>;
/**
 * done
 * @param {String} address
 * @param {Number} fromBlock
 * @param {Number} toBlock Optional
 * @returns
 */
export declare function getPhase1BidList(address: string, fromBlock: number, toBlock?: number | string): Promise<(false | {
    ruler: any;
    positionAddr: any;
    bidSize: any;
    priorityFee: any;
    blockNumber: any;
    transactionHash: any;
} | null)[]>;
/**
 * done
 * query residues by position's hash and user account
 * @param {*} address
 * @param {*} account
 * @returns
 */
export declare function queryResidues(address: string, account: string): Promise<{
    debtTokenSize: any;
    priorityFee: any;
    stableTokenSize: any;
}>;
/**
 *done
 * @param {positionHash} address
 * @returns
 */
export declare function getResidues(address: string): Promise<any>;
/**
 * phase1 step bid
 * @param {*} address
 * @param {BigNumber} bidSize
 * @param {BigNumber} priorityFee
 * @returns
 */
export declare function bidTanto(address: string, bidSize: BigNumber, priorityFee: BigNumber): Promise<any>;
/**
 * phase2 step bid
 * @param {} address
 * @param {*} path
 * @param {*} swapRouter - stakedToken's swapRouter
 * @returns
 */
export declare function bidKatana(address: string, stakedToken: any, stableToken: any, swapRouter: any): Promise<any>;
/**
 * done
 * legacy step bid
 * @param {*} hash
 * @param {*} bidSize
 * @returns
 */
export declare function executeNaginata(hash: string, bidSize: any): Promise<any>;
/**
 * done
 * @param {*} positionHash
 * @param {Number} fromBlock
 * @param {Number} toBlock optional
 * @returns
 */
export declare function getLegacyBidList(positionHash: string, fromBlock: number, toBlock?: number | string): Promise<({
    ruler: any;
    positionAddr: any;
    bidSize: any;
    receiveSize: any;
    blockNumber: any;
    transactionHash: any;
} | null)[]>;
