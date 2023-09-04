import ProjectDetails from "@/components/ProjectDetail";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const page: React.FC<Props> = ({ params }) => {
  return (
    <>
      <ProjectDetails id={params.id} />
    </>
  );
};

export default page;
