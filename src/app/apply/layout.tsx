"use client";
import React, { PropsWithChildren } from "react";
import ApplyHeaderStyleWrapper from "@/components/Apply/ApplyHeader";
import Provider from "./provider";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider>
      <ApplyHeaderStyleWrapper currentPage="APPLY YOUR PROJECT" />
      {children}
    </Provider>
  );
};

export default Layout;
