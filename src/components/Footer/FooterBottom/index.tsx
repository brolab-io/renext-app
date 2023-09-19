"use client";
import Link from "next/link";
import Social from "../SocialProfile";
import FooterBottomStyleWrapper from "./FooterBottom.style";
import { VscChevronUp } from "react-icons/vsc";
import Image from "next/image";
const FooterBottom = () => {
  return (
    <FooterBottomStyleWrapper className="footer_bottom_wrapper">
      <Social />
      <div className="container mx-auto">
        <div className="footer-bottom-content">
          <Link href="#" className="footer-logo">
            <Image
              src={"/assets/renext-logo.svg"}
              alt="Footer logo"
              width={159}
              height={30}
            />
          </Link>

          <ul className="footer-menu">
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">How it works</Link>
            </li>
            <li>
              <Link href="#">Token info</Link>
            </li>
            <li>
              <Link href="#">About us</Link>
            </li>
            <li>
              <Link href="#">Social media</Link>
            </li>
            <li>
              <Link href="#">Terms of Service</Link>
            </li>
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
          </ul>

          <div className="copyright-text">
            Copyright © 2023. All Rights Reserved by{" "}
            <Link href="#">ReNext</Link>
          </div>
          <div className="scrollup text-center">
            <Link href="#">
              <VscChevronUp />
            </Link>
          </div>
        </div>
      </div>
    </FooterBottomStyleWrapper>
  );
};

export default FooterBottom;
