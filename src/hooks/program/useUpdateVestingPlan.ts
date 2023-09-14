import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { toast } from "react-toastify";
import { useDemonAdapter } from "../useDemonAdapter";
import { useProgram } from "../useProgram";
import { getProgramErrorMessage } from "@/utils/format.util";
import { PublicKey } from "@solana/web3.js";
import { updateVestingPlan } from "@/utils/program.util";
import { BN } from "bn.js";
import dayjs from "dayjs";

const useUpdateVestingPlan = (launch_pool_pda: string) => {
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
      toastRef.current = toast.loading(
        "Updating vesting plan for launch pool..."
      );
      if (!wallet?.publicKey) {
        return Promise.reject(new Error("Please connect your wallet"));
      }
      if (!program) {
        return Promise.reject(new Error("Program has not been initialized"));
      }
      const launch_pool = new PublicKey(launch_pool_pda);
      const _scheduleTranformed = schedules.map((x) => ({
        amount: new BN(x.amount),
        releaseTime: new BN(dayjs(x.releaseTime).unix()),
      }));
      const tx = await updateVestingPlan(
        program,
        wallet.publicKey,
        launch_pool,
        _scheduleTranformed
      );
      console.log("Update vesting plan in tx: ", tx);
      return {
        tx,
      };
    },
    {
      onSuccess: () => {
        toast.update(toastRef.current!, {
          render: "Vesting plan updated successfully",
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

export default useUpdateVestingPlan;
