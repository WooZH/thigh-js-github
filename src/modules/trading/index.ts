import * as dexCenter from '../../contracts/dexCenter';
import * as uniswapV2Router from '../../contracts/UniswapV2Router02';
import * as uniswapV3Quoter from '../../contracts/UniswapV3Quoter';
import { utils, BigNumber } from 'ethers';
import { getThighInstance } from '../../thigh';
 
export async function isSwapRouterV3(swapRouter: any) {
    const contract = await dexCenter.getContract();
    const isSwapV3 = await contract.isSwapRouterV3(swapRouter);
    return isSwapV3;
}

// get expect price without slippage
export async function getExpectedPrice(amount: any, stakedToken: any, stableToken: any, swapRouter: any) {
    const amountOutMin = await getAmountOutMin(amount, stakedToken, stableToken, swapRouter);
    const AMOUNT = BigNumber.from(amountOutMin);

    return AMOUNT;
}

export async function getAmountOutMin(amount: any, stakedToken: any, stableToken: any, swapRouter: any) {
    const path = [stableToken, stakedToken];
    const isV3 = await isSwapRouterV3(swapRouter);
    if (isV3) {
        const amountsOutMin = await getAmountOutMinV3(amount, path);
        return amountsOutMin;
    } else {
        const contractV2Router = await uniswapV2Router.getContract();
        const amountsOut = await contractV2Router.getAmountsOut(amount, path);
        const amountsOutMin = amountsOut[amountsOut.length - 1];
        return amountsOutMin;
    }
}

async function getAmountOutMinV3(_amount: any, _path: any) {
    const fees = [3000];
    const path = getThighInstance().ethUtil.encodePath(_path, fees);
    const coderAbi = new utils.AbiCoder();
    const encodedAmount = coderAbi.encode(['uint256'], [_amount]);
    const iface = new utils.Interface(uniswapV3Quoter.abi);
    const dataParam = iface.encodeFunctionData('quoteExactInput', [path, encodedAmount]);
    const contractAddress = getThighInstance().ethUtil.getContractAddress('UniswapV3Quoter');

    const provider = await getThighInstance().ethUtil.getProvider();
    const res = await provider.call({
        to: contractAddress,
        data: dataParam,
    });

    return res;
}

export async function getAmountInMax(amount: any, path: any, isV3: any) {
    if (isV3) {
        // v3
        return getAmountInMaxV3(amount, path);
    }
    const contractV2Router = await uniswapV2Router.getContract();
    // v2
    const amountsIn = await contractV2Router.getAmountsIn(amount, path);
    const amountInMax = amountsIn[0];
    return amountInMax;
}

async function getAmountInMaxV3(_amount: any, _path: any) {
    const fees = [3000];
    const path = getThighInstance().ethUtil.encodePath(_path, fees);
    const coderAbi = new utils.AbiCoder();
    const encodedAmount = coderAbi.encode(['uint256'], [_amount]);
    const iface = new utils.Interface(uniswapV3Quoter.abi);
    const dataParam = iface.encodeFunctionData('quoteExactOutput', [path, encodedAmount]);
    const contractAddress = getThighInstance().ethUtil.getContractAddress('UniswapV3Quoter');

    const provider = await getThighInstance().ethUtil.getProvider();
    const res = await provider.call({
        to: contractAddress,
        data: dataParam,
    });

    return res;
}
