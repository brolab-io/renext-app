import { useConnection } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { useQuery } from "@tanstack/react-query";

const useBalance = (publicKey: PublicKey | null) => {
    const { connection } = useConnection();
    return useQuery(["balance", publicKey?.toBase58()], async () => {
        if (!publicKey) return 0;

        const balance = await connection.getBalance(publicKey);
        return balance;
    });
};

export default useBalance;