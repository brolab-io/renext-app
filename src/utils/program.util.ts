import { RenextProgram } from "@/artifacts/renext_program";
import { BN, Program } from "@project-serum/anchor";
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SYSVAR_RENT_PUBKEY,
  SystemProgram,
} from "@solana/web3.js";
import dayjs from "dayjs";
import {
  findLaunchPoolAccount,
  findMintTokenAccount,
  findTreasurerAccount,
  findUserPoolAccount,
  findVaultAccount,
  findVestingPlanAccount,
  findWhitelistAccount,
} from "./account.util";
import { getExplorerUrl } from "./network.util";
import { createLaunchPad } from "@/services/launchpad.service";
import { parseToken } from "./format.util";
export const CURRENCY = { RENEC: "RENEC", REUSD: "REUSD" };
export const CURRENCY_POOL = { RENEC: "renec", REUSD: "reUsd" };

export const CAMPAIGN_TYPE = {
  FairLaunch: "Fair Launch",
  Whitelist: "WhiteList",
};
export const CAMPAIGN_TYPE_POOL = {
  FairLaunch: "fairLaunch",
  Whitelist: "whiteList",
};

export async function createNativePool(
  program: Program<RenextProgram>,
  creator: PublicKey,
  payload: any
) {
  const mint = new PublicKey(payload.token_address);
  // Check token_unlock_date is valid
  if (dayjs(payload.token_unlock_date).isBefore(dayjs())) {
    return Promise.reject(
      new Error("Token unlock date must be greater than current date")
    );
  }
  const unlock_date = new BN(dayjs(payload.token_unlock_date).unix());
  const decimals = new BN(payload.token_decimals || 9);
  const rate = new BN(payload.presale_rate) //new BN("1").mul(new BN(10000)).div(new BN(payload.presale_rate));
  const pool_size = new BN(payload.token_sale_amount).mul(new BN(10).pow(new BN(decimals)));
  const minimum_token_amount = new BN(payload.minimum_token_amount).mul(new BN(10).pow(decimals));
  const maximum_token_amount = new BN(payload.maximum_token_amount).mul(new BN(10).pow(decimals));

  const isWhitelist = payload.campaign_type === "whitelist";

  const [launch_pool] = findLaunchPoolAccount(creator, mint, program.programId);
  console.log(
    `launch_pool: ${launch_pool.toBase58()} creator: ${creator.toBase58()} with mint: ${mint.toBase58()} creating ....`
  );
  console.log("--------------------------------------");
  console.log("TOKEN_PROGRAM_ID", TOKEN_PROGRAM_ID);

  const [treasurer] = findTreasurerAccount(
    launch_pool,
    mint,
    program.programId
  );
  const treasury = await findMintTokenAccount(treasurer, mint);

  console.log({
    unlock_date,
    pool_size,
    minimum_token_amount: minimum_token_amount.toString(),
    maximum_token_amount: maximum_token_amount.toString(),
    rate: rate.toString(),
    decimals,
  });

  const tx = await program.methods
    .createNativePool(
      unlock_date,
      pool_size,
      minimum_token_amount,
      maximum_token_amount,
      rate,
      decimals.toNumber(),
      isWhitelist ? 1 : 0
    )
    .accounts({
      launchPool: launch_pool,
      authority: creator,
      tokenMint: mint,
      treasurer: treasurer,
      treasury: treasury,
      rent: SYSVAR_RENT_PUBKEY,
      systemProgram: SystemProgram.programId,
      tokenProgram: TOKEN_PROGRAM_ID,
      associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
    })
    .rpc();

  console.log("Create a new launchpool in tx: ", "\n", getExplorerUrl(tx));
  console.log("********************************");
  const result = await createLaunchPad({
    ...payload,
    presale_rate: rate.toString(),
    token_sale_amount: pool_size.toString(),
    minimum_token_amount: minimum_token_amount.toString(),
    maximum_token_amount: maximum_token_amount.toString(),
    created_by: creator.toBase58(),
    launch_pool_pda: launch_pool.toBase58(),
    token_decimals: decimals,
    token_unlock_date: new Date(payload.token_unlock_date).toISOString(),
  });

  return { tx, result };
}

export async function createTokenPool(
  program: Program<RenextProgram>,
  creator: PublicKey,
  payload: any
) {
  const mint = new PublicKey(payload.token_address);
  const reusd_mint = new PublicKey(process.env.NEXT_PUBLIC_REUSD_MINT!);
  const unlock_date = new BN(dayjs(payload.token_unlock_date).unix());
  const decimals = new BN(payload.token_decimals || 9);
  const rate = new BN(payload.presale_rate) //new BN("1").mul(new BN(10000)).div(new BN(payload.presale_rate));
  const pool_size = new BN(payload.token_sale_amount).mul(new BN(10).pow(new BN(decimals)));
  const minimum_token_amount = new BN(payload.minimum_token_amount).mul(new BN(10).pow(decimals));
  const maximum_token_amount = new BN(payload.maximum_token_amount).mul(new BN(10).pow(decimals));
  const isWhitelist = payload.campaign_type === CAMPAIGN_TYPE.Whitelist;
  const [launch_pool] = findLaunchPoolAccount(creator, mint, program.programId);
  const launchPoolTokenAccount = await findMintTokenAccount(
    launch_pool,
    reusd_mint
  );
  console.log(
    `launch_pool: ${launch_pool.toBase58()} creator: ${creator.toBase58()} with mint: ${mint.toBase58()} creating ....`
  );
  console.log("--------------------------------------");

  const [treasurer] = findTreasurerAccount(
    launch_pool,
    mint,
    program.programId
  );
  const treasury = await findMintTokenAccount(treasurer, mint);

  const tx = await program.methods
    .createTokenPool(
      unlock_date,
      pool_size,
      minimum_token_amount,
      maximum_token_amount,
      rate,
      decimals.toNumber(),
      isWhitelist ? 1 : 0
    )
    .accounts({
      launchPool: launch_pool,
      authority: creator,
      tokenMint: mint,
      treasurer: treasurer,
      treasury: treasury,
      currencyMint: reusd_mint,
      launchPoolTokenAccount: launchPoolTokenAccount,
      rent: SYSVAR_RENT_PUBKEY,
      systemProgram: SystemProgram.programId,
      tokenProgram: TOKEN_PROGRAM_ID,
      associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
    })
    .rpc();

  console.log("Create a new launchpool in tx: ", "\n", getExplorerUrl(tx));
  console.log("********************************");
  const result = await createLaunchPad({
    ...payload,
    presale_rate: rate.toString(),
    token_sale_amount: pool_size.toString(),
    minimum_token_amount: minimum_token_amount.toString(),
    maximum_token_amount: maximum_token_amount.toString(),
    created_by: creator.toBase58(),
    launch_pool_pda: launch_pool.toBase58(),
    token_decimals: decimals,
  });

  return { tx, result };
}

export async function startLaunchPool(
  program: Program<RenextProgram>,
  creator: PublicKey,
  pool: PublicKey
) {
  const launch_pool = new PublicKey(pool);
  const poolData = await program.account.launchPool.fetch(launch_pool);
  const mint = new PublicKey(poolData.tokenMint);
  const source_token_account = await findMintTokenAccount(creator, mint);
  const [treasurer] = findTreasurerAccount(
    launch_pool,
    mint,
    program.programId
  );
  const treasury = await findMintTokenAccount(treasurer, mint);

  console.log(
    `launch_pool: ${launch_pool.toBase58()} creator: ${creator.toBase58()} with mint: ${mint.toBase58()} starting ....`
  );
  console.log("--------------------------------------");
  if (poolData.poolType.fairLaunch) {
    const tx = await program.methods
      .startLaunchPool()
      .accounts({
        launchPool: launch_pool,
        tokenMint: mint,
        sourceTokenAccount: source_token_account,
        treasurer: treasurer,
        treasury: treasury,
        authority: creator,
        tokenProgram: TOKEN_PROGRAM_ID,
        rent: SYSVAR_RENT_PUBKEY,
        systemProgram: SystemProgram.programId,
      })
      .rpc();
    console.log("Start launch pool in tx: ", "\n", getExplorerUrl(tx));
  }
  console.log("********************************");
}

export async function startLaunchPoolWithWhitelist(
  program: Program<RenextProgram>,
  creator: PublicKey,
  pool: PublicKey,
  wallets: PublicKey[],
  max_size = 10
) {
  const launch_pool = new PublicKey(pool);
  const poolData = await program.account.launchPool.fetch(launch_pool);
  const mint = new PublicKey(poolData.tokenMint);

  const source_token_account = await findMintTokenAccount(creator, mint);
  const [treasurer] = findTreasurerAccount(
    launch_pool,
    mint,
    program.programId
  );
  const treasury = await findMintTokenAccount(treasurer, mint);
  const [whitelist] = findWhitelistAccount(launch_pool, program.programId);

  console.log(
    `launch_pool: ${launch_pool.toBase58()} creator: ${creator.toBase58()} with mint: ${mint.toBase58()} starting ....`
  );
  console.log("--------------------------------------");
  const tx = await program.methods
    .startLaunchPoolWithWhitelist(max_size, wallets)
    .accounts({
      launchPool: launch_pool,
      tokenMint: mint,
      sourceTokenAccount: source_token_account,
      treasurer: treasurer,
      treasury: treasury,
      whitelist,
      authority: creator,
      tokenProgram: TOKEN_PROGRAM_ID,
      rent: SYSVAR_RENT_PUBKEY,
      systemProgram: SystemProgram.programId,
    })
    .rpc();
  console.log("Start launch pool in tx: ", "\n", getExplorerUrl(tx));
  console.log("********************************");

  const account = await program.account.whitelist.fetch(whitelist);
  console.log("whitelist: ", account);

  return {
    tx,
  };
}

export async function buyWithRenec(
  program: Program<RenextProgram>,
  pool: PublicKey,
  buyer: PublicKey,
  amount: number | string
) {
  const launch_pool = new PublicKey(pool);
  const poolData = await program.account.launchPool.fetch(launch_pool);
  const mint = new PublicKey(poolData.tokenMint);
  const [user_pool] = findUserPoolAccount(
    buyer,
    launch_pool,
    mint,
    program.programId
  );

  const [vault] = findVaultAccount(
    launch_pool,
    poolData.authority,
    program.programId
  );

  console.log(
    `buyer ${buyer.toBase58()} want buy ${amount} token with renec at launch pool ${launch_pool.toBase58()}`
  );
  console.log("--------------------------------------");
  const tx = await program.methods
    .buyTokenWithNative(
      new BN(amount).mul(new BN(10).pow(new BN(poolData.tokenMintDecimals)))
    )
    .accounts({
      launchPool: launch_pool,
      userPool: user_pool,
      user: buyer,
      vault,
      tokenMint: mint,
      tokenProgram: TOKEN_PROGRAM_ID,
      systemProgram: SystemProgram.programId,
      rent: SYSVAR_RENT_PUBKEY,
    })
    .rpc();

  console.log("Buy with renec in tx: ", "\n", getExplorerUrl(tx));

  const data = await program.account.userPool.fetch(user_pool);
  console.log("User pool account: ", data.amount.toNumber());
  console.log("********************************");
  return {
    tx,
  };
}

export async function buyWithReUSD(
  program: Program<RenextProgram>,
  pool: PublicKey,
  buyer: PublicKey,
  amount: number | string
) {
  const launch_pool = new PublicKey(pool);
  const poolData = await program.account.launchPool.fetch(launch_pool);
  const reusd_mint = new PublicKey(process.env.NEXT_PUBLIC_REUSD_MINT!);

  const [user_pool] = findUserPoolAccount(
    buyer,
    launch_pool,
    poolData.tokenMint,
    program.programId
  );

  const userTokenAccount = await findMintTokenAccount(buyer, reusd_mint);

  // get token account balance
  const accountInfo = await program.provider.connection.getAccountInfo(
    new PublicKey(userTokenAccount)
  );
  if (!accountInfo) {
    throw new Error("You don't have currency token account");
  }
  const { value } = await program.provider.connection.getTokenAccountBalance(
    new PublicKey(userTokenAccount)
  );

  console.log("User balance", value);

  if (!value || (value && new BN(value.amount).eq(new BN(0)))) {
    throw new Error("You don't have enough token to buy");
  }

  const launchPoolTokenAccount = await findMintTokenAccount(
    launch_pool,
    reusd_mint
  );

  console.log(
    `buyer ${buyer.toBase58()} want buy ${amount} token with ReUSD ${reusd_mint} at launch pool ${launch_pool.toBase58()}`
  );
  console.log("--------------------------------------");
  const decimals = new BN(poolData.tokenMintDecimals);
  const amount_value = new BN(amount).mul(new BN(10).pow(decimals));

  const tx = await program.methods
    .buyTokenWithToken(amount_value)
    .accounts({
      launchPool: launch_pool,
      userPool: user_pool,
      userTokenAccount: userTokenAccount,
      launchPoolTokenAccount: launchPoolTokenAccount,
      currencyMint: reusd_mint,
      user: buyer,
      tokenMint: poolData.tokenMint,
      tokenProgram: TOKEN_PROGRAM_ID,
      systemProgram: SystemProgram.programId,
      associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
      rent: SYSVAR_RENT_PUBKEY,
    })
    .rpc();

  console.log("Buy with ReUSD in tx: ", "\n", getExplorerUrl(tx));

  const data = await program.account.userPool.fetch(user_pool);
  console.log("User pool account: ", data.amount.toNumber());
  console.log("********************************");
  return {
    tx,
  };
}

export async function buyWithRenecAndWhitelist(
  program: Program<RenextProgram>,
  pool: PublicKey,
  buyer: PublicKey,
  amount: number | string
) {
  const launch_pool = new PublicKey(pool);
  const poolData = await program.account.launchPool.fetch(launch_pool);

  const [user_pool] = findUserPoolAccount(
    buyer,
    launch_pool,
    poolData.tokenMint,
    program.programId
  );

  const [vault] = findVaultAccount(
    launch_pool,
    poolData.authority,
    program.programId
  );
  const [whitelist] = findWhitelistAccount(launch_pool, program.programId);

  const wl_data = await program.account.whitelist.fetch(whitelist);
  if (!wl_data || wl_data.wallets.length === 0) {
    return Promise.reject(new Error("Whitelist is empty"));
  }

  if (!wl_data.wallets.map((w) => w.toBase58()).includes(buyer.toBase58())) {
    return Promise.reject(new Error("You are not in whitelist"));
  }

  console.log(
    `buyer ${buyer.toBase58()} want buy ${amount} token with renec at launch pool ${launch_pool.toBase58()}`
  );
  console.log("--------------------------------------");
  const decimals = new BN(poolData.tokenMintDecimals);
  const amount_value = new BN(amount).mul(new BN(10).pow(decimals));

  const tx = await program.methods
    .buyTokenWithNativeWhitelist(amount_value)
    .accounts({
      launchPool: launch_pool,
      userPool: user_pool,
      user: buyer,
      vault,
      whitelist,
      tokenMint: poolData.tokenMint,
      tokenProgram: TOKEN_PROGRAM_ID,
      systemProgram: SystemProgram.programId,
      rent: SYSVAR_RENT_PUBKEY,
    })
    .rpc();

  console.log("Buy with renec in tx: ", "\n", getExplorerUrl(tx));

  const data = await program.account.userPool.fetch(user_pool);
  console.log("User pool account: ", data.amount.toNumber());
  console.log("********************************");

  return {
    tx,
  };
}

export async function buyWithReUSDAnWhitelist(
  program: Program<RenextProgram>,
  pool: PublicKey,
  buyer: PublicKey,
  amount: number | string
) {
  const launch_pool = new PublicKey(pool);
  const poolData = await program.account.launchPool.fetch(launch_pool);
  const reusd_mint = new PublicKey(process.env.NEXT_PUBLIC_REUSD_MINT!);
  const [user_pool] = findUserPoolAccount(
    buyer,
    launch_pool,
    poolData.tokenMint,
    program.programId
  );

  const userTokenAccount = await findMintTokenAccount(buyer, reusd_mint);

  const launchPoolTokenAccount = await findMintTokenAccount(
    launch_pool,
    reusd_mint
  );

  const [whitelist] = findWhitelistAccount(launch_pool, program.programId);

  const wl_data = await program.account.whitelist.fetch(whitelist);
  if (!wl_data || wl_data.wallets.length === 0) {
    return Promise.reject(new Error("Whitelist is empty"));
  }

  if (!wl_data.wallets.map((w) => w.toBase58()).includes(buyer.toBase58())) {
    return Promise.reject(new Error("You are not in whitelist"));
  }

  console.log(
    `buyer ${buyer.toBase58()} want buy ${amount} token with ReUSD ${reusd_mint} at launch pool ${launch_pool.toBase58()}`
  );
  console.log("--------------------------------------");
  const decimals = new BN(poolData.tokenMintDecimals);
  const amount_value = new BN(amount).mul(new BN(10).pow(decimals));

  const tx = await program.methods
    .buyTokenWithTokenWhitelist(amount_value)
    .accounts({
      launchPool: launch_pool,
      userPool: user_pool,
      userTokenAccount: userTokenAccount,
      launchPoolTokenAccount: launchPoolTokenAccount,
      whitelist,
      currencyMint: reusd_mint,
      user: buyer,
      tokenMint: poolData.tokenMint,
      tokenProgram: TOKEN_PROGRAM_ID,
      systemProgram: SystemProgram.programId,
      associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
      rent: SYSVAR_RENT_PUBKEY,
    })
    .rpc();

  console.log("Buy with ReUSD in tx: ", "\n", getExplorerUrl(tx));

  const data = await program.account.userPool.fetch(user_pool);
  console.log("User pool account: ", data.amount.toNumber());
  console.log("********************************");
  return {
    tx,
  };
}

export async function completeLaunchPool(
  program: Program<RenextProgram>,
  launch_pool: PublicKey,
  creator: PublicKey
) {
  const poolData = await program.account.launchPool.fetch(launch_pool);

  console.log(
    `launch pool ${launch_pool.toBase58()} run to completed by ${creator.toBase58()} with mint ${poolData.tokenMint.toBase58()}`
  );
  console.log("--------------------------------------");
  const tx = await program.methods
    .completeLaunchPool()
    .accounts({
      launchPool: launch_pool,
      authority: creator,
      tokenMint: poolData.tokenMint,
    })
    .rpc();

  console.log("Complete launch pool in tx:", "\n", getExplorerUrl(tx));
  console.log("********************************");

  return {
    tx,
  };
}

export async function claimToken(
  program: Program<RenextProgram>,
  pool: PublicKey,
  buyer: PublicKey
) {
  const launch_pool = new PublicKey(pool);
  const poolData = await program.account.launchPool.fetch(launch_pool);

  const [treasurer] = findTreasurerAccount(
    launch_pool,
    poolData.tokenMint,
    program.programId
  );
  const treasury = await findMintTokenAccount(treasurer, poolData.tokenMint);
  const [user_pool] = findUserPoolAccount(
    buyer,
    launch_pool,
    poolData.tokenMint,
    program.programId
  );

  const userTokenAccount = await findMintTokenAccount(
    buyer,
    poolData.tokenMint
  );

  const data = await program.account.userPool.fetch(user_pool);
  console.log("User pool account: ", data.amount.toNumber());
  console.log("user payed: ", data.currencyAmount.toNumber());

  console.log(
    `buyer ${buyer.toBase58()} want claim ${data.amount.toNumber()} token ${poolData.tokenMint.toBase58()} at launch pool ${launch_pool.toBase58()}`
  );
  console.log("--------------------------------------");

  const tx = await program.methods
    .claimToken()
    .accounts({
      launchPool: launch_pool,
      userPool: user_pool,
      treasurer,
      treasury,
      user: buyer,
      userTokenAccount,
      tokenMint: poolData.tokenMint,
      tokenProgram: TOKEN_PROGRAM_ID,
      associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
      systemProgram: SystemProgram.programId,
      rent: SYSVAR_RENT_PUBKEY,
    })
    .rpc();

  console.log("Claim token in tx: ", "\n", getExplorerUrl(tx));
  console.log("********************************");

  return {
    tx,
  };
}

export async function withdrawNativePool(
  program: Program<RenextProgram>,
  launch_pool: PublicKey,
  creator: PublicKey,
  beneficiary: PublicKey
) {
  const poolData = await program.account.launchPool.fetch(launch_pool);
  const [vault] = findVaultAccount(launch_pool, creator, program.programId);

  const accountInfo = await program.provider.connection.getAccountInfo(vault);

  if (!accountInfo || (accountInfo && accountInfo.lamports === 0)) {
    throw new Error("You already withdraw all token from this pool");
  }

  console.log(
    `User ${program.provider?.publicKey?.toBase58()} want withdraw ${accountInfo && accountInfo.lamports / LAMPORTS_PER_SOL
    } RENEC of launch pool ${launch_pool.toBase58()} with mint ${poolData.tokenMint.toBase58()} from vault ${vault.toBase58()} to beneficiary ${beneficiary.toBase58()}`
  );
  console.log("--------------------------------------");
  const tx = await program.methods
    .withdrawNative()
    .accounts({
      launchPool: launch_pool,
      vault,
      authority: creator,
      beneficiary,
      tokenMint: poolData.tokenMint,
      tokenProgram: TOKEN_PROGRAM_ID,
      systemProgram: SystemProgram.programId,
    })
    .rpc();

  console.log("Withdraw native in tx: ", "\n", getExplorerUrl(tx));
  console.log("********************************");
  return {
    tx,
  };
}

export async function withdrawTokenPool(
  program: Program<RenextProgram>,
  launch_pool: PublicKey,
  creator: PublicKey,
  beneficiary: PublicKey
) {
  const poolData = await program.account.launchPool.fetch(launch_pool);
  const REUSD_MINT = new PublicKey(process.env.NEXT_PUBLIC_REUSD_MINT!);
  const launchPoolTokenAccount = await findMintTokenAccount(
    launch_pool,
    REUSD_MINT
  );

  const { value } =
    await await program.provider.connection.getTokenAccountBalance(
      launchPoolTokenAccount
    );

  if (!value || (value && new BN(value.amount).eq(new BN(0)))) {
    throw new Error("You already withdraw all token from this pool");
  }

  const beneficiaryTokenAccount = await findMintTokenAccount(
    beneficiary,
    REUSD_MINT
  );

  console.log(
    `User ${program.provider?.publicKey?.toBase58()} want withdraw ${value.uiAmountString
    } ReUSD of launch pool ${launch_pool.toBase58()} with mint ${poolData.tokenMint.toBase58()} from vault ${launchPoolTokenAccount.toBase58()} to beneficiary ${beneficiary.toBase58()}`
  );
  console.log("--------------------------------------");
  const tx = await program.methods
    .withdrawToken()
    .accounts({
      launchPool: launch_pool,
      launchPoolTokenAccount,
      userTokenAccount: beneficiaryTokenAccount,
      authority: creator,
      beneficiary,
      currencyMint: REUSD_MINT,
      tokenProgram: TOKEN_PROGRAM_ID,
      systemProgram: SystemProgram.programId,
      associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
      rent: SYSVAR_RENT_PUBKEY,
    })
    .rpc();

  console.log("Withdraw native in tx: ", "\n", getExplorerUrl(tx));
  console.log("********************************");
  return {
    tx,
  };
}

export async function updateVestingPlan(
  program: Program<RenextProgram>,
  creator: PublicKey,
  launch_pool: PublicKey,
  schedules: {
    releaseTime: BN;
    amount: BN;
  }[]
) {
  const [vesting_plan] = findVestingPlanAccount(launch_pool, program.programId);

  console.log("--------------------------------------");

  const tx = await program.methods
    .setVestingPlan(schedules.length, schedules)
    .accounts({
      vestingPlan: vesting_plan,
      launchPool: launch_pool,
      authority: creator,
      systemProgram: SystemProgram.programId,
      rent: SYSVAR_RENT_PUBKEY,
    })

    .rpc();

  console.log("Update vesting plan in tx: ", "\n", getExplorerUrl(tx));
  console.log("********************************");
}
