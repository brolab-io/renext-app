import React from "react";

type Props = {
  value: number | string | undefined;
  children?: React.ReactNode;
};

const DisplayNumber: React.FC<Props> = ({ value, children }) => {
  if (!value) return null;
  if (typeof value === "number") {
    return (
      <span>
        {value.toLocaleString()}
        {children}
      </span>
    );
  }

  return (
    <span>
      {value}
      {children}
    </span>
  );
};

export default DisplayNumber;
