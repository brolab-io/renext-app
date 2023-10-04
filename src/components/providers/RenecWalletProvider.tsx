"use client";
import { Provider as WalletProvider } from "@renec-foundation/wallet-adapter-react";
import React, { PropsWithChildren } from "react";

const RenecWalletProvider: React.FC<
  PropsWithChildren & {
    isMainnet?: boolean;
  }
> = ({ children, isMainnet = false }) => {
  return (
    <WalletProvider isMainnet={isMainnet} e2eWalletPrivKey="">
      {children}
    </WalletProvider>
  );
};

export default RenecWalletProvider;
