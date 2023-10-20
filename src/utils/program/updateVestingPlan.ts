import { RenextProgram } from "@/artifacts/renext_program";
import { BN, Program } from "@project-serum/anchor";
import { PublicKey, SYSVAR_RENT_PUBKEY, SystemProgram } from "@solana/web3.js";
import { findVestingPlanAccount } from "../account.util";

export default async function updateVestingPlan(
  program: Program<RenextProgram>,
  creator: PublicKey,
  launch_pool: PublicKey,
  schedules: {
    releaseTime: BN;
    amount: BN;
  }[]
) {
  const [vesting_plan] = findVestingPlanAccount(launch_pool, program.programId);

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

  return { tx };
}
