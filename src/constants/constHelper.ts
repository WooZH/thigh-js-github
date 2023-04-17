import ethereumMainnet from './manifest/ethereum-mainnet/contractAddrs.json';
import ethereumGoerli from './manifest/ethereum-goerli/contractAddrs.json';
import ethereumMainnetDeploy from './manifest/ethereum-mainnet/contract-infos.json';
import ethereumGoerliDeploy from './manifest/ethereum-goerli/contract-infos.json';

export function getContractAddrFromManifest(contractName: string, chainId: string): string {
    const CHAIN_MAP: Record<string, any> = {
        '0x01': ethereumMainnet,
        '0x05': ethereumGoerli,
    };

    const currentChain = CHAIN_MAP[chainId];
    const contractAddr = currentChain[contractName];

    return contractAddr;
}

export function  getContractDeployBlockFromManifest(contractName: string, chainId: string): string {
      const CONTRACT_INFO_MAP: Record<string, any> = {
        '0x01': ethereumMainnetDeploy,
        '0x05': ethereumGoerliDeploy,
    };

    const currDeploys = CONTRACT_INFO_MAP[chainId];
    const contractInfo = currDeploys[contractName];
    return contractInfo.deployBlock;
}

