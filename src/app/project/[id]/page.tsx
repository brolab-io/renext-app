import PageHeader from "@/components/Project/ProjectHeader";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const page: React.FC<Props> = ({ params }) => {
  return (
    <>
      <PageHeader currentPage="PROJECT DETAILS " />
    </>
  );
};

export default page;
