import { useAnchorWallet, useConnection, useWallet } from "@solana/wallet-adapter-react";

export const useDemonAdapter = () => {
    const walletContext = useWallet();
    const anchorWallet = useAnchorWallet();
    const connectionContext = useConnection();
    return {
        walletContext,
        anchorWallet,
        connectionContext,
    };
};