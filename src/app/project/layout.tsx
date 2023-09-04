"use client";
import Footer from "@/components/Footer";

import ProjectDetailHeader from "@/components/ProjectDetail/ProjectDetailHeader";
import ShareModal from "@/components/commons/Modal/ShareModal";
import { useModal } from "@/hooks/useModal";
import React, { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const { shareModalVisibility } = useModal();
  return (
    <>
      {shareModalVisibility && <ShareModal />}
      <ProjectDetailHeader currentPage="PROJECT DETAILS " />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
