import { useRef } from "react";
import { toast } from "react-toastify";
import { useDemonAdapter } from "../useDemonAdapter";
import { useProgram } from "../useProgram";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PublicKey } from "@solana/web3.js";
import { CAMPAIGN_TYPE_POOL, startLaunchPool, startLaunchPoolWithWhitelist } from "@/utils/program";
import { getProgramErrorMessage } from "@/utils/format.util";
import TxSubmitted from "@/components/TxSubmitted";
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
        return await startLaunchPool(program, wallet.publicKey, launch_pool);
      } else {
        if (!wallets) return Promise.reject(new Error("Please add whitelist"));

        const _wallets = wallets?.map((w) => new PublicKey(w));

        return await startLaunchPoolWithWhitelist(
          program,
          wallet.publicKey,
          launch_pool,
          _wallets,
          _wallets.length
        );
      }
    },
    {
      onSuccess: ({ tx }) => {
        toast.update(toastRef.current!, {
          render: <TxSubmitted message="Launch pool started successfully" txHash={tx} />,
          type: "success",
          autoClose: 10000,
          isLoading: false,
        });
        queryClient.invalidateQueries(["launchpools", launch_pool_pda]);
      },
      onError: (error) => {
        toast.update(toastRef.current!, {
          render: getProgramErrorMessage(error),
          type: "error",
          autoClose: 10000,
          isLoading: false,
        });
      },
    }
  );
};

export default useStartPool;
