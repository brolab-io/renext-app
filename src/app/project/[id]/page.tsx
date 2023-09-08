import ProjectDetails from "@/components/ProjectDetail";
import { getLaunchPad } from "@/services/launchpad.service";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const page: React.FC<Props> = async ({ params }) => {
  const project = await getLaunchPad(params.id);
  return (
    <>
      <ProjectDetails project={project} />
    </>
  );
};

export default page;
