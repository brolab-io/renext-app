import Countdown, { zeroPad } from "react-countdown";

const CountdownRender = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed?: boolean;
}) => {
  return (
    <div className="countdown_wrapper">
      <div>
        {zeroPad(days)}
        <span>D</span>
      </div>
      <div>
        {zeroPad(hours)}
        <span>H</span>
      </div>
      <div>
        {zeroPad(minutes)}
        <span>M</span>
      </div>
      <div>
        {zeroPad(seconds)}
        <span>S</span>
      </div>
    </div>
  );
};

export default CountdownRender;
