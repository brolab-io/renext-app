"use client";
import { createContext, useState } from "react";

const ModalContext = createContext({
  shareModalVisibility: false,
  shareModalHandle: (e: { preventDefault: () => void }) => {},
});

const ModalProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [shareModalVisibility, setShareModalvisibility] = useState(false);
  const shareModalHandle = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setShareModalvisibility(!shareModalVisibility);
  };

  return (
    <ModalContext.Provider
      value={{
        shareModalVisibility,
        shareModalHandle,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
