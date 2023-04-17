import { utils } from 'ethers';

import { abi as committeeAbi } from '../../contracts/committee';
import { abi as tradingHubAbi} from '../../contracts/tradingHub';
import { abi as auctionHallAbi } from '../../contracts/auctionHall';
import { getThighInstance } from '../../thigh';

const abiMap = new Map();
abiMap.set('committee', committeeAbi);
abiMap.set('tradingHub', tradingHubAbi);
abiMap.set('auctionHall', auctionHallAbi);

let _provider: any = null;
async function getProvider() {
    if (_provider) {
      return _provider
    } 

    _provider = await getThighInstance().ethUtil.getProvider();
    return _provider;
}

async function listenEvent(contractName: string, eventName: any, cb: (p: any) => void, positionHash = '') {
    const provider = await getProvider();

    const ABI = abiMap.get(contractName);
    const contractAddress = getThighInstance().ethUtil.getContractAddress(contractName);
    const topics = await getThighInstance().ethUtil.encodeFilterTopics(ABI, eventName);

    if (positionHash) {
        const coderAbi = new utils.AbiCoder();
        topics.push(coderAbi.encode(['address'], [positionHash]));
    }

    const filter = {
        topics,
        address: contractAddress,
    };
    provider.on(filter, (log: any) => {
        const iface = new utils.Interface(ABI);
        const res = iface.parseLog(log);
        cb({ log: res, origin: log });
    });
}

async function remove(contractName: string, eventName: any) {
    const provider = await getProvider();
    if (!provider) { return };

    const ABI = abiMap.get(contractName);
    const contractAddress = getThighInstance().ethUtil.getContractAddress(contractName);
    const topics = await getThighInstance().ethUtil.encodeFilterTopics(ABI, eventName);

    const filter = {
        topics,
        address: contractAddress,
    };
    provider.off(filter);
}

export const eventListener = { on: listenEvent, off: remove };
