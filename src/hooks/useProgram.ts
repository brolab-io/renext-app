import { Keypair, PublicKey, Transaction, Connection } from "@solana/web3.js";
import { useCallback, useEffect, useMemo, useState } from "react";
import * as anchor from "@project-serum/anchor";
import idl from "@/artifacts/renext_program.json";
import { useDemonAdapter } from "./useDemonAdapter";
import { RenextProgram } from "@/artifacts/renext_program";
import { AnchorWallet } from "@renec-foundation/wallet-adapter-react";
export interface Wallet {
  signTransaction(tx: anchor.web3.Transaction): Promise<anchor.web3.Transaction>;
  signAllTransactions(txs: anchor.web3.Transaction[]): Promise<anchor.web3.Transaction[]>;
  publicKey: anchor.web3.PublicKey;
}

class MyWallet implements Wallet {
  constructor(readonly payer: Keypair) {
    this.payer = payer;
  }

  async signTransaction(tx: Transaction): Promise<Transaction> {
    tx.partialSign(this.payer);
    return tx;
  }

  async signAllTransactions(txs: Transaction[]): Promise<Transaction[]> {
    return txs.map((t) => {
      t.partialSign(this.payer);
      return t;
    });
  }

  get publicKey(): PublicKey {
    return this.payer.publicKey;
  }
}

export const useProgramAnonymous = () => {
  const {
    connectionContext: { connection },
  } = useDemonAdapter();
  const programID = process.env.NEXT_PUBLIC_RENEC_PROGRAM_ID!;

  return useMemo(() => {
    const fakeWallet = anchor.web3.Keypair.generate();
    const _wallet = new MyWallet(fakeWallet);
    const provider = new anchor.AnchorProvider(connection, _wallet, {
      preflightCommitment: "confirmed",
      commitment: "confirmed",
    });
    return {
      program: new anchor.Program(idl as unknown as RenextProgram, programID, provider),
    };
  }, [connection, programID]);
};

export const useProgram = () => {
  const [program, setProgram] = useState<anchor.Program<RenextProgram>>();
  const {
    anchorWallet,
    connectionContext: { connection },
  } = useDemonAdapter();
  const programID = process.env.NEXT_PUBLIC_RENEC_PROGRAM_ID!;

  const updateProgram = useCallback(() => {
    if (!connection) return;
    if (!anchorWallet) return;
    const provider = new anchor.AnchorProvider(connection, anchorWallet, {
      preflightCommitment: "confirmed",
      commitment: "confirmed",
    });

    const program = new anchor.Program(idl as unknown as RenextProgram, programID, provider);

    setProgram(program);
  }, [anchorWallet, connection, programID]);

  useEffect(() => {
    updateProgram();
  }, [connection, updateProgram]);

  return useMemo(
    () => ({
      program,
    }),
    [program]
  );
};
