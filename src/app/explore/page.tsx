import ProjectsGrid from "@/components/projects/ProjectGrid";
import PageHeader from "@/components/projects/ProjectHeader";
import React from "react";

export default function ExplorePage() {
  return (
    <>
      <PageHeader currentPage="PROJECTS" pageTitle="EXPLORE IGOS" />
      <ProjectsGrid />
    </>
  );
}
