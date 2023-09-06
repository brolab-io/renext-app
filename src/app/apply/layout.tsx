"use client";
import React, { PropsWithChildren } from "react";
import ApplyHeaderStyleWrapper from "@/components/Apply/ApplyHeader";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ApplyHeaderStyleWrapper currentPage="APPLY MY PROJECT" />
      {children}
    </>
  );
};

export default Layout;
