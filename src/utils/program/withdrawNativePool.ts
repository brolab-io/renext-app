import { RenextProgram } from "@/artifacts/renext_program";
import { Program } from "@project-serum/anchor";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { PublicKey, SystemProgram } from "@solana/web3.js";
import { findSystemInfoAccount, findVaultAccount } from "../account.util";
export default async function withdrawNativePool(
  program: Program<RenextProgram>,
  launch_pool: PublicKey,
  creator: PublicKey,
  beneficiary: PublicKey
) {
  const poolData = await program.account.launchPool.fetch(launch_pool);
  const [vault] = findVaultAccount(launch_pool, creator, program.programId);
  const [systemInfoAccount,] = findSystemInfoAccount(program.programId);

  const accountInfo = await program.provider.connection.getAccountInfo(vault);
  const systemInfo = await program.account.systemInfo.fetch(systemInfoAccount);

  if (!accountInfo || (accountInfo && accountInfo.lamports === 0)) {
    throw new Error("You already withdraw all token from this pool");
  }

  const tx = await program.methods
    .withdrawNative()
    .accounts({
      launchPool: launch_pool,
      vault,
      authority: creator,
      beneficiary,
      tokenMint: poolData.tokenMint,
      systemInfo: systemInfoAccount,
      feeReceiver: systemInfo.feeReceiver,
      tokenProgram: TOKEN_PROGRAM_ID,
      systemProgram: SystemProgram.programId,
    })
    .rpc();

  return {
    tx,
  };
}
