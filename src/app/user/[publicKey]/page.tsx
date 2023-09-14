import Footer from "@/components/Footer";
import ProjectsGrid from "@/components/Project/ProjectGrid";
import PageHeader from "@/components/Project/ProjectHeader";
import { Metadata } from "next";
import React from "react";
import UserPageHeader from "./header";

// either Static metadata
export const metadata: Metadata = {
  title: "Explore IGOS - Renext App",
  description: "Explore IGOS on Renext App",
};

type PageProps = {
  params: {
    publicKey: string;
  };
};

export default function ExplorePage({ params }: PageProps) {
  return (
    <>
      <UserPageHeader publicKey={params.publicKey} />
      <ProjectsGrid owner={params.publicKey} />
      <Footer />
    </>
  );
}
