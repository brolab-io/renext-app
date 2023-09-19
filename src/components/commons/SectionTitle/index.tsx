import React, { PropsWithChildren } from "react";
import {
  SectionTitleStyle,
  SectionTitleWrapperStyle,
} from "./SectionTitle.style";
import Image from "next/image";
import clsx from "clsx";

type SectionTitleProps = {
  title?: string;
  subtitle?: string;
  isCenter?: boolean;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  isCenter,
  className,
  ...props
}) => {
  return (
    <SectionTitleStyle {...props} className={clsx("section_title", className)}>
      {subtitle && (
        <span className="subtitle">
          {isCenter ? (
            <Image
              src={"/assets/steps2.png"}
              alt="section title shape"
              width={74}
              height={11}
            />
          ) : (
            ""
          )}
          {subtitle}{" "}
          <Image
            src={"/assets/steps.png"}
            alt="bithu nft section title shape"
            width={74}
            height={11}
          />{" "}
        </span>
      )}
      {title && <h2>{title}</h2>}
    </SectionTitleStyle>
  );
};

export const SectionTitleWrapper: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <SectionTitleWrapperStyle className="section_title_wrapper">
      {children}
    </SectionTitleWrapperStyle>
  );
};
