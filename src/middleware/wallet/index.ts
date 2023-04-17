// import { getWalletProvider } from './walletConnect';
import { getMetamaskProvider } from './metamask';

export async function getSignProvider(type: string, chainId = '', rpc = '') {
    console.log(chainId, rpc)
    switch (type) {
        case 'metamask':
            return getMetamaskProvider() as any;
            break;
        case 'walletconnect':
            // const chainId = chainId;
            // const rpc = rpc;
            // return await getWalletProvider(chainId, rpc);
            return null
            break;
        default:
            return null
            break;
    }
}

export function isChainSupported() {}

export function getContract(contractName: string, ABI: any, walletRequired = false) {
    console.log(contractName, ABI, walletRequired)
}

export function isInvocable() {}

export function ensureInvocable() {}
