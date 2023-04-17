import { JsonFragment } from '@ethersproject/abi';
import { getThighInstance } from '../thigh';

const abi: ReadonlyArray<JsonFragment> = [
    {
        inputs: [
            {
                internalType: 'address',
                name: '_SAVIOR',
                type: 'address',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'thisAddr',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'shortName',
                type: 'string',
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'fullName',
                type: 'string',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'secondsPerBlock',
                type: 'uint256',
            },
        ],
        name: 'ChainConfigured',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'Paused',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'role',
                type: 'bytes32',
            },
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'previousAdminRole',
                type: 'bytes32',
            },
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'newAdminRole',
                type: 'bytes32',
            },
        ],
        name: 'RoleAdminChanged',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'role',
                type: 'bytes32',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address',
            },
        ],
        name: 'RoleGranted',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'bytes32',
                name: 'role',
                type: 'bytes32',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'sender',
                type: 'address',
            },
        ],
        name: 'RoleRevoked',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'Unpaused',
        type: 'event',
    },
    {
        inputs: [],
        name: 'ALLY_ROLE',
        outputs: [
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'DEFAULT_ADMIN_ROLE',
        outputs: [
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'KEEPER_ROLE',
        outputs: [
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'MANAGER_ROLE',
        outputs: [
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'ROOT_GROUP',
        outputs: [
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'token',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'spender',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'allow',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'token',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'spender',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'allowTetherToken',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'auctionHall',
        outputs: [
            {
                internalType: 'contract IAuctionHall',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'baseGasLimit',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'batchClosePositionGasLimit',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'blocksPerDay',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'chainFullName',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'chainShortName',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'closePositionGasLimit',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'committee',
        outputs: [
            {
                internalType: 'contract ICommittee',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: 'shortName',
                type: 'string',
            },
            {
                internalType: 'string',
                name: 'fullName',
                type: 'string',
            },
            {
                internalType: 'uint256',
                name: 'secondsPerBlock',
                type: 'uint256',
            },
        ],
        name: 'configChain',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'failedProposalGasLimit',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_unUsedGasLimit',
                type: 'uint256',
            },
        ],
        name: 'getAuctionHallChangedPositions',
        outputs: [
            {
                internalType: 'address[]',
                name: 'closedPositions',
                type: 'address[]',
            },
            {
                internalType: 'address[]',
                name: 'legacyPositions',
                type: 'address[]',
            },
            {
                internalType: 'bytes[]',
                name: 'phase1Ranks',
                type: 'bytes[]',
            },
            {
                internalType: 'uint256',
                name: 'unUsedGasLimit_',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_unUsedGasLimit',
                type: 'uint256',
            },
        ],
        name: 'getBatchClosePositions',
        outputs: [
            {
                components: [
                    {
                        internalType: 'uint256',
                        name: 'poolId',
                        type: 'uint256',
                    },
                    {
                        internalType: 'address[]',
                        name: 'positions',
                        type: 'address[]',
                    },
                ],
                internalType: 'struct ITradingHub.BatchPositionInfo[]',
                name: 'batchPositionInfos',
                type: 'tuple[]',
            },
            {
                internalType: 'uint256',
                name: 'unUsedGasLimit_',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_unUsedGasLimit',
                type: 'uint256',
            },
        ],
        name: 'getBatchLegacyPositions',
        outputs: [
            {
                components: [
                    {
                        internalType: 'uint256',
                        name: 'poolId',
                        type: 'uint256',
                    },
                    {
                        internalType: 'address[]',
                        name: 'positions',
                        type: 'address[]',
                    },
                ],
                internalType: 'struct ITradingHub.BatchPositionInfo[]',
                name: 'batchPositionInfos',
                type: 'tuple[]',
            },
            {
                internalType: 'uint256',
                name: 'unUsedGasLimit_',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getChainId',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'pure',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_unUsedGasLimit',
                type: 'uint256',
            },
        ],
        name: 'getQueuePoolProposals',
        outputs: [
            {
                internalType: 'uint256[]',
                name: 'queuedProposals',
                type: 'uint256[]',
            },
            {
                internalType: 'uint256[]',
                name: 'failedProposals',
                type: 'uint256[]',
            },
            {
                internalType: 'uint256',
                name: 'unUsedGasLimit_',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'role',
                type: 'bytes32',
            },
        ],
        name: 'getRoleAdmin',
        outputs: [
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'role',
                type: 'bytes32',
            },
            {
                internalType: 'uint256',
                name: 'index',
                type: 'uint256',
            },
        ],
        name: 'getRoleMember',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'role',
                type: 'bytes32',
            },
        ],
        name: 'getRoleMemberCount',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_unUsedGasLimit',
                type: 'uint256',
            },
        ],
        name: 'getTradingHubChangedPositions',
        outputs: [
            {
                internalType: 'address[]',
                name: 'resPositions',
                type: 'address[]',
            },
            {
                internalType: 'uint256',
                name: 'unUsedGasLimit_',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'strToken',
                type: 'address',
            },
            {
                internalType: 'address[]',
                name: 'openPositions',
                type: 'address[]',
            },
        ],
        name: 'getTradingHubChangedPositionsByPool',
        outputs: [
            {
                internalType: 'address[]',
                name: 'resPositions',
                type: 'address[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'grabRewardPerBlock',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'grabRewardPerGasLimit',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'role',
                type: 'bytes32',
            },
            {
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'grantRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes',
                name: 'data',
                type: 'bytes',
            },
            {
                internalType: 'bytes32',
                name: '_signature',
                type: 'bytes32',
            },
        ],
        name: 'harvest',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'role',
                type: 'bytes32',
            },
            {
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'hasRole',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_shorterBone',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_tradingHub',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_poolGuardian',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_auctionHall',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_committee',
                type: 'address',
            },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'killSelf',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'lastGrabBlockNum',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'maxGasLimit',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'overdrawnGasLimit',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'paused',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'pendingReward',
        outputs: [
            {
                internalType: 'uint256',
                name: 'reward',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'estimateGasLimit',
                type: 'uint256',
            },
            {
                internalType: 'bytes',
                name: 'data',
                type: 'bytes',
            },
            {
                internalType: 'bytes32',
                name: '_signature',
                type: 'bytes32',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'phase1RankGasLimit',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'poolGuardian',
        outputs: [
            {
                internalType: 'contract IPoolGuardian',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'queuedProposalGasLimit',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'recoverGasLimit',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'role',
                type: 'bytes32',
            },
            {
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'renounceRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes32',
                name: 'role',
                type: 'bytes32',
            },
            {
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'revokeRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'secondsPerBlock',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_maxGasLimit',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: '_baseGasLimit',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: '_closePositionGasLimit',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: '_batchClosePositionGasLimit',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: '_recoverGasLimit',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: '_phase1RankGasLimit',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: '_overdrawnGasLimit',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: '_queuedProposalGasLimit',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: '_failedProposalGasLimit',
                type: 'uint256',
            },
        ],
        name: 'setGasLimit',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'newGrabRewardPerBlock',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'newGrabRewardPerGasLimit',
                type: 'uint256',
            },
        ],
        name: 'setGrabReward',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'tradingHub',
        outputs: [
            {
                internalType: 'contract ITradingHub',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
];

const contractName = 'GrabReward';
async function getContract(flag = true) {
    const Contract = await getThighInstance().ethUtil.getContractByName(contractName, abi, flag);
    return Contract;
}
function getMulticallContract() {
    return getThighInstance().ethUtil.getMulticallContractByName(contractName, abi);
}
export { abi, getContract, getMulticallContract };
