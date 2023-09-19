"use client";
/* eslint-disable @next/next/no-img-element */
import ProjectCardStyleWrapper from "./ProjectCardPlaceholder.style";
import CardHover from "../CardHover";

const ProjectCardPlaceholder = () => {
  return (
    <ProjectCardStyleWrapper className="project_item_wrapper">
      <div className="project-info grid grid-cols-3 items-center">
        <div className="h-[70px] w-[70px] bg-placeholder animate-pulse" />

        <div className="project-auother col-span-2">
          <h4 className="mb-10 truncate text-placeholder bg-placeholder">
            PROJECT NAME
          </h4>
          <div className="dsc text-placeholder bg-placeholder">PRICE</div>
        </div>
      </div>
      <div className="project-content">
        <div className="project-header flex justify-between items-center">
          <div className="heading-title">
            <div className="h-5 w-24 bg-placeholder/50 animate-pulse"></div>
          </div>
          <div className="project-icon">
            <div className="h-[35px] w-[35px] bg-placeholder animate-pulse" />
          </div>
        </div>
        <ul className="project-listing">
          {/* <li>
            Min allocation{" "}
            <span>
              {0} {project.currency_address}
            </span>
          </li> */}
          <li className="text-placeholder bg-placeholder">Allocation</li>
          <li className="text-placeholder bg-placeholder">Targeted raise</li>
          <li className="text-placeholder bg-placeholder">Access type</li>
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

export default ProjectCardPlaceholder;
