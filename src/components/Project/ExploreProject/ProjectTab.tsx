"use client";
import ProjectCard from "@/components/commons/ProjectCard";
import ProjectCardPlaceholder from "@/components/commons/ProjectCardPlaceholder";
import useProjects from "@/hooks/useProjects";
import { useMemo } from "react";

type ProjectCardProps = {
  type: string;
};

const Placeholder = () => {
  return (
    <>
      {Array.from({ length: 6 }).map((_, i) => (
        <ProjectCardPlaceholder key={i.toString()} />
      ))}
    </>
  );
};

const ProjectTab: React.FC<ProjectCardProps> = ({ type }) => {
  const { data, isLoading } = useProjects(type);
  const projects = useMemo(() => {
    if (!data) return [];
    return data.pages.map((page) => page.items).flat();
  }, [data]);

  if (isLoading) {
    return <Placeholder />;
  }

  return (
    <>
      {projects?.map((project, i) => (
        <ProjectCard project={project} key={project.launch_pool_pda} />
      ))}
    </>
  );
};

export default ProjectTab;
