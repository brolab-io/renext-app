"use client";
import { createContext, useState } from "react";

const ModalContext = createContext({
  shareModalVisibility: false,
  shareModalHandle: (e: { preventDefault: () => void }) => {},
  walletModalHandle: () => {},
  walletModalvisibility: false,
});

const ModalProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [shareModalVisibility, setShareModalvisibility] = useState(false);
  const [walletModalvisibility, setModalvisibility] = useState(false);
  const shareModalHandle = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setShareModalvisibility(!shareModalVisibility);
  };

  const walletModalHandle = () => {
    setModalvisibility(!walletModalvisibility);
  };

  return (
    <ModalContext.Provider
      value={{
        shareModalVisibility,
        shareModalHandle,
        walletModalHandle,
        walletModalvisibility,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
