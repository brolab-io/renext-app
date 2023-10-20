import { RenextProgram } from "@/artifacts/renext_program";
import { Program } from "@project-serum/anchor";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { PublicKey, SYSVAR_RENT_PUBKEY, SystemProgram } from "@solana/web3.js";
import { findMintTokenAccount, findTreasurerAccount } from "../account.util";

export default async function startLaunchPool(
  program: Program<RenextProgram>,
  creator: PublicKey,
  pool: PublicKey
) {
  const launch_pool = new PublicKey(pool);
  const poolData = await program.account.launchPool.fetch(launch_pool);
  const mint = new PublicKey(poolData.tokenMint);
  const source_token_account = await findMintTokenAccount(creator, mint);
  const [treasurer] = findTreasurerAccount(launch_pool, mint, program.programId);
  const treasury = await findMintTokenAccount(treasurer, mint);

  if (!poolData.poolType.fairLaunch) {
    throw new Error("Invalid pool type, only fair launch is supported");
  }

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
  return {
    tx,
  };
}
