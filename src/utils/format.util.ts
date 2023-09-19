import { BN } from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";

export const formatPublicKey = (publicKey: PublicKey | string, len = 5) => {
  const str = typeof publicKey === "string" ? publicKey : publicKey.toBase58();
  return `${str.slice(0, len)}...${str.slice(-5)}`;
};

export const formatNumberToLamport = (num: number | string, decimals = 9) => {
  return new BN(num).mul(new BN(10 ** decimals)).toString();
};

export const formatLamportToNumber = (num: number | string, decimals = 9) => {
  return new BN(num).div(new BN(10 ** decimals)).toNumber() * 1;
};

export const formatToken = (amount: number | string, decimal = 9, decimalsDigits = 2) => {
  // how to amount / lamports = 1.0000000000 using string
  const str: string = new BN(amount)
    .mul(new BN(10 ** decimalsDigits))
    .div(new BN(10 ** decimal))
    .toString();
  // take all as inc and last 2 as dec
  const inc = str.slice(0, -decimalsDigits);
  let dec = str.slice(-decimalsDigits);
  while (dec[dec.length - 1] === "0" && dec.length > 0) {
    dec = dec.slice(0, -1);
  }
  if (dec.length === 0) {
    return inc;
  }
  if (!inc) {
    return `0.${dec}`;
  }
  return `${inc}.${dec}`;
};

export const getProgramErrorMessage = (error: unknown) => {
  if (error instanceof Error && error.message.includes("Error Message")) {
    // Error: AnchorError thrown in programs/renec-renext-program/src/instructions/start_launch_pool.rs:23. Error Code: InvalidAuthority. Error Number: 6002. Error Message: Invalid authority.
    // Extract Error Message
    const errorMessage = error.message.split("Error Message: ")[1];
    // Extract Error Code
    const errorNumber = error.message.split("Error Number: ")[1].split(".")[0];
    if (!errorMessage || !errorNumber) return error.message;
    return `Program Error: ${errorMessage} (Code: ${errorNumber})`;
  }
  return (
    (error as Error).message ||
    "An error occurred while processing the transaction. Please try again later."
  );
};

export const getTokenRate = (rate: number, decimals: number = 9) => {
  const BASE = 10000;
  return ((((1 * rate) / BASE) * 10 ** 9) / 10 ** decimals).toFixed(4).toString();
};

export const parseToken = (valueCanContainDecimals: string | number, decimals: number = 9): BN => {
  if (typeof valueCanContainDecimals === "number") {
    valueCanContainDecimals = valueCanContainDecimals.toString();
  }
  if (typeof decimals === "string") {
    decimals = parseInt(decimals, 10);
  }
  const decimalArray = new Array(decimals).fill("0");
  const decimalIndex = valueCanContainDecimals.indexOf(".");
  if (decimalIndex > -1) {
    if (decimals <= 0) {
      throw new Error("Invalid token input value");
    }
    const [inc, dec] = valueCanContainDecimals.split(".");
    const min = Math.min(dec.length, decimals);
    for (let i = 0; i < min; i++) {
      decimalArray[i] = dec[i];
    }
    return new BN(inc + decimalArray.join(""));
  }
  return new BN(valueCanContainDecimals + decimalArray.join(""));
};
