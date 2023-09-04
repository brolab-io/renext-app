"use client";

import SummaryStyleWrapper from "./Summary.style";

type Props = {
  content: string;
};

const Summary: React.FC<Props> = ({ content }) => {
  //   const [isOpen, setIsOpen] = useState(false);
  return (
    <SummaryStyleWrapper id="projectSummary">
      <h4 className="widget_title">Project Summary</h4>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>

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
