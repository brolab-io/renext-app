import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDemonAdapter } from "../useDemonAdapter";
import { useProgram } from "../useProgram";
import { useRef } from "react";
import { toast } from "react-toastify";
import { PublicKey } from "@solana/web3.js";
import {
  CAMPAIGN_TYPE_POOL,
  CURRENCY_POOL,
  buyWithReUSD,
  buyWithReUSDAnWhitelist,
  buyWithRenec,
  buyWithRenecAndWhitelist,
} from "@/utils/program.util";
import { BN } from "@project-serum/anchor";
import { getProgramErrorMessage } from "@/utils/format.util";
const useBuyToken = (launch_pool_pda: string) => {
  const toastRef = useRef<ReturnType<typeof toast>>();

  const { anchorWallet: wallet } = useDemonAdapter();

  const { program } = useProgram();
  const queryClient = useQueryClient();

  return useMutation(
    ["buyToken", wallet?.publicKey.toBase58() || "", launch_pool_pda],
    async (amount: string) => {
      if (!wallet?.publicKey) {
        return Promise.reject(new Error("Please connect your wallet"));
      }
      if (!program) {
        return Promise.reject(new Error("Program has not been initialized"));
      }

      toastRef.current = toast.loading("Buying token...");
      const launch_pool = new PublicKey(launch_pool_pda);
      const poolData = await program.account.launchPool.fetch(launch_pool);
      const minCanBuy = poolData.minimumTokenAmount.div(
        new BN(10).pow(new BN(poolData.tokenMintDecimals))
      );
      const maxCanBuy = poolData.maximumTokenAmount.div(
        new BN(10).pow(new BN(poolData.tokenMintDecimals))
      );

      if (new BN(amount).lt(minCanBuy) || new BN(amount).gt(maxCanBuy)) {
        return Promise.reject(new Error(`Amount should be between ${minCanBuy} and ${maxCanBuy}`));
      }

      if (
        CURRENCY_POOL.RENEC in poolData.currency &&
        CAMPAIGN_TYPE_POOL.FairLaunch in poolData.poolType
      ) {
        console.log("renec in FairLaunch");
        const tx = await buyWithRenec(
          program,
          new PublicKey(launch_pool_pda),
          wallet.publicKey,
          amount
        );
        return {
          tx,
        };
      } else if (
        CURRENCY_POOL.REUSD in poolData.currency &&
        CAMPAIGN_TYPE_POOL.FairLaunch in poolData.poolType
      ) {
        console.log("usd in FairLaunch");
        const tx = await buyWithReUSD(
          program,
          new PublicKey(launch_pool_pda),
          wallet.publicKey,
          amount
        );
        return {
          tx,
        };
      } else if (
        CURRENCY_POOL.RENEC in poolData.currency &&
        CAMPAIGN_TYPE_POOL.Whitelist in poolData.poolType
      ) {
        console.log("renec in whitelist");
        const tx = await buyWithRenecAndWhitelist(
          program,
          new PublicKey(launch_pool_pda),
          wallet.publicKey,
          amount
        );
        return {
          tx,
        };
      } else if (
        CURRENCY_POOL.REUSD in poolData.currency &&
        CAMPAIGN_TYPE_POOL.Whitelist in poolData.poolType
      ) {
        console.log("usd in whitelist");
        const tx = await buyWithReUSDAnWhitelist(
          program,
          new PublicKey(launch_pool_pda),
          wallet.publicKey,
          amount
        );

        return {
          tx,
        };
      }
    },
    {
      onSuccess: () => {
        toast.update(toastRef.current!, {
          render: "Token bought successfully",
          type: "success",
          autoClose: 5000,
          isLoading: false,
        });
        queryClient.invalidateQueries(["project", launch_pool_pda]);
        queryClient.invalidateQueries(["user-pool", launch_pool_pda, wallet?.publicKey || ""]);
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

export default useBuyToken;
