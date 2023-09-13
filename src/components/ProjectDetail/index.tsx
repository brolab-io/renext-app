"use client";
import ProjectDetailsStyleWrapper from "./ProjectDetails.style";
import ProjectInfo from "./ProjectInfo";
import Summary from "./Summary";
import Actions from "./Actions";
import { TProject } from "@/types/project.type";
import useLaunchPool from "@/hooks/program/useLaunchPool";

type Props = {
  project: TProject;
};

const ProjectDetails: React.FC<Props> = ({ project }) => {
  const { data: launchPool } = useLaunchPool(project.launch_pool_pda);
  return (
    <ProjectDetailsStyleWrapper>
      <div className="container mx-auto p-3 sm:p-0">
        <div className="flex">
          <div className="w-full">
            <ProjectInfo project={project} launchPool={launchPool} />
            <Actions project={project} launchPool={launchPool} />
          </div>
        </div>

        <div className="token_info_row grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* {data?.info.map((item, i) => (
            <div key={i}>
              <TokenInfo title={item.title} tokenInfo={item.tokenInfo} />
            </div>
          ))} */}
        </div>
        <Summary content={project.project_description} />
        {/* <History id={id} /> */}
        {/* <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4">
            <Sidebar />
          </div>
          <div className="col-span-8">
            <Summary content={data?.summary} />
            {"<Schedule />"}
            {"<Comparison />"}
            {"<Statistics />"}
            {"<RoadMap />"}
            {"<Team />"}
            {"<Partner />"}
          </div>
        </div> */}
      </div>
    </ProjectDetailsStyleWrapper>
  );
};

export default ProjectDetails;
