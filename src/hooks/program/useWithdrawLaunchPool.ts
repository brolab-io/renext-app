import { getProgramErrorMessage } from "@/utils/format.util";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useRef } from "react";
import { toast } from "react-toastify";
import { useProgram } from "../useProgram";
import { useDemonAdapter } from "../useDemonAdapter";
import { PublicKey } from "@solana/web3.js";
import { withdrawNativePool, withdrawTokenPool } from "@/utils/program";

const useWithdrawLaunchPool = (launch_pool_pda: string, currency: string) => {
  const toastRef = useRef<ReturnType<typeof toast>>();

  const { anchorWallet: wallet } = useDemonAdapter();

  const { program } = useProgram();
  const queryClient = useQueryClient();

  return useMutation(
    ["withdrawLaunchPool", wallet?.publicKey.toBase58() || ""],
    async () => {
      if (!wallet?.publicKey) {
        return Promise.reject(new Error("Please connect your wallet"));
      }
      if (!program) {
        return Promise.reject(new Error("Program has not been initialized"));
      }
      toastRef.current = toast.loading("Withdraw launch pool...");
      if (currency.toUpperCase() === "REUSD") {
        const { tx } = await withdrawTokenPool(
          program,
          new PublicKey(launch_pool_pda),
          wallet.publicKey,
          wallet.publicKey
        );
        return {
          tx,
        };
      }
      if (currency.toUpperCase() === "RENEC") {
        const { tx } = await withdrawNativePool(
          program,
          new PublicKey(launch_pool_pda),
          wallet.publicKey,
          wallet.publicKey
        );
        return {
          tx,
        };
      }
      return Promise.reject(new Error("Invalid currency"));
    },
    {
      onSuccess: () => {
        toast.update(toastRef.current!, {
          render: "Launch pool withdraw success",
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

export default useWithdrawLaunchPool;
