/* eslint-disable @next/next/no-img-element */
"use client";
import useProject from "@/hooks/useProjects";
import ProjectItemsStyleWrapper from "./ProjectItems.style";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ProjectCard from "@/components/commons/ProjectCard";
import { useMemo } from "react";
import ProjectTab from "../../ExploreProject/ProjectTab";
const TABS = ["On Going", "Upcomming", "Ended"];
const ProjectItems = () => {
  return (
    <ProjectItemsStyleWrapper>
      <div className="container mx-auto">
        <div className="single-project-row">
          <Tabs>
            <TabList>
              <div className="tab_btn_wrapper">
                {TABS.map((child, i) => (
                  <Tab key={i}>
                    <button>{child}</button>
                  </Tab>
                ))}
              </div>

              <div className="item_sorting_list">
                <button>
                  All Access
                  <img src={"/assets/next-arrow.png"} alt="icon" />
                  <ul className="sub-menu">
                    <li>All Access</li>
                    <li>Community</li>
                    <li>Private</li>
                  </ul>
                </button>
                <button>
                  All Currency
                  <img src={"/assets/next-arrow.png"} alt="icon" />
                  <ul className="sub-menu">
                    <li>
                      <img src={"/assets/renec.png"} alt="icon" /> RENEC (RENEC)
                    </li>
                    <li>
                      <img src={"/assets/reusd.png"} alt="icon" /> ReUSD (REUSD)
                    </li>
                  </ul>
                </button>
              </div>
            </TabList>

            {TABS.map((items, i) => (
              <TabPanel
                key={i}
                className="tabs-row grid grid-cols-1 sm:grid-cols-3 gap-[30px]"
              >
                <ProjectTab type={items} />
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </div>
    </ProjectItemsStyleWrapper>
  );
};

export default ProjectItems;
