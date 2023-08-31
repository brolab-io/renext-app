import React, { PropsWithChildren } from "react";
import {
  SectionTitleStyle,
  SectionTitleWrapperStyle,
} from "./SectionTitle.style";
import Image from "next/image";

type SectionTitleProps = {
  title?: string;
  subtitle?: string;
  isCenter?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  isCenter,
  ...props
}) => {
  return (
    <SectionTitleStyle {...props} className="section_title">
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
