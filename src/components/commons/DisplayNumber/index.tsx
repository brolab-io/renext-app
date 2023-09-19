import React from "react";

type Props = {
  value: number | string | undefined;
  children?: React.ReactNode;
  className?: string;
};

const DisplayNumber: React.FC<Props> = ({ value, children, className }) => {
  if (value === undefined) return null;
  if (typeof value === "number") {
    return (
      <span className={className}>
        {value.toLocaleString()} {children}
      </span>
    );
  }

  return (
    <span className={className}>
      {value} {children}
    </span>
  );
};

export default DisplayNumber;
