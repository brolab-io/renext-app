import { RenextProgram } from "@/artifacts/renext_program";
import { Program } from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";

export default async function completeLaunchPool(
  program: Program<RenextProgram>,
  launch_pool: PublicKey,
  creator: PublicKey
) {
  const poolData = await program.account.launchPool.fetch(launch_pool);

  const tx = await program.methods
    .completeLaunchPool()
    .accounts({
      launchPool: launch_pool,
      authority: creator,
      tokenMint: poolData.tokenMint,
    })
    .rpc();

  return {
    tx,
  };
}
