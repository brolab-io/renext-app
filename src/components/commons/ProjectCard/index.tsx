/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import ProjectCardStyleWrapper from "./ProjectCard.style";
import Image from "next/image";
import React from "react";
import { TProject } from "@/types/project.type";
import CardHover from "../CardHover";
import DisplayDayLeft from "../DisplayDayLeft";
import dayjs from "dayjs";

type Props = {
  project: TProject;
};

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <ProjectCardStyleWrapper className="project_item_wrapper">
      <div className="project-info flex">
        <Link href={`/project/${project.slug || project.launch_pool_pda}`}>
          <img src={project.project_logo_url} alt="project thumb" className="h-[70px] w-[70px]" />
        </Link>

        <div className="project-auother">
          <h4 className="mb-10">
            <Link href={`/project/${project.slug || project.launch_pool_pda}`}>{project.name}</Link>
          </h4>
          <div className="dsc">
            PRICE ({project.currency_address.toUpperCase()}) = {0}
          </div>
        </div>
      </div>
      <div className="project-content">
        <div className="project-header flex justify-between items-center">
          <div className="heading-title">
            <DisplayDayLeft timestamp={dayjs(project.token_unlock_date).unix()} />
          </div>
          <div className="project-icon">
            <Image
              src={`/assets/${project.currency_address.toLocaleLowerCase()}.png`}
              alt="coin icon"
              width={35}
              height={35}
            />
          </div>
        </div>
        <ul className="project-listing">
          {/* <li>
            Min allocation{" "}
            <span>
              {0} {project.currency_address}
            </span>
          </li>
          <li>
            Max allocation{" "}
            <span>
              {0} {project.currency_address}
            </span>
          </li> */}
          <li>
            Targeted raise{" "}
            <span>
              {0} {project.currency_address}
            </span>
          </li>
          <li>
            Access type <span>Public</span>
          </li>
        </ul>
        <div className="social-links">
          {/* {socialLinks?.map((profile, i) => (
            <Link key={i} href={profile.url}>
              <img src={profile.icon} alt="social icon" />
            </Link>
          ))} */}
        </div>
      </div>

      <CardHover />
    </ProjectCardStyleWrapper>
  );
};

export default ProjectCard;
