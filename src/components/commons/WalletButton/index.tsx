"use client";

import useBalance from "@/hooks/useBalance";
import { formatPublicKey, formatToken } from "@/utils/format.util";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineContentCopy,
  MdOutlinePublishedWithChanges,
  MdMoneyOff,
} from "react-icons/md";
import { useWallet } from "@solana/wallet-adapter-react";
import React, {
  MouseEventHandler,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from "react";
import Button from "../Button";
import Image from "next/image";
import { useModal } from "@/hooks/useModal";

type Props = {} & PropsWithChildren<{}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const ConnectWalletButton: React.FC<Props> = ({
  children,
  className,
  ...props
}) => {
  const { wallet, connecting, connected, publicKey, disconnect } = useWallet();
  const { data: balance = 0 } = useBalance(publicKey);
  const [copied, setCopied] = useState(false);
  const { walletModalHandle } = useModal();

  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      if (!event.defaultPrevented) {
        walletModalHandle();
      }
    },
    [walletModalHandle]
  );
  const content = useMemo(() => {
    if (children) return children;
    if (connecting) return "Connecting...";
    // if (connected && publicKey) return `${formatPublicKey(publicKey)}`;
    if (wallet) return "Loading...";
    return "Connect";
  }, [children, connecting, wallet]);

  const base58 = useMemo(() => publicKey?.toBase58(), [publicKey]);

  const handleCopy = useCallback(async () => {
    if (base58) {
      await navigator.clipboard.writeText(base58);
      setCopied(true);
      setTimeout(() => setCopied(false), 400);
    }
  }, [base58]);

  const handleChangeWallet = useCallback(() => {
    disconnect();
    walletModalHandle();
  }, [disconnect, walletModalHandle]);

  if (connected && publicKey)
    return (
      <div className="wallet_btn">
        <Image
          src={"/assets/connect.png"}
          alt="icon"
          width={15}
          height={15}
          className="hidden sm:block"
        />
        {formatPublicKey(publicKey, 3)} <MdOutlineKeyboardArrowDown />
        <div className="wallet_token_list">
          <button onClick={handleCopy}>
            <MdOutlineContentCopy /> {copied ? "Copied" : "Copy address"}
          </button>
          <button onClick={handleChangeWallet}>
            <MdOutlinePublishedWithChanges />
            Change wallet
          </button>
          <button onClick={disconnect}>
            <MdMoneyOff />
            Disconnect
          </button>
        </div>
      </div>
    );

  return (
    <Button $sm $variant="white" className="connect_btn" onClick={handleClick}>
      <Image src={"/assets/connect.png"} alt="icon" width={15} height={15} />
      {content}
    </Button>
    // <button
    //   {...props}
    //   onClick={handleClick}
    //   className={clsx(
    //     "px-4 py-2 text-white transition-all duration-500 ease-in-out bg-[#1F1F1F] rounded-2xl hover:bg-[#2F2F2F]",
    //     className
    //   )}
    // >
    //   {content}
    //   {connected && " | "}
    //   {connected && (
    //     <span className="text-[#21D969] mr-2">
    //       {formatToken(balance)} RENEC
    //     </span>
    //   )}
    // </button>
  );

  return <div>{formatToken(balance)} RENEC</div>;
};

export default ConnectWalletButton;
