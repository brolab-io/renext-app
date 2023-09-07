import { useRef } from "react";
import { toast } from "react-toastify";
import { useDemonAdapter } from "../useDemonAdapter";
import { useProgram } from "../useProgram";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PublicKey } from "@solana/web3.js";
import { CAMPAIGN_TYPE_POOL, startLaunchPool, startLaunchPoolWithWhitelist } from "@/utils/program.util";
import { getProgramErrorMessage } from "@/utils/format.util";
const useStartPool = (launch_pool_pda: string, wallets?: string[]) => {
    const toastRef = useRef<ReturnType<typeof toast>>();

    const { anchorWallet: wallet } = useDemonAdapter();

    const { program } = useProgram();
    const queryClient = useQueryClient();

    return useMutation(
        ["startPool", launch_pool_pda],
        async (wallets?: string[]) => {
            toastRef.current = toast.loading("Starting launch pool...");
            if (!wallet?.publicKey) {
                return Promise.reject(new Error("Please connect your wallet"));
            }
            if (!program) {
                return Promise.reject(new Error("Program has not been initialized"));
            }
            const launch_pool = new PublicKey(launch_pool_pda);
            const poolData = await program.account.launchPool.fetch(launch_pool);

            if (CAMPAIGN_TYPE_POOL.FairLaunch in poolData.poolType) {

                const tx = await startLaunchPool(
                    program,
                    wallet.publicKey,
                    launch_pool
                );
                console.log("startLaunchPool in tx: ", tx);
                return {
                    tx,
                };
            } else {
                if (!wallets) return Promise.reject(new Error("Please add whitelist"));

                const _wallets = wallets?.map((w) => new PublicKey(w));

                const tx = await startLaunchPoolWithWhitelist(
                    program,
                    wallet.publicKey,
                    launch_pool,
                    _wallets,
                    _wallets.length
                );
                console.log("startLaunchPoolWithWhitelist in tx: ", tx);
                return {
                    tx,
                };
            }
        },
        {
            onSuccess: () => {
                toast.update(toastRef.current!, {
                    render: "Launch Pool started successfully",
                    type: "success",
                    autoClose: 5000,
                    isLoading: false,
                });
                queryClient.invalidateQueries(["launchpools", launch_pool_pda]);
            },
            onError: (error) => {
                toast.update(toastRef.current!, {
                    render: getProgramErrorMessage(error),
                    type: "error",
                    autoClose: 5000,
                    isLoading: false,
                });
            },
        }
    );
};

export default useStartPool;