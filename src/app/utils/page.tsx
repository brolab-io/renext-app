"use client";
import { useDemonAdapter } from "@/hooks/useDemonAdapter";
import { BN, web3 } from "@project-serum/anchor";
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  MintLayout,
  TOKEN_PROGRAM_ID,
  Token,
} from "@solana/spl-token";
import { useWallet } from "@solana/wallet-adapter-react";
import { Keypair, PublicKey, SystemProgram } from "@solana/web3.js";
import { useState } from "react";
import { toast } from "react-toastify";

const UtilPage = () => {
  const {
    connectionContext: { connection },
  } = useDemonAdapter();
  const [decimals, setDecimals] = useState<number>(9);
  const [amount, setAmount] = useState<number>(1000000);
  const [mint, setMint] = useState<PublicKey | null>(null);
  const [token, setToken] = useState<string>(
    process.env.NEXT_PUBLIC_REUSD_MINT || ""
  );
  const [ata, setATA] = useState<string>("");
  const { publicKey, sendTransaction } = useWallet();
  const createTokenMint = async () => {
    if (!publicKey) return;

    console.log({ decimals, amount });

    const quantity = new BN(amount.toString()).mul(
      new BN(10).pow(new BN(decimals.toString()))
    );

    if (quantity.toString().length > 20)
      return toast.error("Quantity too large");
    console.log(quantity.toString());
    const mint_account = Keypair.generate();

    toast.promise(
      new Promise(async (resolve, reject) => {
        const mint_rent = await Token.getMinBalanceRentForExemptMint(
          connection
        );
        const createMintAccountInstruction = await SystemProgram.createAccount({
          fromPubkey: publicKey,
          newAccountPubkey: mint_account.publicKey,
          space: MintLayout.span,
          lamports: mint_rent,
          programId: TOKEN_PROGRAM_ID,
        });

        const createMintInstruction = Token.createInitMintInstruction(
          TOKEN_PROGRAM_ID,
          mint_account.publicKey,
          decimals,
          publicKey,
          publicKey
        );

        const associatedTokenAccount = await Token.getAssociatedTokenAddress(
          ASSOCIATED_TOKEN_PROGRAM_ID,
          TOKEN_PROGRAM_ID,
          mint_account.publicKey,
          publicKey
        );

        const createATAInstruction =
          Token.createAssociatedTokenAccountInstruction(
            ASSOCIATED_TOKEN_PROGRAM_ID,
            TOKEN_PROGRAM_ID,
            mint_account.publicKey,
            associatedTokenAccount,
            publicKey,
            publicKey
          );

        const mintInstruction = Token.createMintToInstruction(
          TOKEN_PROGRAM_ID,
          mint_account.publicKey,
          associatedTokenAccount,
          publicKey,
          [],
          Number(quantity)
        );
        const recentBlockhash = await connection.getLatestBlockhash();

        const transaction = new web3.Transaction().add(
          createMintAccountInstruction,
          createMintInstruction,
          createATAInstruction,
          mintInstruction
        );

        transaction.recentBlockhash = recentBlockhash.blockhash;
        transaction.feePayer = publicKey;

        const signature = await sendTransaction(transaction, connection, {
          signers: [mint_account],
        });

        const tx = await connection.confirmTransaction(signature, "confirmed");
        setMint(mint_account.publicKey);
        resolve(tx);
      }),
      {
        pending: "Creating Token Mint",
        success: "Token Mint Created",
        error: "Error Creating Token Mint",
      }
    );
  };

  const transferToken = async () => {
    if (!publicKey || !ata) return;

    toast.promise(
      new Promise(async (resolve, reject) => {
        const sourceATA = await Token.getAssociatedTokenAddress(
          ASSOCIATED_TOKEN_PROGRAM_ID,
          TOKEN_PROGRAM_ID,
          new PublicKey(token),
          publicKey
        );

        const destATA = await Token.getAssociatedTokenAddress(
          ASSOCIATED_TOKEN_PROGRAM_ID,
          TOKEN_PROGRAM_ID,
          new PublicKey(token),
          new PublicKey(ata)
        );

        const createATAInstruction =
          await Token.createAssociatedTokenAccountInstruction(
            ASSOCIATED_TOKEN_PROGRAM_ID,
            TOKEN_PROGRAM_ID,
            new PublicKey(token),
            destATA,
            new PublicKey(ata),
            publicKey
          );

        const transferInstruction = Token.createTransferInstruction(
          TOKEN_PROGRAM_ID,
          sourceATA,
          destATA,
          publicKey,
          [],
          Number(
            new BN(amount.toString()).mul(
              new BN(10).pow(new BN(decimals.toString()))
            )
          )
        );

        const recentBlockhash = await connection.getLatestBlockhash();

        let transaction = new web3.Transaction();

        const checkAccount = await connection.getAccountInfo(destATA);
        console.log({ checkAccount });
        if (!checkAccount) {
          transaction.add(createATAInstruction);
        }

        transaction.add(transferInstruction);

        transaction.recentBlockhash = recentBlockhash.blockhash;
        transaction.feePayer = publicKey;

        const signature = await sendTransaction(transaction, connection, {});

        const tx = await connection.confirmTransaction(signature, "confirmed");
        resolve(tx);
      }),
      {
        pending: "Transfering Token",
        success: "Token Transfered",
        error: "Error Transfering Token",
      }
    );
  };

  return (
    <div>
      <h1>Util Page</h1>
      <div className="grid grid-cols-2 gap-5 p-3">
        <input
          className="text-black"
          type="number"
          value={decimals}
          onChange={(e) => setDecimals(parseInt(e.target.value))}
        />
        <input
          className="text-black"
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value))}
        />
        <div>
          <label className="text-white bg-indigo-500">
            {mint ? mint.toBase58() : "No Mint Created"}
          </label>
        </div>
        <div>
          <button
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            onClick={createTokenMint}
          >
            Create Token
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 p-3">
        <div>
          <label htmlFor="">Token mint</label>
          <input
            className="text-black"
            type="string"
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">To wallet</label>
          <input
            className="text-black"
            type="string"
            value={ata}
            onChange={(e) => setATA(e.target.value)}
          />
        </div>

        <div>
          <button
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            onClick={transferToken}
          >
            Transfer
          </button>
        </div>
      </div>
    </div>
  );
};

export default UtilPage;
