"use client";

import MDEditor from "@uiw/react-md-editor";
import SummaryStyleWrapper from "./Summary.style";

type Props = {
  content: string;
};

const Summary: React.FC<Props> = ({ content }) => {
  //   const [isOpen, setIsOpen] = useState(false);
  return (
    <SummaryStyleWrapper id="projectSummary">
      <h4 className="widget_title">Project Summary</h4>
      <div className="border border-white/25 border-l-4 overflow-hidden p-2 md:p-4 lg:p-6 rounded description">
        <MDEditor.Markdown source={content} className="whitespace-pre-wrap" />
      </div>

      {/* <div className="vedio_player">
        <img src={videoThumb.src} alt="video thumb" />
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="1vpzW13m_IM"
          onClose={() => setIsOpen(false)}
        />
        <span onClick={() => setIsOpen(true)}>
          {" "}
          <FaPlay />{" "}
        </span>
      </div> */}
    </SummaryStyleWrapper>
  );
};

export default Summary;
