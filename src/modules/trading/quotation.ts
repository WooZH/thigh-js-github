import * as priceOracle from '../../contracts/priceOracle';
import * as shorterBone from '../../contracts/shorterBone';
import * as erc20 from '../../contracts/token/erc20';
import { getThighInstance } from '../../thigh';
import { utils } from 'ethers';

/**
 * getGasPrice
 */
/**
 *
 * @returns gas price(gwei)
 */
export async function getGasPrice() {
    const provider = getThighInstance().ethUtil.getProvider();
    const gasPrice = await (await provider).getGasPrice();
    const formattedGas = utils.formatUnits(gasPrice, 'gwei');
    return formattedGas;
}

/**
 *done
 * @param {*} address tokenAddress
 * @returns tokenPrice: BigNumber
 */
export async function getLatestPrice(address: string) {
    const priceOracleContract = await priceOracle.getContract();
    const res = await priceOracleContract.getLatestMixinPrice(address);
    return res;
}

/**
 * done
 * @param {*} address tokenAddress
 * @returns
 */
export async function getTokenInfo(address: string) {
    const shorterBoneContract = shorterBone.getMulticallContract();
    const ERC20Contract = erc20.getMulticallContract(address);
    const multicallProvider = await getThighInstance().ethUtil.getMulticallProvider();

    const callList = [];
    callList.push(shorterBoneContract.getTokenInfo(address));
    callList.push(ERC20Contract.symbol());
    callList.push(ERC20Contract.decimals());

    const callResult = await multicallProvider.all(callList);
    const tokenBase = callResult[0];
    const tokenSymbol = callResult[1];
    const tokenDecimals = callResult[2];

    return {
        symbol: tokenSymbol,
        decimals: tokenDecimals,
        multiplier: tokenBase.tokenRatingScore,
        inWhiteList: tokenBase.inWhiteList,
        swapRouter: tokenBase.swapRouter,
    };
}

export async function getTokenWhiteList() {
    const contract = await shorterBone.getContract();
    const shorterBoneContract = await shorterBone.getMulticallContract();
    const multicallProvider = await getThighInstance().ethUtil.getMulticallProvider();

    let tokenSize = await contract.totalTokenSize();
    tokenSize = Number(tokenSize.toString());

    let startIndex = 0;
    const callList = [];
    while (startIndex < tokenSize) {
        callList.push(shorterBoneContract.tokens(startIndex));
        startIndex++;
    }

    const whiteList = await multicallProvider.all(callList);
    return whiteList;
}
