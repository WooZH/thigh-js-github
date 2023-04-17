import WalletConnectProvider from '@walletconnect/web3-provider';

export async function getWalletProvider(chainId: string, rpc: string) {
    const provider = new WalletConnectProvider({
        rpc: {
            [chainId]: rpc,
        },
    });

    await provider.enable();

    return provider;
}
