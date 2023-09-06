"use client";
import Link from "next/link";
import ApplyHeaderStyleWrapper from "./ApplyHeader";
import Image from "next/image";

type Props = {
  currentPage?: string;
};

const ApplyHeader: React.FC<Props> = ({ currentPage }) => {
  return (
    <ApplyHeaderStyleWrapper className="page_header_wrapper">
      <div className="container mx-auto p-3 sm:p-0">
        <div>
          <div className="breadcrumb_area">
            <div className="breadcrumb_menu">
              <Link href="# ">
                Home <span>.</span>
              </Link>
              <Link href="# ">
                Projects <span>.</span>
              </Link>
              <p>{currentPage && currentPage}</p>
              <Image
                className="heading_shape"
                src={"/assets/steps.png"}
                alt="project detail header shape"
                width={74}
                height={11}
              />
            </div>
          </div>
        </div>
      </div>
    </ApplyHeaderStyleWrapper>
  );
};

export default ApplyHeader;
