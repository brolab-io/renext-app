import ProjectItems from "./ProjectItems";
import ProjectsGridStyleWrapper from "./ProjectsGrid.style";

type Props = {
  owner?: string;
};

const ProjectsGrid: React.FC<Props> = ({ owner }) => {
  return (
    <ProjectsGridStyleWrapper>
      <ProjectItems owner={owner} />
    </ProjectsGridStyleWrapper>
  );
};

export default ProjectsGrid;
