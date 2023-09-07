"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ModalProvider } from "./ModalProvider";
import RenecWalletProvider from "./RenecWalletProvider";

export const queryClient = new QueryClient();

const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <RenecWalletProvider
        isMainnet={process.env.NEXT_PUBLIC_IS_MAINNET === "true"}
      >
        <ModalProvider>{children}</ModalProvider>
      </RenecWalletProvider>
    </QueryClientProvider>
  );
};

export default AppProvider;
