"use client";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const UserPage = () => {
  const wallet = useAnchorWallet();
  const router = useRouter();

  useEffect(() => {
    if (wallet) {
      router.replace(`/user/${wallet.publicKey.toBase58()}`);
    }
  }, [router, wallet]);

  return null;
};

export default UserPage;
