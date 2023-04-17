import { BigNumber } from 'ethers';
/**
 * get all rulers
 * ruler: voteWeight > 0.001(0.1%)
 * @returns all rulers
 * [
 *   {
 *      account: String,
 *      amount: BigNUmber,
 *      voteWeight: Number,
 *   },
 *   ...
 * ]
 */
export declare function getAllRulers(): Promise<{
    account: any;
    amount: any;
    voteWeight: number;
}[]>;
/**
 * done
 * get all proposalId from committee contract deploy block
 * @returns return all proposalId
 * {
            proposalId: item.args.proposalId,
            proposer: item.args.proposer,
            blockNumber: item.blockNumber,
        }
 */
export declare function getProposalIdList(): Promise<{
    proposalId: any;
    proposer: any;
    blockNumber: any;
}[]>;
export declare function getAllProposals(): Promise<{
    proposalId: any;
    status: any;
    proposer: any;
    startBlock: any;
    endBlock: any;
    catagory: any;
    totalFor: any;
    totalAgainst: any;
    duration: any;
    leverage: any;
    tokenAddress: any;
}[]>;
/**
 * done
 * get proposal history
 * @param {Number} id proposal id
 * @returns [{
 *  proposalId: BigNumber,
 *  status: String,
 *  blockNumber: Number
 * }]
 */
export declare function getProposalHistory(id: string): Promise<{
    proposalId: any;
    status: any;
    blockNumber: any;
}[]>;
/**
 * done
 * get proposal info by id
 * @param {Number} id
 * @returns
 */
export declare function getProposalInfoById(id: string): Promise<{
    id: string;
    status: any;
    proposer: any;
    category: any;
    forShares: any;
    againstShares: any;
    endBlock: any;
    startBlock: any;
}>;
/**
 * done
 * create pool proposal
 * @param {String} tokenAddress token address
 * @param {Number} leverage 1,2,5,10
 * @param {Number} durationDays 1~1000
 * @param {String} from user account
 * @returns
 */
export declare function createPoolProposal(tokenAddress: string, leverage: number, durationDays: number, from: string): Promise<any>;
/**
 * done
 * create ETH pool proposal
 * @param {Number} leverage 1,2,5,10
 * @param {Number} durationDays 1~1000
 * @param {String} from user account
 * @returns
 */
export declare function createEthPoolProposal(leverage: number, durationDays: number, from: string): Promise<any>;
/**
 * done
 *  get pool committee detail
 * @param {*} id
 * @returns return new pool proposal information
 */
export declare function poolMetersMap(id: string): Promise<{
    durationDays: any;
    leverage: any;
    tokenContract: any;
}>;
/**
 * done
 * withdraw
 * @param {*} amount
 * @param {*} account
 * @returns
 */
export declare function withdraw(amount: BigNumber, account: string): Promise<any>;
/**
 * done
 * deposit ipistr to committee contract
 * @param {BigNumber} amount
 * @param {address} account
 * @returns
 */
export declare function deposit(amount: BigNumber, account: string): Promise<any>;
/**
 * done
 * vote for proposal
 * @param {Number} proposalId
 * @param {Boolean} direction BOOLEAN true: in favour; false: against
 * @param {Number/BigNumber} voteShare
 * @returns
 */
export declare function vote(proposalId: number, direction: boolean, voteShare: number | BigNumber): Promise<any>;
/**
 * done
 * Determine the identity of the user
 * @param {String} account
 * @returns
 */
export declare function isRuler(account: string): Promise<any>;
/**
 * done
 * get total staked ipistr amount
 * @returns
 */
export declare function getTotalIpistrStakedShare(): Promise<any>;
/**
 * done
 * get user shares
 * @param {String} account
 * @returns
 */
export declare function getUserShares(account: string): Promise<{
    lockedShare: any;
    totalShare: any;
}>;
