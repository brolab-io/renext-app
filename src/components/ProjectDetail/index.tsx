"use client";
import useProject from "@/hooks/useProject";
import ProjectDetailsStyleWrapper from "./ProjectDetails.style";
import ProjectInfo from "./ProjectInfo";
import TokenInfo from "./TokenInfo";

type Props = {
  id: string;
};

const ProjectDetails: React.FC<Props> = ({ id }) => {
  const { data } = useProject(id);
  return (
    <ProjectDetailsStyleWrapper>
      <div className="container mx-auto p-3 sm:p-0">
        <div className="flex">
          <div className="w-full">
            <ProjectInfo project={data} />
          </div>
        </div>
        <div className="token_info_row grid grid-cols-1 sm:grid-cols-2">
          {data?.info.map((item, i) => (
            <div key={i}>
              <TokenInfo title={item.title} tokenInfo={item.tokenInfo} />
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-md-4">{"<Sidebar />"}</div>
          <div className="col-md-8">
            {"<Summary />"}
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
