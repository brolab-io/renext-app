"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
  SectionTitle,
  SectionTitleWrapper,
} from "@/components/commons/SectionTitle";
import ExploreProjectsStyleWrapper from "./ExploreProjects.style";

import Button from "@/components/commons/Button";
import ProjectTab from "./ProjectTab";

const TABS = ["On Going", "Upcomming", "Ended"];

const ExploreProjects = () => {
  return (
    <ExploreProjectsStyleWrapper>
      <div className="container mx-auto">
        <SectionTitleWrapper>
          <SectionTitle title="PROJECT POOLS" subtitle="EXPLORE" />
        </SectionTitleWrapper>
        <div className="single-project-row  items-center">
          <Tabs>
            <TabList>
              {TABS.map((child, i) => (
                <Tab key={i}>
                  <Button
                    $variant="outline"
                    $sm
                    onClick={(e) => e.preventDefault()}
                  >
                    {child}
                  </Button>
                </Tab>
              ))}
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
    </ExploreProjectsStyleWrapper>
  );
};

export default ExploreProjects;
