import { RenextProgram } from "@/artifacts/renext_program";
import { Program } from "@project-serum/anchor";
import { ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { PublicKey, SYSVAR_RENT_PUBKEY, SystemProgram } from "@solana/web3.js";

import {
  findMintTokenAccount,
  findTreasurerAccount,
  findUserPoolAccount,
  findVestingPlanAccount,
} from "../account.util";

export default async function claimTokenVesting(
  program: Program<RenextProgram>,
  pool: PublicKey,
  buyer: PublicKey
) {
  const launch_pool = new PublicKey(pool);
  const poolData = await program.account.launchPool.fetch(launch_pool);
  const [treasurer] = findTreasurerAccount(pool, poolData.tokenMint, program.programId);
  const treasury = await findMintTokenAccount(treasurer, poolData.tokenMint);
  const [vesting_plan] = findVestingPlanAccount(pool, program.programId);
  const [user_pool] = findUserPoolAccount(buyer, pool, poolData.tokenMint, program.programId);

  const userTokenAccount = await findMintTokenAccount(buyer, poolData.tokenMint);

  const tx = await program.methods
    .claimTokenVesting()
    .accounts({
      launchPool: pool,
      userPool: user_pool,
      treasurer,
      treasury,
      user: buyer,
      userTokenAccount,
      tokenMint: poolData.tokenMint,
      vestingPlan: vesting_plan,
      tokenProgram: TOKEN_PROGRAM_ID,
      associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
      systemProgram: SystemProgram.programId,
      rent: SYSVAR_RENT_PUBKEY,
    })

    // .signers([buyer.payer])
    .rpc();

  return {
    tx,
  };
}
