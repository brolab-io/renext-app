"use client";
import Link from "next/link";
import ApplyHeaderStyleWrapper from "./ApplyHeader";
import Image from "next/image";
import ProgressBar from "@/components/commons/ProgressBar";
import { useApplyProjectContext } from "@/app/apply/provider";

type Props = {
  currentPage?: string;
};

const ApplyHeader: React.FC<Props> = ({ currentPage }) => {
  const { step, totalStep } = useApplyProjectContext();

  const progress = (step / totalStep) * 100;

  return (
    <ApplyHeaderStyleWrapper className="page_header_wrapper">
      <div className="container mx-auto p-3 sm:p-0">
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="breadcrumb_area">
              <div className="breadcrumb_menu">
                <Link href="# ">Home</Link>
                <Image
                  className="heading_shape"
                  src={"/assets/steps.png"}
                  alt="project detail header shape"
                  width={74}
                  height={11}
                />
              </div>
              <h2 className="breadcrumb_title text-uppercase">{currentPage && currentPage}</h2>
            </div>
          </div>
          <div className="hidden lg:col-span-2 lg:block"></div>
          <div className="lg:col-span-5">
            <div className="page_header_progressbar flex items-center h-full">
              <span>
                STEP {step} OF {totalStep}
              </span>{" "}
              <ProgressBar progress={progress} />
            </div>
          </div>
        </div>
      </div>
    </ApplyHeaderStyleWrapper>
  );
};

export default ApplyHeader;
