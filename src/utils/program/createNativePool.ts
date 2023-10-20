import { RenextProgram } from "@/artifacts/renext_program";
import { Program } from "@project-serum/anchor";
import { PublicKey, SYSVAR_RENT_PUBKEY, SystemProgram } from "@solana/web3.js";
import { ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { BN } from "bn.js";
import dayjs from "dayjs";
import { findLaunchPoolAccount, findMintTokenAccount, findTreasurerAccount } from "../account.util";
import { createLaunchPad } from "@/services/launchpad.service";

export default async function createNativePool(
  program: Program<RenextProgram>,
  creator: PublicKey,
  payload: any
) {
  const mint = new PublicKey(payload.token_address);
  // Check token_unlock_date is valid
  if (dayjs(payload.token_unlock_date).isBefore(dayjs())) {
    return Promise.reject(new Error("Token unlock date must be greater than current date"));
  }
  const unlock_date = new BN(dayjs(payload.token_unlock_date).unix());
  const decimals = new BN(payload.token_decimals || 9);
  const rate = new BN(payload.presale_rate); //new BN("1").mul(new BN(10000)).div(new BN(payload.presale_rate));
  const pool_size = new BN(payload.token_sale_amount).mul(new BN(10).pow(new BN(decimals)));
  const minimum_token_amount = new BN(payload.minimum_token_amount).mul(new BN(10).pow(decimals));
  const maximum_token_amount = new BN(payload.maximum_token_amount).mul(new BN(10).pow(decimals));

  const isWhitelist = payload.campaign_type === "whitelist";

  const [launch_pool] = findLaunchPoolAccount(creator, mint, program.programId);

  const [treasurer] = findTreasurerAccount(launch_pool, mint, program.programId);
  const treasury = await findMintTokenAccount(treasurer, mint);

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
