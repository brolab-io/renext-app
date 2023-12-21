import { RenextProgram } from "@/artifacts/renext_program";
import { BN, Program } from "@project-serum/anchor";
import { ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { PublicKey, SYSVAR_RENT_PUBKEY, SystemProgram } from "@solana/web3.js";
import { findMintTokenAccount, findUserPoolAccount } from "../account.util";

export default async function buyWithReUSD(
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

  // get token account balance
  const accountInfo = await program.provider.connection.getAccountInfo(
    new PublicKey(userTokenAccount)
  );
  if (!accountInfo) {
    throw new Error("You don't have currency token account");
  }
  const { value } = await program.provider.connection.getTokenAccountBalance(
    new PublicKey(userTokenAccount)
  );

  console.log("User balance", value);

  if (!value || (value && new BN(value.amount).eq(new BN(0)))) {
    throw new Error("You don't have enough token to buy");
  }

  const launchPoolTokenAccount = await findMintTokenAccount(launch_pool, reusd_mint);

  const decimals = new BN(poolData.tokenMintDecimals);
  const amount_value = new BN(amount).mul(new BN(10).pow(decimals));

  const tx = await program.methods
    .buyTokenWithToken(amount_value)
    .accounts({
      launchPool: launch_pool,
      userPool: user_pool,
      userTokenAccount: userTokenAccount,
      launchPoolTokenAccount: launchPoolTokenAccount,
      currencyMint: reusd_mint,
      user: buyer,
      tokenMint: poolData.tokenMint,
      tokenProgram: TOKEN_PROGRAM_ID,
      systemProgram: SystemProgram.programId,
      rent: SYSVAR_RENT_PUBKEY,
    })
    .rpc();

  return {
    tx,
  };
}
