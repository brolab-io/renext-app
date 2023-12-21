import { RenextProgram } from "@/artifacts/renext_program";
import { Program } from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";
import { findMintTokenAccount, findTreasurerAccount } from "../account.util";
import { ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID } from "@solana/spl-token";

export async function collectRemainToken(
    program: Program<RenextProgram>,
    pool: PublicKey,
    creator: PublicKey
) {
    const launch_pool = new PublicKey(pool);
    const poolData = await program.account.launchPool.fetch(launch_pool);

    const [treasurer] = findTreasurerAccount(launch_pool, poolData.tokenMint, program.programId);
    const treasury = await findMintTokenAccount(treasurer, poolData.tokenMint);
    const des_token_account = await findMintTokenAccount(
        creator,
        poolData.tokenMint
    );

    const tx = await program.methods.collectRemainToken(

    ).accounts({
        launchPool: launch_pool,
        treasurer,
        treasury,
        tokenMint: poolData.tokenMint,
        desTokenAccount: des_token_account,
        authority: creator,
        tokenProgram: TOKEN_PROGRAM_ID,
        associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
    }).rpc();

    return {
        tx,
    };

}