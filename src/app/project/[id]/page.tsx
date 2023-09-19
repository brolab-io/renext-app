import ProjectDetails from "@/components/ProjectDetail";
import { getLaunchPad } from "@/services/launchpad.service";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const project = await getLaunchPad(params.id);
  if (!project) {
    return {
      title: "Project not found - Renext App",
      description: "This project does not exist or has been deleted",
    };
  }
  return {
    title: `${project.name} - Renext App`,
    description: `View ${project.name} on Renext App`,
    openGraph: {
      title: `${project.name} - Renext App`,
      description: `View ${project.name} on Renext App`,
      images: [
        {
          url: project.project_logo_url,
          width: 800,
          height: 800,
          alt: project.name,
        },
      ],
    },
  };
}

const page: React.FC<Props> = async ({ params }) => {
  const project = await getLaunchPad(params.id);
  return (
    <>
      <ProjectDetails project={project} />
    </>
  );
};

export default page;
