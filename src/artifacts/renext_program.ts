export type RenextProgram = {
  "version": "0.1.0",
  "name": "renext_program",
  "constants": [
    {
      "name": "REUSD_MINT",
      "type": "publicKey",
      "value": "pubkey ! (\"4Q89182juiadeFgGw3fupnrwnnDmBhf7e7fHWxnUP3S3\")"
    },
    {
      "name": "REUSD_MINT",
      "type": "publicKey",
      "value": "pubkey ! (\"AJABAYSrSuFCgmRnxTVBY2zfSpYx9gXrWPCP5QZ16TNu\")"
    }
  ],
  "instructions": [
    {
      "name": "createTokenPool",
      "accounts": [
        {
          "name": "launchPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasurer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "currencyMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "launchPoolTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "unlockDate",
          "type": "i64"
        },
        {
          "name": "poolSize",
          "type": "u64"
        },
        {
          "name": "minimumTokenAmount",
          "type": "u64"
        },
        {
          "name": "maximumTokenAmount",
          "type": "u64"
        },
        {
          "name": "rate",
          "type": "u64"
        },
        {
          "name": "tokenMintDecimals",
          "type": "u8"
        },
        {
          "name": "launchPoolType",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createNativePool",
      "accounts": [
        {
          "name": "launchPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasurer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "unlockDate",
          "type": "i64"
        },
        {
          "name": "poolSize",
          "type": "u64"
        },
        {
          "name": "minimumTokenAmount",
          "type": "u64"
        },
        {
          "name": "maximumTokenAmount",
          "type": "u64"
        },
        {
          "name": "rate",
          "type": "u64"
        },
        {
          "name": "tokenMintDecimals",
          "type": "u8"
        },
        {
          "name": "launchPoolType",
          "type": "u8"
        }
      ]
    },
    {
      "name": "startLaunchPool",
      "accounts": [
        {
          "name": "launchPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sourceTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasurer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "startLaunchPoolWithWhitelist",
      "accounts": [
        {
          "name": "launchPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sourceTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasurer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "whitelist",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "maxSize",
          "type": "u8"
        },
        {
          "name": "wallets",
          "type": {
            "vec": "publicKey"
          }
        }
      ]
    },
    {
      "name": "addWalletsToWhitelist",
      "accounts": [
        {
          "name": "launchPool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "whitelist",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "wallets",
          "type": {
            "vec": "publicKey"
          }
        }
      ]
    },
    {
      "name": "removeWalletsFromWhitelist",
      "accounts": [
        {
          "name": "launchPool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "whitelist",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "wallets",
          "type": {
            "vec": "publicKey"
          }
        }
      ]
    },
    {
      "name": "buyTokenWithNative",
      "accounts": [
        {
          "name": "launchPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "buyTokenWithToken",
      "accounts": [
        {
          "name": "launchPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "currencyMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "launchPoolTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "buyTokenWithNativeWhitelist",
      "accounts": [
        {
          "name": "launchPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "whitelist",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "buyTokenWithTokenWhitelist",
      "accounts": [
        {
          "name": "launchPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "currencyMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "launchPoolTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "whitelist",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdrawNative",
      "accounts": [
        {
          "name": "launchPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "beneficiary",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeReceiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "withdrawToken",
      "accounts": [
        {
          "name": "launchPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "currencyMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "launchPoolTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "beneficiary",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeReceiver",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "completeLaunchPool",
      "accounts": [
        {
          "name": "launchPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "claimToken",
      "accounts": [
        {
          "name": "launchPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasurer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "claimTokenVesting",
      "accounts": [
        {
          "name": "launchPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasurer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vestingPlan",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "setVestingPlan",
      "accounts": [
        {
          "name": "launchPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vestingPlan",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "size",
          "type": "u8"
        },
        {
          "name": "schedule",
          "type": {
            "vec": {
              "defined": "VestingSchedule"
            }
          }
        }
      ]
    },
    {
      "name": "collectRemainToken",
      "accounts": [
        {
          "name": "launchPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasurer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "desTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "cancelLaunchPool",
      "accounts": [
        {
          "name": "launchPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasurer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "desTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initSystem",
      "accounts": [
        {
          "name": "systemInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "feeReceiver",
          "type": "publicKey"
        },
        {
          "name": "feeInPercent",
          "type": "u8"
        }
      ]
    },
    {
      "name": "updateFeeRecevier",
      "accounts": [
        {
          "name": "systemInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "feeReceiver",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "updateFeeInPercent",
      "accounts": [
        {
          "name": "systemInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "feeInPercent",
          "type": "u8"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "launchPool",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "unlockDate",
            "type": "i64"
          },
          {
            "name": "poolSize",
            "type": "u64"
          },
          {
            "name": "minimumTokenAmount",
            "type": "u64"
          },
          {
            "name": "maximumTokenAmount",
            "type": "u64"
          },
          {
            "name": "rate",
            "type": "u64"
          },
          {
            "name": "poolSizeRemaining",
            "type": "u64"
          },
          {
            "name": "tokenMint",
            "type": "publicKey"
          },
          {
            "name": "tokenMintDecimals",
            "type": "u8"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "vaultAmount",
            "type": "u64"
          },
          {
            "name": "isVesting",
            "type": "bool"
          },
          {
            "name": "currency",
            "type": {
              "defined": "CurrencyType"
            }
          },
          {
            "name": "poolType",
            "type": {
              "defined": "LaunchPoolType"
            }
          },
          {
            "name": "status",
            "type": {
              "defined": "LaunchPoolState"
            }
          }
        ]
      }
    },
    {
      "name": "systemInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "publicKey"
          },
          {
            "name": "feeReceiver",
            "type": "publicKey"
          },
          {
            "name": "feeInPercent",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "treasurer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "launchPool",
            "type": "publicKey"
          },
          {
            "name": "tokenMint",
            "type": "publicKey"
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "userPool",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "currencyAmount",
            "type": "u64"
          },
          {
            "name": "claimed",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "vestingPlan",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "launchPool",
            "type": "publicKey"
          },
          {
            "name": "schedule",
            "type": {
              "vec": {
                "defined": "VestingSchedule"
              }
            }
          }
        ]
      }
    },
    {
      "name": "whitelist",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "launchPool",
            "type": "publicKey"
          },
          {
            "name": "maxSize",
            "type": "u8"
          },
          {
            "name": "wallets",
            "type": {
              "vec": "publicKey"
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "LaunchPoolBumps",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "launchpoolBump",
            "type": "u8"
          },
          {
            "name": "treasurerBump",
            "type": "u8"
          },
          {
            "name": "vaultBump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "VestingSchedule",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "releaseTime",
            "type": "i64"
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "CurrencyType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "RENEC"
          },
          {
            "name": "ReUSD"
          }
        ]
      }
    },
    {
      "name": "LaunchPoolType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "FairLaunch"
          },
          {
            "name": "WhiteList"
          }
        ]
      }
    },
    {
      "name": "LaunchPoolState",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Pending"
          },
          {
            "name": "Active"
          },
          {
            "name": "Completed"
          },
          {
            "name": "Cancelled"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "BuyTokenWithTokenEvent",
      "fields": [
        {
          "name": "buyer",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        },
        {
          "name": "tokenAmount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "BuyTokenEvent",
      "fields": [
        {
          "name": "buyer",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        },
        {
          "name": "totalUserAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "vaultAmount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "ClaimTokenEvent",
      "fields": [
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "NewPoolCreatedEvent",
      "fields": []
    },
    {
      "name": "PoolCompletedEvent",
      "fields": [
        {
          "name": "launchPool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tokenRemaining",
          "type": "u64",
          "index": false
        },
        {
          "name": "vaultAmount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "PoolStartedEvent",
      "fields": [
        {
          "name": "launchPool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "treasurer",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "treasury",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "whitelist",
          "type": {
            "option": "publicKey"
          },
          "index": false
        }
      ]
    },
    {
      "name": "VestingPlanUpdatedEvent",
      "fields": [
        {
          "name": "launchPool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "schedule",
          "type": {
            "vec": {
              "defined": "VestingSchedule"
            }
          },
          "index": false
        }
      ]
    },
    {
      "name": "RemainTokenCollectedEvent",
      "fields": [
        {
          "name": "launchPool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "PoolCancelledEvent",
      "fields": [
        {
          "name": "launchPool",
          "type": "publicKey",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "MutationForbidden",
      "msg": "The authority is not authorized to initialize the program"
    },
    {
      "code": 6001,
      "name": "InvalidInstruction",
      "msg": "Invalid instruction"
    },
    {
      "code": 6002,
      "name": "InvalidUnlockDate",
      "msg": "Invalid unlock date"
    },
    {
      "code": 6003,
      "name": "InvalidAuthority",
      "msg": "Invalid authority"
    },
    {
      "code": 6004,
      "name": "InvalidTokenMint",
      "msg": "Invalid token mint"
    },
    {
      "code": 6005,
      "name": "InvalidLaunchPoolStatus",
      "msg": "Invalid launch pool status"
    },
    {
      "code": 6006,
      "name": "InvalidCurrencyType",
      "msg": "Invalid currency type"
    },
    {
      "code": 6007,
      "name": "PoolNotEnough",
      "msg": "Pool not enough to buy"
    },
    {
      "code": 6008,
      "name": "InvalidAmount",
      "msg": "Invalid amount"
    },
    {
      "code": 6009,
      "name": "MaximumTokenAmountReached",
      "msg": "Maximum token amount reached"
    },
    {
      "code": 6010,
      "name": "TimeLockNotExpired",
      "msg": "Time lock not expired"
    },
    {
      "code": 6011,
      "name": "NoBump",
      "msg": "Cannot find treasurer account"
    },
    {
      "code": 6012,
      "name": "MinimumTokenAmountNotReached",
      "msg": "Minimum token amount not reached"
    },
    {
      "code": 6013,
      "name": "InvalidCreator",
      "msg": "Invalid creator"
    },
    {
      "code": 6014,
      "name": "PoolSizeRemainingNotEnough",
      "msg": "Pool size remaining not enough"
    },
    {
      "code": 6015,
      "name": "InvalidTreasurer",
      "msg": "Invalid treasurer"
    },
    {
      "code": 6016,
      "name": "InvalidVault",
      "msg": "Invalid vault"
    },
    {
      "code": 6017,
      "name": "InvalidLaunchPool",
      "msg": "Invalid launch pool"
    },
    {
      "code": 6018,
      "name": "WhitelistFulled",
      "msg": "White list is full"
    },
    {
      "code": 6019,
      "name": "WalletAlreadyAdded",
      "msg": "Wallet already added"
    },
    {
      "code": 6020,
      "name": "WalletNotInList",
      "msg": "Wallet not in list"
    },
    {
      "code": 6021,
      "name": "NumberCastError",
      "msg": "Unable to cast number into BigInt"
    },
    {
      "code": 6022,
      "name": "InvalidWhitelist",
      "msg": "Invalid whitelist"
    },
    {
      "code": 6023,
      "name": "InvalidLaunchPoolType",
      "msg": "Invalid launch pool type"
    },
    {
      "code": 6024,
      "name": "WalletsMustNotBeEmpty",
      "msg": "Wallets must not be empty"
    },
    {
      "code": 6025,
      "name": "WhitelistNotEnoughSpace",
      "msg": "Whitelist not enough space"
    },
    {
      "code": 6026,
      "name": "LaunchPoolAlreadyCompleted",
      "msg": "Launch pool already completed"
    },
    {
      "code": 6027,
      "name": "UserNotInWhiteList",
      "msg": "User not in whitelist"
    },
    {
      "code": 6028,
      "name": "Overflow",
      "msg": "Calculation overflow"
    },
    {
      "code": 6029,
      "name": "InvalidVestingPlan",
      "msg": "Invalid vesting plan"
    },
    {
      "code": 6030,
      "name": "InvalidScheduleSize",
      "msg": "Invalid schedule size"
    },
    {
      "code": 6031,
      "name": "VestingPlanAccountNotFound",
      "msg": "Vesting plan account not found"
    },
    {
      "code": 6032,
      "name": "ThisIsVestingPool",
      "msg": "This is vesting pool"
    },
    {
      "code": 6033,
      "name": "WhitelistMaxSizeExceeded",
      "msg": "Reached maximum whitelist size"
    },
    {
      "code": 6034,
      "name": "InvalidReleaseTime",
      "msg": "Invalid release time"
    },
    {
      "code": 6035,
      "name": "InvalidTokenMintDecimals",
      "msg": "Invalid token mint decimals"
    },
    {
      "code": 6036,
      "name": "Initialized",
      "msg": "Account is initialized"
    },
    {
      "code": 6037,
      "name": "NotInitialized",
      "msg": "Account is not initialized"
    },
    {
      "code": 6038,
      "name": "InvalidPoolSize",
      "msg": "Invalid pool size"
    },
    {
      "code": 6039,
      "name": "InvalidFeeValue",
      "msg": "Invalid fee value"
    },
    {
      "code": 6040,
      "name": "InvalidAccount",
      "msg": "Invalid account"
    },
    {
      "code": 6041,
      "name": "NotHaveToken",
      "msg": "You don't have token"
    }
  ]
};

export const IDL: RenextProgram = {
  "version": "0.1.0",
  "name": "renext_program",
  "constants": [
    {
      "name": "REUSD_MINT",
      "type": "publicKey",
      "value": "pubkey ! (\"4Q89182juiadeFgGw3fupnrwnnDmBhf7e7fHWxnUP3S3\")"
    },
    {
      "name": "REUSD_MINT",
      "type": "publicKey",
      "value": "pubkey ! (\"AJABAYSrSuFCgmRnxTVBY2zfSpYx9gXrWPCP5QZ16TNu\")"
    }
  ],
  "instructions": [
    {
      "name": "createTokenPool",
      "accounts": [
        {
          "name": "launchPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasurer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "currencyMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "launchPoolTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "unlockDate",
          "type": "i64"
        },
        {
          "name": "poolSize",
          "type": "u64"
        },
        {
          "name": "minimumTokenAmount",
          "type": "u64"
        },
        {
          "name": "maximumTokenAmount",
          "type": "u64"
        },
        {
          "name": "rate",
          "type": "u64"
        },
        {
          "name": "tokenMintDecimals",
          "type": "u8"
        },
        {
          "name": "launchPoolType",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createNativePool",
      "accounts": [
        {
          "name": "launchPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasurer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "unlockDate",
          "type": "i64"
        },
        {
          "name": "poolSize",
          "type": "u64"
        },
        {
          "name": "minimumTokenAmount",
          "type": "u64"
        },
        {
          "name": "maximumTokenAmount",
          "type": "u64"
        },
        {
          "name": "rate",
          "type": "u64"
        },
        {
          "name": "tokenMintDecimals",
          "type": "u8"
        },
        {
          "name": "launchPoolType",
          "type": "u8"
        }
      ]
    },
    {
      "name": "startLaunchPool",
      "accounts": [
        {
          "name": "launchPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sourceTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasurer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "startLaunchPoolWithWhitelist",
      "accounts": [
        {
          "name": "launchPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "sourceTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasurer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "whitelist",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "maxSize",
          "type": "u8"
        },
        {
          "name": "wallets",
          "type": {
            "vec": "publicKey"
          }
        }
      ]
    },
    {
      "name": "addWalletsToWhitelist",
      "accounts": [
        {
          "name": "launchPool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "whitelist",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "wallets",
          "type": {
            "vec": "publicKey"
          }
        }
      ]
    },
    {
      "name": "removeWalletsFromWhitelist",
      "accounts": [
        {
          "name": "launchPool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "whitelist",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "wallets",
          "type": {
            "vec": "publicKey"
          }
        }
      ]
    },
    {
      "name": "buyTokenWithNative",
      "accounts": [
        {
          "name": "launchPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "buyTokenWithToken",
      "accounts": [
        {
          "name": "launchPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "currencyMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "launchPoolTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "buyTokenWithNativeWhitelist",
      "accounts": [
        {
          "name": "launchPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "whitelist",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "buyTokenWithTokenWhitelist",
      "accounts": [
        {
          "name": "launchPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "currencyMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "launchPoolTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "whitelist",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdrawNative",
      "accounts": [
        {
          "name": "launchPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "beneficiary",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeReceiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "withdrawToken",
      "accounts": [
        {
          "name": "launchPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "currencyMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "launchPoolTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "beneficiary",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemInfo",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeReceiver",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "feeTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "completeLaunchPool",
      "accounts": [
        {
          "name": "launchPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "claimToken",
      "accounts": [
        {
          "name": "launchPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasurer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "claimTokenVesting",
      "accounts": [
        {
          "name": "launchPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasurer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vestingPlan",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "setVestingPlan",
      "accounts": [
        {
          "name": "launchPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vestingPlan",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "size",
          "type": "u8"
        },
        {
          "name": "schedule",
          "type": {
            "vec": {
              "defined": "VestingSchedule"
            }
          }
        }
      ]
    },
    {
      "name": "collectRemainToken",
      "accounts": [
        {
          "name": "launchPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasurer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "desTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "cancelLaunchPool",
      "accounts": [
        {
          "name": "launchPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "treasurer",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "treasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "desTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initSystem",
      "accounts": [
        {
          "name": "systemInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "feeReceiver",
          "type": "publicKey"
        },
        {
          "name": "feeInPercent",
          "type": "u8"
        }
      ]
    },
    {
      "name": "updateFeeRecevier",
      "accounts": [
        {
          "name": "systemInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "feeReceiver",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "updateFeeInPercent",
      "accounts": [
        {
          "name": "systemInfo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "feeInPercent",
          "type": "u8"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "launchPool",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "unlockDate",
            "type": "i64"
          },
          {
            "name": "poolSize",
            "type": "u64"
          },
          {
            "name": "minimumTokenAmount",
            "type": "u64"
          },
          {
            "name": "maximumTokenAmount",
            "type": "u64"
          },
          {
            "name": "rate",
            "type": "u64"
          },
          {
            "name": "poolSizeRemaining",
            "type": "u64"
          },
          {
            "name": "tokenMint",
            "type": "publicKey"
          },
          {
            "name": "tokenMintDecimals",
            "type": "u8"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "vaultAmount",
            "type": "u64"
          },
          {
            "name": "isVesting",
            "type": "bool"
          },
          {
            "name": "currency",
            "type": {
              "defined": "CurrencyType"
            }
          },
          {
            "name": "poolType",
            "type": {
              "defined": "LaunchPoolType"
            }
          },
          {
            "name": "status",
            "type": {
              "defined": "LaunchPoolState"
            }
          }
        ]
      }
    },
    {
      "name": "systemInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "publicKey"
          },
          {
            "name": "feeReceiver",
            "type": "publicKey"
          },
          {
            "name": "feeInPercent",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "treasurer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "launchPool",
            "type": "publicKey"
          },
          {
            "name": "tokenMint",
            "type": "publicKey"
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "userPool",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "currencyAmount",
            "type": "u64"
          },
          {
            "name": "claimed",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "vestingPlan",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "launchPool",
            "type": "publicKey"
          },
          {
            "name": "schedule",
            "type": {
              "vec": {
                "defined": "VestingSchedule"
              }
            }
          }
        ]
      }
    },
    {
      "name": "whitelist",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "launchPool",
            "type": "publicKey"
          },
          {
            "name": "maxSize",
            "type": "u8"
          },
          {
            "name": "wallets",
            "type": {
              "vec": "publicKey"
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "LaunchPoolBumps",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "launchpoolBump",
            "type": "u8"
          },
          {
            "name": "treasurerBump",
            "type": "u8"
          },
          {
            "name": "vaultBump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "VestingSchedule",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "releaseTime",
            "type": "i64"
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "CurrencyType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "RENEC"
          },
          {
            "name": "ReUSD"
          }
        ]
      }
    },
    {
      "name": "LaunchPoolType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "FairLaunch"
          },
          {
            "name": "WhiteList"
          }
        ]
      }
    },
    {
      "name": "LaunchPoolState",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Pending"
          },
          {
            "name": "Active"
          },
          {
            "name": "Completed"
          },
          {
            "name": "Cancelled"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "BuyTokenWithTokenEvent",
      "fields": [
        {
          "name": "buyer",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        },
        {
          "name": "tokenAmount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "BuyTokenEvent",
      "fields": [
        {
          "name": "buyer",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        },
        {
          "name": "totalUserAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "vaultAmount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "ClaimTokenEvent",
      "fields": [
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "NewPoolCreatedEvent",
      "fields": []
    },
    {
      "name": "PoolCompletedEvent",
      "fields": [
        {
          "name": "launchPool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tokenRemaining",
          "type": "u64",
          "index": false
        },
        {
          "name": "vaultAmount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "PoolStartedEvent",
      "fields": [
        {
          "name": "launchPool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "treasurer",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "treasury",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "whitelist",
          "type": {
            "option": "publicKey"
          },
          "index": false
        }
      ]
    },
    {
      "name": "VestingPlanUpdatedEvent",
      "fields": [
        {
          "name": "launchPool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "schedule",
          "type": {
            "vec": {
              "defined": "VestingSchedule"
            }
          },
          "index": false
        }
      ]
    },
    {
      "name": "RemainTokenCollectedEvent",
      "fields": [
        {
          "name": "launchPool",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "PoolCancelledEvent",
      "fields": [
        {
          "name": "launchPool",
          "type": "publicKey",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "MutationForbidden",
      "msg": "The authority is not authorized to initialize the program"
    },
    {
      "code": 6001,
      "name": "InvalidInstruction",
      "msg": "Invalid instruction"
    },
    {
      "code": 6002,
      "name": "InvalidUnlockDate",
      "msg": "Invalid unlock date"
    },
    {
      "code": 6003,
      "name": "InvalidAuthority",
      "msg": "Invalid authority"
    },
    {
      "code": 6004,
      "name": "InvalidTokenMint",
      "msg": "Invalid token mint"
    },
    {
      "code": 6005,
      "name": "InvalidLaunchPoolStatus",
      "msg": "Invalid launch pool status"
    },
    {
      "code": 6006,
      "name": "InvalidCurrencyType",
      "msg": "Invalid currency type"
    },
    {
      "code": 6007,
      "name": "PoolNotEnough",
      "msg": "Pool not enough to buy"
    },
    {
      "code": 6008,
      "name": "InvalidAmount",
      "msg": "Invalid amount"
    },
    {
      "code": 6009,
      "name": "MaximumTokenAmountReached",
      "msg": "Maximum token amount reached"
    },
    {
      "code": 6010,
      "name": "TimeLockNotExpired",
      "msg": "Time lock not expired"
    },
    {
      "code": 6011,
      "name": "NoBump",
      "msg": "Cannot find treasurer account"
    },
    {
      "code": 6012,
      "name": "MinimumTokenAmountNotReached",
      "msg": "Minimum token amount not reached"
    },
    {
      "code": 6013,
      "name": "InvalidCreator",
      "msg": "Invalid creator"
    },
    {
      "code": 6014,
      "name": "PoolSizeRemainingNotEnough",
      "msg": "Pool size remaining not enough"
    },
    {
      "code": 6015,
      "name": "InvalidTreasurer",
      "msg": "Invalid treasurer"
    },
    {
      "code": 6016,
      "name": "InvalidVault",
      "msg": "Invalid vault"
    },
    {
      "code": 6017,
      "name": "InvalidLaunchPool",
      "msg": "Invalid launch pool"
    },
    {
      "code": 6018,
      "name": "WhitelistFulled",
      "msg": "White list is full"
    },
    {
      "code": 6019,
      "name": "WalletAlreadyAdded",
      "msg": "Wallet already added"
    },
    {
      "code": 6020,
      "name": "WalletNotInList",
      "msg": "Wallet not in list"
    },
    {
      "code": 6021,
      "name": "NumberCastError",
      "msg": "Unable to cast number into BigInt"
    },
    {
      "code": 6022,
      "name": "InvalidWhitelist",
      "msg": "Invalid whitelist"
    },
    {
      "code": 6023,
      "name": "InvalidLaunchPoolType",
      "msg": "Invalid launch pool type"
    },
    {
      "code": 6024,
      "name": "WalletsMustNotBeEmpty",
      "msg": "Wallets must not be empty"
    },
    {
      "code": 6025,
      "name": "WhitelistNotEnoughSpace",
      "msg": "Whitelist not enough space"
    },
    {
      "code": 6026,
      "name": "LaunchPoolAlreadyCompleted",
      "msg": "Launch pool already completed"
    },
    {
      "code": 6027,
      "name": "UserNotInWhiteList",
      "msg": "User not in whitelist"
    },
    {
      "code": 6028,
      "name": "Overflow",
      "msg": "Calculation overflow"
    },
    {
      "code": 6029,
      "name": "InvalidVestingPlan",
      "msg": "Invalid vesting plan"
    },
    {
      "code": 6030,
      "name": "InvalidScheduleSize",
      "msg": "Invalid schedule size"
    },
    {
      "code": 6031,
      "name": "VestingPlanAccountNotFound",
      "msg": "Vesting plan account not found"
    },
    {
      "code": 6032,
      "name": "ThisIsVestingPool",
      "msg": "This is vesting pool"
    },
    {
      "code": 6033,
      "name": "WhitelistMaxSizeExceeded",
      "msg": "Reached maximum whitelist size"
    },
    {
      "code": 6034,
      "name": "InvalidReleaseTime",
      "msg": "Invalid release time"
    },
    {
      "code": 6035,
      "name": "InvalidTokenMintDecimals",
      "msg": "Invalid token mint decimals"
    },
    {
      "code": 6036,
      "name": "Initialized",
      "msg": "Account is initialized"
    },
    {
      "code": 6037,
      "name": "NotInitialized",
      "msg": "Account is not initialized"
    },
    {
      "code": 6038,
      "name": "InvalidPoolSize",
      "msg": "Invalid pool size"
    },
    {
      "code": 6039,
      "name": "InvalidFeeValue",
      "msg": "Invalid fee value"
    },
    {
      "code": 6040,
      "name": "InvalidAccount",
      "msg": "Invalid account"
    },
    {
      "code": 6041,
      "name": "NotHaveToken",
      "msg": "You don't have token"
    }
  ]
};
