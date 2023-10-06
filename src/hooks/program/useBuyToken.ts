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
  buyWithRenec,
  buyWithRenecAndWhitelist,
  buyWithReUSDAndWhitelist,
} from "@/utils/program";
import { BN } from "@project-serum/anchor";
import { formatToken, getProgramErrorMessage } from "@/utils/format.util";
import { findMintTokenAccount } from "@/utils/account.util";

const useBuyToken = (launch_pool_pda: string) => {
  const toastRef = useRef<ReturnType<typeof toast>>();

  const {
    anchorWallet: wallet,
    connectionContext: { connection },
  } = useDemonAdapter();

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

      // const _price = new BN(10).pow(new BN(9)).div(new BN(poolData.rate))
      const _mustPay = new BN(Number(amount)).mul(new BN(10).pow(new BN(9))).div(poolData.rate);

      if (
        CURRENCY_POOL.RENEC in poolData.currency &&
        CAMPAIGN_TYPE_POOL.FairLaunch in poolData.poolType
      ) {
        const _balance = new BN(await program.provider.connection.getBalance(wallet.publicKey));
        if (_balance.lt(_mustPay)) {
          return Promise.reject(
            new Error(
              `Insufficient balance, you need ${formatToken(_mustPay.toString())} ${Object.keys(
                poolData.currency
              )[0].toUpperCase()} to buy ${amount} token`
            )
          );
        }

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
        const userTokenAccount = await findMintTokenAccount(
          wallet.publicKey,
          new PublicKey(process.env.NEXT_PUBLIC_REUSD_MINT!)
        );

        const { value: usdBalance } = await connection.getTokenAccountBalance(userTokenAccount);
        console.log({ usdBalance });

        if (new BN(usdBalance.amount).lt(_mustPay)) {
          return Promise.reject(
            new Error(
              `Insufficient balance, you need ${formatToken(_mustPay.toString())} ${Object.keys(
                poolData.currency
              )[0].toUpperCase()} to buy ${amount} token`
            )
          );
        }

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
        const _balance = new BN(await program.provider.connection.getBalance(wallet.publicKey));
        if (_balance.lt(_mustPay)) {
          return Promise.reject(
            new Error(
              `Insufficient balance, you need ${formatToken(_mustPay.toString())} ${Object.keys(
                poolData.currency
              )[0].toUpperCase()} to buy ${amount} token`
            )
          );
        }
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
        const userTokenAccount = await findMintTokenAccount(
          wallet.publicKey,
          new PublicKey(process.env.NEXT_PUBLIC_REUSD_MINT!)
        );

        const { value: usdBalance } = await connection.getTokenAccountBalance(userTokenAccount);
        console.log({ usdBalance });

        if (new BN(usdBalance.amount).lt(_mustPay)) {
          return Promise.reject(
            new Error(
              `Insufficient balance, you need ${formatToken(_mustPay.toString())} ${Object.keys(
                poolData.currency
              )[0].toUpperCase()} to buy ${amount} token`
            )
          );
        }

        const tx = await buyWithReUSDAndWhitelist(
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
        queryClient.invalidateQueries(["launchpools", launch_pool_pda]);
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
