"use client";
import ProjectCard from "@/components/commons/ProjectCard";
import useProjects from "@/hooks/useProjects";
import { useMemo } from "react";

type ProjectCardProps = {
  type: string;
};

const ProjectTab: React.FC<ProjectCardProps> = ({ type }) => {
  const { data } = useProjects(type);
  const projects = useMemo(() => {
    if (!data) return [];
    return data.pages.map((page) => page.items).flat();
  }, [data]);

  return (
    <>
      {projects?.map((project, i) => (
        <div key={i}>
          {/* {JSON.stringify(project)} */}
          <ProjectCard key={i} {...project} />
        </div>
      ))}
    </>
  );
};

export default ProjectTab;
