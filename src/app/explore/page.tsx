import Footer from "@/components/Footer";
import ProjectsGrid from "@/components/Project/ProjectGrid";
import PageHeader from "@/components/Project/ProjectHeader";
import { Metadata } from "next";
import React from "react";

// either Static metadata
export const metadata: Metadata = {
  title: "Explore IGOS - Renext App",
  description: "Explore IGOS on Renext App",
};

export default function ExplorePage() {
  return (
    <>
      <PageHeader currentPage="PROJECTS" pageTitle="EXPLORE IGOS" />
      <ProjectsGrid />
      <Footer />
    </>
  );
}
