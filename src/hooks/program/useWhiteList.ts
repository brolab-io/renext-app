import { useProgramAnonymous } from "@/hooks/useProgram";
import { findWhitelistAccount } from "@/utils/account.util";
import { PublicKey } from "@solana/web3.js";
import { useQuery } from "@tanstack/react-query";
import { useDemonAdapter } from "../useDemonAdapter";

const useWhiteList = (pool: string | PublicKey) => {
    const { program } = useProgramAnonymous();
    const { anchorWallet: wallet, connectionContext: { connection } } = useDemonAdapter();
    return useQuery(
        ["whitelist-pool", pool],
        async () => {
            const [pda] = findWhitelistAccount(new PublicKey(pool), program.programId);
            const accountInfo = await connection.getAccountInfo(pda)
            if (!accountInfo) {
                return null;
            }
            const wl_data = await program.account.whitelist.fetch(new PublicKey(pda));
            return wl_data;
        },
        {
            enabled: !!program,
        }
    );
};

export default useWhiteList;