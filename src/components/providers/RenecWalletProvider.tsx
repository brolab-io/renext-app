"use client";
import { Provider as WalletProvider } from "@renec-foundation/wallet-adapter-react";
import React, { PropsWithChildren } from "react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

const RenecWalletProvider: React.FC<
  PropsWithChildren & {
    isMainnet?: boolean;
  }
> = ({ children, isMainnet = false }) => {
  return (
    <WalletProvider isMainnet={isMainnet} e2eWalletPrivKey="">
      <WalletModalProvider>{children}</WalletModalProvider>
    </WalletProvider>
  );
};

export default RenecWalletProvider;
