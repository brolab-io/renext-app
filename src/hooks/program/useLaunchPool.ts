import { useQuery } from "@tanstack/react-query";
import { useProgramAnonymous } from "../useProgram";
import { PublicKey } from "@solana/web3.js";
const useLaunchPool = (pda: string) => {
    const { program } = useProgramAnonymous();

    return useQuery(
        ["launchpools", pda],
        async () => {

            const launchPool = await program!.account.launchPool.fetch(
                new PublicKey(pda)
            );
            return launchPool;
        },
        {
            enabled: !!program,
        }
    );
};

export default useLaunchPool;