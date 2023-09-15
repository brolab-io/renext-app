"use client";
import Link from "next/link";

import { ButtonStyle, LinkStyle, LinkStyleProps } from "./Button.style";
import clsx from "clsx";
import { HTMLAttributeAnchorTarget } from "react";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  target?: HTMLAttributeAnchorTarget;
} & LinkStyleProps;
const Button: React.FC<ButtonProps> = ({ children, href, className, target, ...props }) => {
  if (!href) {
    return (
      <ButtonStyle {...props} className={clsx("btn_wrapper disabled:bg-gray-500", className)}>
        {children}

        <div className="hover_shape_wrapper">
          <span className="btn_hover_shape btn_hover_shape-1"></span>
          <span className="btn_hover_shape btn_hover_shape-2"></span>
          <span className="btn_hover_shape btn_hover_shape-3"></span>
        </div>
      </ButtonStyle>
    );
  }

  return (
    <Link href={href ? href : "#"} passHref legacyBehavior target={target}>
      <LinkStyle {...props} href={href ? href : "#"} className="btn_wrapper">
        {children}

        <div className="hover_shape_wrapper">
          <span className="btn_hover_shape btn_hover_shape-1"></span>
          <span className="btn_hover_shape btn_hover_shape-2"></span>
          <span className="btn_hover_shape btn_hover_shape-3"></span>
        </div>
      </LinkStyle>
    </Link>
  );
};

export default Button;
