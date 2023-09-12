"use client";
import { forwardRef } from "react";
import LabelInputStyleWrapper from "./LabelInput.style";
import clsx from "clsx";

type Props = {
  label: string;
  name: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

// With forwardRef, we can pass the ref to the input element
// eslint-disable-next-line react/display-name
const LabelInput = forwardRef<HTMLInputElement, Props>(
  ({ label, className, error, ...props }, ref) => {
    return (
      <LabelInputStyleWrapper className={clsx("relative", className)}>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input
          className={clsx(error && "!border-red-400")}
          id={props.id || props.name}
          ref={ref}
          {...props}
        />
        {error && <p className="absolute bottom-[-32px] text-xs !text-red-400">{error}</p>}
      </LabelInputStyleWrapper>
    );
  }
);

export default LabelInput;
