import { RenextProgram } from "@/artifacts/renext_program";
import { BN, Program } from "@project-serum/anchor";
import { ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { PublicKey, SYSVAR_RENT_PUBKEY, SystemProgram } from "@solana/web3.js";
import { findMintTokenAccount, findUserPoolAccount, findWhitelistAccount } from "../account.util";

export default async function buyWithReUSDAndWhitelist(
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

  const launchPoolTokenAccount = await findMintTokenAccount(launch_pool, reusd_mint);

  const [whitelist] = findWhitelistAccount(launch_pool, program.programId);

  const wl_data = await program.account.whitelist.fetch(whitelist);
  if (!wl_data || wl_data.wallets.length === 0) {
    return Promise.reject(new Error("Whitelist is empty"));
  }

  if (!wl_data.wallets.map((w) => w.toBase58()).includes(buyer.toBase58())) {
    return Promise.reject(new Error("You are not in whitelist"));
  }

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

  return {
    tx,
  };
}
