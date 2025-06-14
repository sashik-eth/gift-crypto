export const LOCK_GIFT_ABI = [
    {
        "inputs": [
        {
            "internalType": "address",
            "name": "receiver",
            "type": "address"
        }
        ],
        "name": "getGifts",
        "outputs": [
        {
            "internalType": "uint256[]",
            "name": "amounts",
            "type": "uint256[]"
        },
        {
            "internalType": "uint256[]",
            "name": "unlockTimes",
            "type": "uint256[]"
        },
        {
            "internalType": "string[]",
            "name": "messages",
            "type": "string[]"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "address",
            "name": "receiver",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "unlockTime",
            "type": "uint256"
        },
        {
            "internalType": "string",
            "name": "message",
            "type": "string"
        }
        ],
        "name": "lockGift",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
        },
        {
            "internalType": "address",
            "name": "target",
            "type": "address"
        }
        ],
        "name": "unlockGift",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
          
        ],
        "stateMutability": "nonpayable",
        "type": "function",
        "name": "testMe"
      },
] as const;
  
export const LOCKER_CONTRACT_ADDRESS = '0x9a43C2D4f8c629fFae813b98861242b065105596';
  