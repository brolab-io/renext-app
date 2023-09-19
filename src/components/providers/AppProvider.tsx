"use client";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ModalProvider } from "./ModalProvider";
import RenecWalletProvider from "./RenecWalletProvider";
import { ToastContainer } from "react-toastify";

export const queryClient = new QueryClient();

const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RenecWalletProvider isMainnet={process.env.NEXT_PUBLIC_IS_MAINNET === "true"}>
          <ModalProvider>{children}</ModalProvider>
        </RenecWalletProvider>
      </QueryClientProvider>
      <ToastContainer theme="dark" />
    </>
  );
};

export default AppProvider;
