/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import ProjectCardStyleWrapper from "./ProjectCard.style";
import Image from "next/image";
import React from "react";
import { ProjectType } from "@/types/project.type";
import CardHover from "../CardHover";

const ProjectCard: React.FC<ProjectType> = ({
  id,
  thumb,
  title,
  price,
  saleEnd,
  currency,
  projectDetails,
  socialLinks,
}) => {
  return (
    <ProjectCardStyleWrapper className="project_item_wrapper">
      <div className="project-info flex">
        <Link href={`/project/${id}`}>
          <Image src={thumb} alt="project thumb" width={70} height={70} />
        </Link>

        <div className="project-auother">
          <h4 className="mb-10">
            <Link href={`/project/${id}`}>{title}</Link>
          </h4>
          <div className="dsc">
            PRICE ({currency.toUpperCase()}) = {price}
          </div>
        </div>
      </div>
      <div className="project-content">
        <div className="project-header flex justify-between items-center">
          <div className="heading-title">
            <h4>{saleEnd} Days Left</h4>
          </div>
          <div className="project-icon">
            <Image
              src={`/assets/${currency}.png`}
              alt="coin icon"
              width={35}
              height={35}
            />
          </div>
        </div>
        <ul className="project-listing">
          {projectDetails?.map((item, i) => (
            <li key={i}>
              {item.title} <span>{item.text}</span>
            </li>
          ))}
        </ul>
        <div className="social-links">
          {socialLinks?.map((profile, i) => (
            <Link key={i} href={profile.url}>
              <img src={profile.icon} alt="social icon" />
            </Link>
          ))}
        </div>
      </div>

      <CardHover />
    </ProjectCardStyleWrapper>
  );
};

export default ProjectCard;
