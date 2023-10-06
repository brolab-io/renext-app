import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { toast } from "react-toastify";
import { useProgram } from "../useProgram";
import { useDemonAdapter } from "../useDemonAdapter";
import { CURRENCY, createNativePool, createTokenPool } from "@/utils/program";
import { getProgramErrorMessage } from "@/utils/format.util";
import TxSubmitted from "@/components/TxSubmitted";

const useCreateLaunchpad = () => {
  const router = useRouter();
  const toastRef = useRef<ReturnType<typeof toast>>();

  const { anchorWallet: wallet } = useDemonAdapter();
  const { program } = useProgram();

  return useMutation(
    ["createLaunchpad"],
    async (payload: any) => {
      if (!wallet?.publicKey) {
        toast.error("Please connect your wallet");
        return Promise.reject(new Error("Please connect your wallet"));
      }
      if (!program) {
        toast.error("Program not found");
        return Promise.reject(new Error("Program not found"));
      }
      toastRef.current = toast.loading("Creating launchpad...");

      if (payload.currency_address === CURRENCY.RENEC) {
        const { tx, result } = await createNativePool(program, wallet.publicKey, payload);
        return {
          ...result,
          tx,
        };
      } else if (payload.currency_address === CURRENCY.REUSD) {
        const { tx, result } = await createTokenPool(program, wallet.publicKey, payload);
        return {
          ...result,
          tx,
        };
      }

      return Promise.reject(new Error("Launchpad not supported"));
    },
    {
      onSuccess: (result) => {
        toast.update(toastRef.current!, {
          render: <TxSubmitted message="Launchpad created successfully" txHash={result!.tx} />,
          type: "success",
          autoClose: 10000,
          isLoading: false,
        });
        router.push(`/project/${result!.slug || result!.id}`);
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

export default useCreateLaunchpad;
