"use client";

import PageHeader from "@/components/Project/ProjectHeader";
import { formatPublicKey } from "@/utils/format.util";
import { useAnchorWallet } from "@solana/wallet-adapter-react";

type Props = {
  publicKey: string;
};

const UserPageHeader: React.FC<Props> = ({ publicKey }) => {
  const wallet = useAnchorWallet();

  return (
    <PageHeader
      currentPage="USER"
      pageTitle={
        publicKey === wallet?.publicKey?.toBase58()
          ? "MY PROFILE"
          : `${formatPublicKey(publicKey)}'s PROFILE`
      }
    />
  );
};

export default UserPageHeader;
