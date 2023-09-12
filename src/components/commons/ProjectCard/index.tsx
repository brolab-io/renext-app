"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import ProjectCardStyleWrapper from "./ProjectCard.style";
import Image from "next/image";
import React, { useMemo } from "react";
import { TProject } from "@/types/project.type";
import CardHover from "../CardHover";
import DisplayDayLeft from "../DisplayDayLeft";
import dayjs from "dayjs";
import { BN } from "@project-serum/anchor";
import { formatToken } from "@/utils/format.util";
import DisplayNumber from "../DisplayNumber";

type Props = {
  project: TProject;
  key?: string;
};

const ProjectCard: React.FC<Props> = ({ project, key }) => {
  const _price = useMemo(() => {
    return 1 / Number(project.presale_rate);
  }, [project.presale_rate]);

  const _targetedRaise = useMemo(() => {
    return (_price * Number(project.token_sale_amount as any)).toString();
  }, [_price, project.token_sale_amount]);
  return (
    <ProjectCardStyleWrapper className="project_item_wrapper" key={key}>
      <div className="project-info grid grid-cols-3 items-center">
        <Link href={`/project/${project.launch_pool_pda}`}>
          <img
            src={project.project_logo_url}
            alt="project thumb"
            className="h-[70px] w-[70px]"
          />
        </Link>

        <div className="project-auother col-span-2">
          <h4 className="mb-10 truncate">
            <Link href={`/project/${project.launch_pool_pda}`}>
              {project.name}
            </Link>
          </h4>
          <div className="dsc">
            PRICE ({project.currency_address.toUpperCase()}) ={" "}
            {_price.toString()}
          </div>
        </div>
      </div>
      <div className="project-content">
        <div className="project-header flex justify-between items-center">
          <div className="heading-title">
            <DisplayDayLeft
              timestamp={dayjs(project.token_unlock_date).unix()}
            />
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
          </li> */}
          <li>
            Allocation{" "}
            <DisplayNumber
              value={
                (formatToken(
                  project.token_sale_amount,
                  project.token_decimals as number
                ) as unknown as number) * 1
              }
            />
          </li>
          <li>
            Targeted raise{" "}
            <DisplayNumber
              value={
                (formatToken(
                  _targetedRaise,
                  project.token_decimals as number
                ) as unknown as number) * 1
              }
            >
              {" "}
              {project.currency_address}
            </DisplayNumber>
          </li>
          <li>
            Access type <span>{project.campaign_type.toUpperCase()}</span>
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
