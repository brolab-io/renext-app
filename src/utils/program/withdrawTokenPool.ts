import { RenextProgram } from "@/artifacts/renext_program";
import { BN, Program } from "@project-serum/anchor";
import { ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { PublicKey, SYSVAR_RENT_PUBKEY, SystemProgram } from "@solana/web3.js";

import { findMintTokenAccount } from "../account.util";

export default async function withdrawTokenPool(
  program: Program<RenextProgram>,
  launch_pool: PublicKey,
  creator: PublicKey,
  beneficiary: PublicKey
) {
  const REUSD_MINT = new PublicKey(process.env.NEXT_PUBLIC_REUSD_MINT!);
  const launchPoolTokenAccount = await findMintTokenAccount(launch_pool, REUSD_MINT);

  const { value } = await await program.provider.connection.getTokenAccountBalance(
    launchPoolTokenAccount
  );

  if (!value || (value && new BN(value.amount).eq(new BN(0)))) {
    throw new Error("You already withdraw all token from this pool");
  }

  const beneficiaryTokenAccount = await findMintTokenAccount(beneficiary, REUSD_MINT);

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

  return {
    tx,
  };
}
