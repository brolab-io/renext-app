import { RenextProgram } from "@/artifacts/renext_program";
import { BN, Program } from "@project-serum/anchor";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { PublicKey, SYSVAR_RENT_PUBKEY, SystemProgram } from "@solana/web3.js";
import { findUserPoolAccount, findVaultAccount } from "../account.util";

export default async function buyWithRenec(
  program: Program<RenextProgram>,
  pool: PublicKey,
  buyer: PublicKey,
  amount: number | string
) {
  const launch_pool = new PublicKey(pool);
  const poolData = await program.account.launchPool.fetch(launch_pool);
  const mint = new PublicKey(poolData.tokenMint);
  const [user_pool] = findUserPoolAccount(buyer, launch_pool, mint, program.programId);

  const [vault] = findVaultAccount(launch_pool, poolData.authority, program.programId);

  const tx = await program.methods
    .buyTokenWithNative(new BN(amount).mul(new BN(10).pow(new BN(poolData.tokenMintDecimals))))
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

  const data = await program.account.userPool.fetch(user_pool);

  return {
    tx,
  };
}
