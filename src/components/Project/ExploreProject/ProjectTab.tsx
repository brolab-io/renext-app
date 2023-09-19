"use client";
import ProjectCard from "@/components/commons/ProjectCard";
import ProjectCardPlaceholder from "@/components/commons/ProjectCardPlaceholder";
import useProjects from "@/hooks/useProjects";
import { useMemo } from "react";

type ProjectCardProps = {
  type: string;
  owner?: string;
  currency?: string;
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

const ProjectTab: React.FC<ProjectCardProps> = ({ type, owner, currency }) => {
  const { data, isLoading } = useProjects(type, owner, currency);
  const projects = useMemo(() => {
    if (!data) return [];
    return data.pages.map((page) => page.items).flat();
  }, [data]);

  if (isLoading) {
    return <Placeholder />;
  }

  if (!projects.length) {
    return (
      <div className="py-20 text-center w-full col-span-4">
        <h4>No projects found</h4>
      </div>
    );
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
