import { ethers } from 'ethers';

function getEthereum() {
    const { ethereum } = globalThis as any;
    return ethereum;
}

export function isMetaMaskAvailable() {
    const ethereum = getEthereum()
    return Boolean(ethereum && ethereum.isMetaMask);
}

export function getMetamaskProvider() {
    if (isMetaMaskAvailable()) {
        const ethersProvider = new ethers.providers.Web3Provider(getEthereum(), 'any');
        return ethersProvider;
    } else {
        console.log('Please install Metamask first');
        return null;
    }
}

export async function fetchChainId() {
    if (isMetaMaskAvailable()) {
        const ethereum = getEthereum()
        const chainId = await ethereum.request({
            method: 'eth_chainId',
        });
        return chainId; // "0x01"
    } else {
        return console.log('Please install Metamask first');
    }
}

/**
 *
 * @returns account list
 */
export async function fetchAccount() {
    if (isMetaMaskAvailable()) {
        const ethereum = getEthereum()
        const accounts = await ethereum.request({
            method: 'eth_requestAccounts',
        });

        return accounts; // ['0xEEEEEEEEEEEEE...', '0xAAAAAAAAAAAA...']
    } else {
        return console.log('Please install Metamask first');
    }
}

export async function connectMetamask() {
    const ethereum = getEthereum()
    ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((accounts: string[]) => {
            return accounts;
        })
        .catch((error: any) => {
            if (error.code === 4001) {
                // EIP-1193 userRejectedRequest error
                console.log('Please connect to MetaMask.');
            } else {
                console.error(error);
            }
        });
}

export async function signMessage() {}
