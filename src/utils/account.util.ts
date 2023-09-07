import { findProgramAddressSync } from "@project-serum/anchor/dist/cjs/utils/pubkey";
import { PublicKey } from "@solana/web3.js";
import { associatedAddress } from "@project-serum/anchor/dist/cjs/utils/token";



export function findLaunchPoolAccount(creator: PublicKey, mint: PublicKey, programId: PublicKey) {
    return findProgramAddressSync(
        [Buffer.from("launchpool"), creator.toBuffer(), mint.toBuffer()],
        programId
    );

}

export function findTreasurerAccount(pool: PublicKey, mint: PublicKey, programId: PublicKey) {
    return PublicKey.findProgramAddressSync(
        [Buffer.from("treasurer"), pool.toBuffer(), mint.toBuffer()],
        programId
    );

}

export async function findMintTokenAccount(owner: PublicKey, mint: PublicKey) {
    const token_account = await associatedAddress({
        mint,
        owner,
    });
    return token_account;
}

export function findVaultAccount(pool: PublicKey, creator: PublicKey, programId: PublicKey) {
    return PublicKey.findProgramAddressSync(
        [Buffer.from("vault"), pool.toBuffer(), creator.toBuffer()],
        programId
    );

}

export function findWhitelistAccount(pool: PublicKey, programId: PublicKey) {
    return PublicKey.findProgramAddressSync(
        [Buffer.from("whitelist"), pool.toBuffer()],
        programId
    );

}


export function findUserPoolAccount(
    user: PublicKey,
    pool: PublicKey,
    mint: PublicKey,
    programId: PublicKey
) {
    return PublicKey.findProgramAddressSync(
        [
            Buffer.from("userpool"),
            user.toBuffer(),
            pool.toBuffer(),
            mint.toBuffer(),
        ],
        programId
    );

}