import { useProgramAnonymous } from "@/hooks/useProgram";
import { PublicKey } from "@solana/web3.js";
import { useQuery } from "@tanstack/react-query";

const useWhiteList = (pda: string | PublicKey) => {
    const { program } = useProgramAnonymous();
    return useQuery(
        ["whitelist-pool", pda],
        async () => {
            const wl_data = await program!.account.whitelist.fetch(new PublicKey(pda));
            return wl_data;
        },
        {
            enabled: !!program,
        }
    );
};

export default useWhiteList;