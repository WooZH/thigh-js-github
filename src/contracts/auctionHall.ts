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
                name: 'positionAddr',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: 'phase',
                type: 'uint256',
            },
        ],
        name: 'AuctionFinished',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'positionAddr',
                type: 'address',
            },
        ],
        name: 'AuctionInitiated',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'positionAddr',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'ruler',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'debtSize',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'usedCash',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'dexCoverReward',
                type: 'uint256',
            },
        ],
        name: 'BidKatana',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'positionAddr',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'ruler',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'bidSize',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'priorityFee',
                type: 'uint256',
            },
        ],
        name: 'BidTanto',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'self',
                type: 'address',
            },
            {
                indexed: true,
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
                internalType: 'address',
                name: 'positionAddr',
                type: 'address',
            },
        ],
        name: 'Phase1Rollback',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'positionAddr',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'stableTokenSize',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'debtTokenSize',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'priorityFee',
                type: 'uint256',
            },
        ],
        name: 'Retrieve',
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
        inputs: [],
        name: 'SAVIOR',
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
        inputs: [],
        name: 'WrappedEtherAddr',
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
                internalType: 'address',
                name: '',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        name: 'allPhase1BidRecords',
        outputs: [
            {
                internalType: 'bool',
                name: 'takeBack',
                type: 'bool',
            },
            {
                internalType: 'uint64',
                name: 'bidBlock',
                type: 'uint64',
            },
            {
                internalType: 'address',
                name: 'bidder',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'bidSize',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'priorityFee',
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
        name: 'auctionMaxBlock',
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
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        name: 'auctionPositonInfoMap',
        outputs: [
            {
                internalType: 'address',
                name: 'strPool',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'stakedToken',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'stableToken',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'closingBlock',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'totalSize',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'unsettledCash',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'stakedTokenDecimals',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'stableTokenDecimals',
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
                name: 'position',
                type: 'address',
            },
            {
                internalType: 'bytes',
                name: 'path',
                type: 'bytes',
            },
        ],
        name: 'bidKatana',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'position',
                type: 'address',
            },
        ],
        name: 'bidSorted',
        outputs: [
            {
                internalType: 'uint256[]',
                name: '_bidRanks',
                type: 'uint256[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'position',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'bidSize',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'priorityFee',
                type: 'uint256',
            },
        ],
        name: 'bidTanto',
        outputs: [],
        stateMutability: 'payable',
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
        name: 'dexCenter',
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
                internalType: 'address',
                name: 'position',
                type: 'address',
            },
        ],
        name: 'estimateAuctionPrice',
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
                internalType: 'address[]',
                name: 'closedPositions',
                type: 'address[]',
            },
            {
                internalType: 'address[]',
                name: 'legacyPositions',
                type: 'address[]',
            },
        ],
        name: 'executePositions',
        outputs: [],
        stateMutability: 'nonpayable',
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
                name: 'position',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'strPool',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'closingBlock',
                type: 'uint256',
            },
        ],
        name: 'initAuctionPosition',
        outputs: [],
        stateMutability: 'nonpayable',
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
                name: '_dexCenter',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_ipistrToken',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_poolGuardian',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_tradingHub',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_priceOracle',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_committee',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_wrappedEtherAddr',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: '_phase1MaxBlock',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: '_auctionMaxBlock',
                type: 'uint256',
            },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'inquire',
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
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'ipistrToken',
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
        inputs: [],
        name: 'pause',
        outputs: [],
        stateMutability: 'nonpayable',
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
        inputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        name: 'phase1Infos',
        outputs: [
            {
                internalType: 'uint256',
                name: 'bidSize',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'liquidationPrice',
                type: 'uint256',
            },
            {
                internalType: 'bool',
                name: 'isSorted',
                type: 'bool',
            },
            {
                internalType: 'bool',
                name: 'flag',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'phase1MaxBlock',
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
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        name: 'phase2Infos',
        outputs: [
            {
                internalType: 'bool',
                name: 'flag',
                type: 'bool',
            },
            {
                internalType: 'bool',
                name: 'isWithdrawn',
                type: 'bool',
            },
            {
                internalType: 'address',
                name: 'rulerAddr',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'debtSize',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'usedCash',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'dexCoverReward',
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
        name: 'priceOracle',
        outputs: [
            {
                internalType: 'contract IPriceOracle',
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
                internalType: 'address',
                name: 'position',
                type: 'address',
            },
            {
                internalType: 'uint256[]',
                name: 'bidRanks',
                type: 'uint256[]',
            },
            {
                internalType: 'address',
                name: 'ruler',
                type: 'address',
            },
        ],
        name: 'queryResidues',
        outputs: [
            {
                internalType: 'uint256',
                name: 'stableTokenSize',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'debtTokenSize',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'priorityFee',
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
                internalType: 'address',
                name: 'position',
                type: 'address',
            },
            {
                internalType: 'uint256[]',
                name: 'bidRanks',
                type: 'uint256[]',
            },
        ],
        name: 'retrieve',
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
    {
        inputs: [
            {
                internalType: 'address',
                name: 'multiSigWallet',
                type: 'address',
            },
        ],
        name: 'transferSavior',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [],
        name: 'unpause',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        name: 'userBidTimes',
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
                internalType: 'address',
                name: '',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        name: 'userLastBidBlock',
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
];
const contractName = 'AuctionHall';

async function getContract(flag = true) {
    const Contract = await getThighInstance().ethUtil.getContractByName(contractName, abi, flag);
    return Contract;
}
function getMulticallContract() {
    return getThighInstance().ethUtil.getMulticallContractByName(contractName, abi);
}

export { abi, getMulticallContract, getContract };
