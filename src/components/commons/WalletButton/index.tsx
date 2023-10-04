"use client";

import React, { PropsWithChildren } from "react";
import dynamic from "next/dynamic";

type Props = {} & PropsWithChildren<{}> & React.ButtonHTMLAttributes<HTMLButtonElement>;
const DemonWalletConnect = dynamic(
  async () => (await import("@renec-foundation/wallet-adapter-react")).WalletMultiButton,
  { ssr: false }
);
const ConnectWalletButton: React.FC<Props> = ({ children, className, ...props }) => {
  return <DemonWalletConnect />;
};

export default ConnectWalletButton;
