import { getProgramErrorMessage } from "@/utils/format.util";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useRef } from "react";
import { toast } from "react-toastify";
import { useProgram } from "../useProgram";
import { useDemonAdapter } from "../useDemonAdapter";
import { PublicKey } from "@solana/web3.js";
import { withdrawNativePool, withdrawTokenPool } from "@/utils/program";
import TxSubmitted from "@/components/TxSubmitted";

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
        return await withdrawTokenPool(
          program,
          new PublicKey(launch_pool_pda),
          wallet.publicKey,
          wallet.publicKey
        );
      }
      if (currency.toUpperCase() === "RENEC") {
        return await withdrawNativePool(
          program,
          new PublicKey(launch_pool_pda),
          wallet.publicKey,
          wallet.publicKey
        );
      }
      return Promise.reject(new Error("Invalid currency"));
    },
    {
      onSuccess: ({ tx }) => {
        toast.update(toastRef.current!, {
          render: <TxSubmitted message="Withdrawn launch pool successfully" txHash={tx} />,
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

export default useWithdrawLaunchPool;
