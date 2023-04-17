import { BigNumber } from 'ethers';
export declare function isSwapRouterV3(swapRouter: any): Promise<any>;
export declare function getExpectedPrice(amount: any, stakedToken: any, stableToken: any, swapRouter: any): Promise<BigNumber>;
export declare function getAmountOutMin(amount: any, stakedToken: any, stableToken: any, swapRouter: any): Promise<any>;
export declare function getAmountInMax(amount: any, path: any, isV3: any): Promise<any>;
