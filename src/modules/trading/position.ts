import * as tradingHub from '../../contracts/tradingHub';
import * as auctionHall from '../../contracts/auctionHall';
import * as vaultButler from '../../contracts/vaultButler';
import * as erc20 from '../../contracts/token/erc20';
import * as strPool from '../../contracts/strPool';
import { BigNumber } from 'ethers';
import { isSwapRouterV3, getAmountInMax, getAmountOutMin } from './index';
import { getThighInstance } from '../../thigh';
import { spliceIntoChunks } from '../../utils/array';
/**
 * done
 * get all positions by poolId/status
 * @param {string} poolId
 * @param {number} status 1:open 2:closing 4:overdrawn 8:closed
 */
export async function getPositions(poolId: string = '', status: number = 1) {
    const contract = await tradingHub.getContract();
    let positions = [];
    if (poolId !== '') {
        positions = await contract.getPositionsByPoolId(poolId, status);
    } else {
        positions = await contract.getPositionsByState(status);
    }
    return positions;
}

/**
 *
 * @param status 1: closing; 2: legacy; 3:finished
 * @returns
 */
export async function getLiquidatingPositions(status: number = 1) {
    const callProvider = await getThighInstance().ethUtil.getMulticallProvider();
    let positionState = 2;
    // reset position state
    switch (status) {
        case 1:
            positionState = 2;
            break;
        case 2:
            positionState = 4;
            break;
        case 3:
            positionState = 8;
            break;

        default:
            break;
    }
    const positions = await getPositions('', positionState);
    const tradingHubMultiContract = tradingHub.getMulticallContract();

    const callList: any[] = [];
    positions.forEach((hash: string) => {
        callList.push(tradingHubMultiContract.positionInfoMap(hash));
    });
    const strTokenList = await callProvider.all(callList);
    // get strToken

    const detailCallList: any[] = [];

    strTokenList.forEach((item: any) => {
        const strContract = strPool.getMulticallContract(item.strToken);
        detailCallList.push(strContract.getMetaInfo());
    });
    const detailList = await callProvider.all(detailCallList);

    const positionBaseList = detailList.map((item, index) => {
        const { stakedToken_, leverage_ } = item;
        return {
            hash: positions[index],
            leverage: leverage_,
            strToken: strTokenList[index].strToken,
            stakedToken: stakedToken_,
        };
    });

    const liqInfoCallList: any[] = [];
    const auctionHallMultiContract = auctionHall.getMulticallContract();
    const vaultButlerMultiContract = vaultButler.getMulticallContract();

    positionBaseList.forEach((item: any) => {
        liqInfoCallList.push(auctionHallMultiContract.phase1Infos(item.hash));
        liqInfoCallList.push(auctionHallMultiContract.phase2Infos(item.hash));
        liqInfoCallList.push(vaultButlerMultiContract.legacyInfos(item.hash));

        const erc20MultiContract = erc20.getMulticallContract(item.stakedToken);
        liqInfoCallList.push(erc20MultiContract.symbol());
    });

    const liqInfoList = await callProvider.all(liqInfoCallList);
    const liqSplitedList = spliceIntoChunks(liqInfoList, 4);

    const liquidationInfoList = liqSplitedList.map((item, index) => {
        const phase1Info = item[0];
        const phase2Info = item[1];
        const legacyInfo = item[2];
        const symbol = item[3];
        return {
            positionBaseInfo: { ...positionBaseList[index], symbol },
            phase1Info: {
                bidSize: phase1Info.bidSize,
                liquidationPrice: phase1Info.liquidationPrice,
                flag: phase1Info.flag,
            },
            phase2Info: {
                isWithdrawn: phase2Info.isWithdrawn,
                debtSize: phase2Info.debtSize,
                usedCash: phase2Info.usedCash,
                dexCoverReward: phase2Info.dexCoverReward,
                flag: phase2Info.flag,
            },
            legacyInfo: {
                bidSize: legacyInfo.bidSize,
                usedCash: legacyInfo.usedCash,
            },
        };
    });

    return liquidationInfoList;
}

/**
 *  done
 * @param {String} hash position hash
 * @returns
 */
export async function getPositionInfoByHash(hash: string) {
    const tradingHubContract = await tradingHub.getContract();
    const positionInfo = await tradingHubContract.getPositionInfo(hash);

    const strPoolContract = await strPool.getContract(positionInfo.strToken);
    const positionAddon = await strPoolContract.positionInfoMap(hash);
    return {
        closedFlag: positionAddon.closedFlag, //true: liquidation, false: trader sell
        poolId: positionInfo.poolId,
        poolStrToken: positionInfo.strToken,
        size: positionAddon.totalSize,
        state: positionInfo.positionState,
        trader: positionAddon.trader,
        totalFee: positionAddon.totalFee,
        margin: positionAddon.totalMarginAmount,
        unsettledCash: positionAddon.unsettledCash,
        remnantAsset: positionAddon.remnantAsset,
    };
}

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
export async function getPositionBlocks(address: string) {
    const contract = await tradingHub.getContract();
    const { openBlock, closingBlock, overdrawnBlock, closedBlock } = await contract.positionBlocks(address);

    return {
        openBlock,
        closingBlock,
        overdrawnBlock,
        closedBlock,
    };
}

export const POSITION_STATUS = {
    0: 'Risky',
    1: 'Moderate',
    2: 'Safe',
    4: 'Legacy',
    8: 'Closing',
    5: 'Closed',
    6: 'Finished',
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
export async function buyCover(poolId: string, amount: BigNumber, swapRouter: string, token0: string, token1: string) {
    const FEE = [3000];
    let path = [token0, token1];
    const isV3 = await isSwapRouterV3(swapRouter);
    if (isV3) {
        path = path.reverse();
    }

    const encodedPath = getThighInstance().ethUtil.encodePath(path, FEE);
    let amountInMax = await getAmountInMax(amount, path, isV3);
    amountInMax = BigNumber.from(amountInMax);
    const contract = await tradingHub.getContract(false);
    const tx = await contract.buyCover(poolId, amount, amountInMax, encodedPath);
    const results = await tx.wait();
    return results;
}

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
export async function sellShort(poolId: number, amount: BigNumber, swapRouter: string, token0: string, token1: string) {
    const FEE = [3000];
    const path = [token1, token0];
    const encodedPath = getThighInstance().ethUtil.encodePath(path, FEE);
    const contract = await tradingHub.getContract(false);
    const amountOutMin = await getAmountOutMin(amount, token0, token1, swapRouter);
    const tx = await contract.sellShort(poolId, amount, amountOutMin, encodedPath);
    const result = await tx.wait();
    return result;
}
