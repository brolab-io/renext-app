"use client";
import useProject from "@/hooks/useProject";
import ProjectDetailsStyleWrapper from "./ProjectDetails.style";
import ProjectInfo from "./ProjectInfo";
import TokenInfo from "./TokenInfo";
import Sidebar from "./SideBar";
import Summary from "./Summary";

type Props = {
  id: string;
};

const ProjectDetails: React.FC<Props> = ({ id }) => {
  const { data } = useProject(id);
  if (!data) return null;
  return (
    <ProjectDetailsStyleWrapper>
      <div className="container mx-auto p-3 sm:p-0">
        <div className="flex">
          <div className="w-full">
            <ProjectInfo project={data} />
          </div>
        </div>
        <div className="token_info_row grid grid-cols-1 sm:grid-cols-2 gap-8">
          {data?.info.map((item, i) => (
            <div key={i}>
              <TokenInfo title={item.title} tokenInfo={item.tokenInfo} />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-12 gap-8">
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
        </div>
      </div>
    </ProjectDetailsStyleWrapper>
  );
};

export default ProjectDetails;
