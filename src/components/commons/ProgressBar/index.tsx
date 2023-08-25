import ProgressBarStyle from "./ProgressBar.style";

type ProgressBarProps = {
  progress?: string;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <ProgressBarStyle className="progressbar_wrapper">
      <div className="progress_bar">
        <span
          className="progress_bar_overlay"
          style={{ width: progress ? progress : "50%" }}
        ></span>
      </div>
    </ProgressBarStyle>
  );
};

export default ProgressBar;
