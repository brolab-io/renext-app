import React from "react";
import dayjs from "dayjs";
type Props = {
  timestamp: number;
};

const DisplayDayLeft: React.FC<Props> = ({ timestamp }) => {
  if (!timestamp) return null;
  if (dayjs(timestamp * 1000).isBefore(dayjs())) return <h4>Ended</h4>;

  const dayLeft = dayjs(timestamp * 1000).diff(dayjs(), "day");
  if (dayLeft === 0) return <h4>Ending Today</h4>;
  return <h4>{dayLeft} Days Left</h4>;
};

export default DisplayDayLeft;
