"use client";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { DemonWalletAdapter } from "@/lib/WalletAdapter";
import React, { PropsWithChildren, useMemo } from "react";
import { getNetworkUrls } from "@/utils/network.util";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

const RenecWalletProvider: React.FC<
  PropsWithChildren & {
    isMainnet?: boolean;
  }
> = ({ children, isMainnet }) => {
  const wallets = useMemo(() => {
    const supportedWallets = [new DemonWalletAdapter()];
    return supportedWallets;
  }, []);

  const urls = useMemo(() => getNetworkUrls(!!isMainnet), [isMainnet]);

  return (
    <ConnectionProvider
      endpoint={urls.rpc}
      config={{
        wsEndpoint: urls.wss,
        commitment: "confirmed",
      }}
    >
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default RenecWalletProvider;
