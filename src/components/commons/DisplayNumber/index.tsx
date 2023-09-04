import React from "react";

type Props = {
  value: number | string | undefined;
};

const DisplayNumber: React.FC<Props> = ({ value }) => {
  if (!value) return null;
  if (typeof value === "number") {
    return <span>{value.toLocaleString()}</span>;
  }

  return <span>{value}</span>;
};

export default DisplayNumber;
