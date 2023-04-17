/**
 *done
 * @param {*} address tokenAddress
 * @returns tokenPrice: BigNumber
 */
export declare function getTokenPrice(address: string): Promise<any>;
/**
 * done
 * @param {*} address tokenAddress
 * @returns
 */
export declare function getTokenInfo(address: string): Promise<{
    symbol: any;
    decimals: any;
    multiplier: any;
    inWhiteList: any;
    swapRouter: any;
}>;
export declare function getTokenWhiteList(): Promise<any[]>;
