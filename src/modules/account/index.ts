import * as erc20 from '../../contracts/token/erc20';
import { getThighInstance } from '../../thigh';

export async function getCurrentWallet() {}

export async function getGasBalance() {}

export async function getBalanceOf(tokenAddress: string, account: string) {
    const contract = await erc20.getContract(tokenAddress);
    const result = await contract.balanceOf(account);
    return result;
}

export async function getETHBalanceOf(account: string) {
    const provider = await getThighInstance().ethUtil.getProvider();
    const result = await provider.getBalance(account);
    return result;
}
