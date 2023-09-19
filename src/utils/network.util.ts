
import { DemonWindow } from "@/lib/WalletAdapter";
import { PublicKey } from "@solana/web3.js";
export const MAINNET_RPC_URL = 'https://api-mainnet-beta.renec.foundation:8899'
export const MAINNET_WSS_URL = 'wss://api-mainnet-beta.renec.foundation:8900'
export const TESTNET_RPC_URL = 'https://api-testnet.renec.foundation:8899'
export const TESTNET_WSS_URL = 'wss://api-testnet.renec.foundation:8900'
export const EXPLORER_URL = 'https://explorer.renec.foundation'

export const getExplorerUrl = (txHash: string | undefined) => {
    if (!txHash) return '#';
    return `https://explorer.renec.foundation/tx/${txHash}?cluster=${process.env.NEXT_PUBLIC_NETWORK}`;
};

export const getExplorerAddressUrl = (address: string | undefined) => {
    if (!address) return '#';
    return `https://explorer.renec.foundation/address/${address}?cluster=${process.env.NEXT_PUBLIC_NETWORK}`;
};


export const getNetworkUrls = (isMainnet: boolean) => isMainnet
    ? { rpc: MAINNET_RPC_URL, wss: MAINNET_WSS_URL }
    : { rpc: TESTNET_RPC_URL, wss: TESTNET_WSS_URL }


export const getDemonWalletUrl = () => {
    // if (isMobileDevice) {
    //     return `https://demon.renec.foundation/#/connect?dapp=${window.location.href}`
    // }
    return "https://chrome.google.com/webstore/detail/demon-wallet/mdjmfdffdcmnoblignmgpommbefadffd"
}

export const handleRedirectIfDemonNotInstalled = () => {
    const url = getDemonWalletUrl()
    window.open(url)
    // if (isIOS) {
    //   window.location.href = url
    // } else {
    //   window.open(url)
    // }
}


export const openNewWindowWithCallback = (url: string, callback?: () => void) => {
    let width = window.innerWidth * 3 / 4
    if (width < 1028) width = 1028
    const height = window.innerHeight * 4 / 5
    const left = window.screenX + (window.innerWidth - width) / 2
    const top = window.screenY + (window.innerHeight - height) / 2
    window.open(url, '_blank', `width=${width},height=${height},left=${left},top=${top}`)
    window.addEventListener('focus', () => {
        console.log('original window has been focused.')
        callback?.()
    })
}

export const isValidPublicKey = (address: string) => {
    console.log("address", address);
    try {
        // Attempt to create a PublicKey instance from the address
        new PublicKey(address);
        return true; // The address is valid
    } catch (error) {
        return false; // The address is not valid
    }
}
declare const window: DemonWindow;

export const isDemonWalletDetected = () => window.demon?.sol