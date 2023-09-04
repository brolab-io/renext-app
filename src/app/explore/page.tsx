import Footer from "@/components/Footer";
import ProjectsGrid from "@/components/Project/ProjectGrid";
import PageHeader from "@/components/Project/ProjectHeader";
import React from "react";

export default function ExplorePage() {
  return (
    <>
      <PageHeader currentPage="PROJECTS" pageTitle="EXPLORE IGOS" />
      <ProjectsGrid />
      <Footer />
    </>
  );
}
