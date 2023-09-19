import { useQuery } from "@tanstack/react-query";
import { useDemonAdapter } from "../useDemonAdapter";
import { useProgramAnonymous } from "../useProgram";
import { PublicKey } from "@solana/web3.js";
import { findUserPoolAccount } from "@/utils/account.util";
const useUserPool = (pool: string, mint: string) => {
    const { anchorWallet: wallet, connectionContext: { connection } } = useDemonAdapter();
    const { program } = useProgramAnonymous();

    return useQuery(
        ["user-pool", pool, wallet?.publicKey],
        async () => {
            const launch_pool = new PublicKey(pool);
            const tokenMint = new PublicKey(mint)
            const [user_pool] = findUserPoolAccount(wallet!.publicKey, launch_pool, tokenMint, program!.programId);
            const accountInfo = await connection.getAccountInfo(user_pool)
            if (!accountInfo) {
                return null;
            }
            const userPoolData = await program.account.userPool.fetch(user_pool);
            return userPoolData;
        },
        {
            enabled: !!program && !!wallet,
        }
    );
};

export default useUserPool;