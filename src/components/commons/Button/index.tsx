"use client";
import Link from "next/link";

import LinkStyle, { LinkStyleProps } from "./Button.style";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
} & LinkStyleProps;
const Button: React.FC<ButtonProps> = ({ children, href, ...props }) => {
  return (
    <Link href={href ? href : "#"} passHref legacyBehavior>
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
