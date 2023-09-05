export const getExplorerUrl = (txHash: string | undefined) => {
    if (!txHash) return '#';
    return `https://explorer.renec.foundation/tx/${txHash}?cluster=${process.env.NEXT_PUBLIC_NETWORK}`;
};