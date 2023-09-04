import React from "react";
import dayjs from "dayjs";
type Props = {
  timestamp: number;
};

const DisplayDayLeft: React.FC<Props> = ({ timestamp }) => {
  if (!timestamp) return null;
  if (dayjs(timestamp * 1000).isBefore(dayjs())) return <h4>Ended</h4>;
  return <h4>{dayjs(timestamp * 1000).diff(dayjs(), "day")} Days Left</h4>;
};

export default DisplayDayLeft;
