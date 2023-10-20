import { RenextProgram } from "@/artifacts/renext_program";
import { BN, Program } from "@project-serum/anchor";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { PublicKey, SYSVAR_RENT_PUBKEY, SystemProgram } from "@solana/web3.js";
import { findUserPoolAccount, findVaultAccount, findWhitelistAccount } from "../account.util";

export default async function buyWithRenecAndWhitelist(
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

  const [vault] = findVaultAccount(launch_pool, poolData.authority, program.programId);
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

  const data = await program.account.userPool.fetch(user_pool);

  return {
    tx,
    data,
  };
}
