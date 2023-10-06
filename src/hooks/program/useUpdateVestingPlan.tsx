import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { toast } from "react-toastify";
import { useDemonAdapter } from "../useDemonAdapter";
import { useProgram } from "../useProgram";
import { getProgramErrorMessage } from "@/utils/format.util";
import { PublicKey } from "@solana/web3.js";
import { updateVestingPlan } from "@/utils/program";
import { BN } from "bn.js";
import dayjs from "dayjs";
import TxSubmitted from "@/components/TxSubmitted";

const useUpdateVestingPlan = (launch_pool_pda: string, decimals: number) => {
  const toastRef = useRef<ReturnType<typeof toast>>();

  const { anchorWallet: wallet } = useDemonAdapter();

  const { program } = useProgram();
  const queryClient = useQueryClient();

  return useMutation(
    ["update-vesting-plan", launch_pool_pda],
    async (
      schedules: {
        amount: string;
        releaseTime: string;
      }[]
    ) => {
      toastRef.current = toast.loading("Updating vesting plan for launch pool...");
      if (!wallet?.publicKey) {
        return Promise.reject(new Error("Please connect your wallet"));
      }
      if (!program) {
        return Promise.reject(new Error("Program has not been initialized"));
      }
      const launch_pool = new PublicKey(launch_pool_pda);
      const _scheduleTranformed = schedules.map((x) => ({
        amount: new BN(x.amount).mul(new BN(10).pow(new BN(decimals))),
        releaseTime: new BN(dayjs(x.releaseTime).unix()),
      }));
      return await updateVestingPlan(program, wallet.publicKey, launch_pool, _scheduleTranformed);
    },
    {
      onSuccess: ({ tx }) => {
        toast.update(toastRef.current!, {
          render: <TxSubmitted message="Vesting plan updated successfully" txHash={tx} />,
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

export default useUpdateVestingPlan;
