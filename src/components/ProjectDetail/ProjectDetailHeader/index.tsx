"use client";
import Link from "next/link";
import ProjectDetailHeaderStyleWrapper from "./ProjectDetailHeader.style";
import { FiShare2 } from "react-icons/fi";
import Image from "next/image";
import { useModal } from "@/hooks/useModal";

type Props = {
  currentPage?: string;
};

const ProjectDetailHeader: React.FC<Props> = ({ currentPage }) => {
  const { shareModalHandle } = useModal();
  return (
    <ProjectDetailHeaderStyleWrapper className="page_header_wrapper">
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
            <span className="share_icon" onClick={(e) => shareModalHandle(e)}>
              <FiShare2 /> Share
            </span>
          </div>
        </div>
      </div>
    </ProjectDetailHeaderStyleWrapper>
  );
};

export default ProjectDetailHeader;
