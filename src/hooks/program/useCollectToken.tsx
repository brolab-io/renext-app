import { getProgramErrorMessage } from "@/utils/format.util";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useRef } from "react";
import { toast } from "react-toastify";
import { useDemonAdapter } from "../useDemonAdapter";
import { useProgram } from "../useProgram";
import { PublicKey } from "@solana/web3.js";
import TxSubmitted from "@/components/TxSubmitted";
import { collectRemainToken } from "@/utils/program/collectToken";

const useCollectToken = (launch_pool_pda: string) => {
  const toastRef = useRef<ReturnType<typeof toast>>();

  const { anchorWallet: wallet } = useDemonAdapter();

  const { program } = useProgram();
  const queryClient = useQueryClient();

  return useMutation(
    ["collectToken", wallet?.publicKey.toBase58() || ""],
    async () => {
      toastRef.current = toast.loading("Claiming tokens...");
      if (!wallet?.publicKey) {
        return Promise.reject(new Error("Please connect your wallet"));
      }
      if (!program) {
        return Promise.reject(new Error("Program has not been initialized"));
      }
      return await collectRemainToken(
        program,
        new PublicKey(launch_pool_pda),
        wallet.publicKey
      );
    },
    {
      onSuccess: ({ tx }) => {
        toast.update(toastRef.current!, {
          render: (
            <TxSubmitted
              message="Collect remain tokens successfully"
              txHash={tx}
            />
          ),
          type: "success",
          autoClose: 10000,
          isLoading: false,
        });
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

export default useCollectToken;
