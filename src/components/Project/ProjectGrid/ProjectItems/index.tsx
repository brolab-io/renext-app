/* eslint-disable @next/next/no-img-element */
"use client";
import ProjectItemsStyleWrapper from "./ProjectItems.style";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ProjectTab from "../../ExploreProject/ProjectTab";
import { useState } from "react";

const TABS = ["On Going", "Ended"];

type Props = {
  owner?: string;
};
const ProjectItems: React.FC<Props> = ({ owner }) => {
  const [currency, setCurrency] = useState<"All Currency" | "RENEC" | "REUSD">("All Currency");
  return (
    <ProjectItemsStyleWrapper>
      <div className="container mx-auto p-3 sm:p-0">
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
                    {/* <li>Community</li>
                    <li>Private</li> */}
                  </ul>
                </button>
                <button className="w-[220px]">
                  <div className="flex items-center">
                    {currency === "RENEC" || currency === "REUSD" ? (
                      <img
                        className="!h-6 !w-6"
                        src={`/assets/${currency.toLowerCase()}.png`}
                        alt="icon"
                      />
                    ) : null}
                    {currency}
                  </div>
                  <img src={"/assets/next-arrow.png"} alt="icon" />
                  <ul className="sub-menu">
                    <li
                      onClick={() => {
                        setCurrency("All Currency");
                      }}
                    >
                      All Currency
                    </li>
                    <li
                      onClick={() => {
                        setCurrency("RENEC");
                      }}
                    >
                      <img src={"/assets/renec.png"} alt="icon" /> RENEC (RENEC)
                    </li>
                    <li
                      onClick={() => {
                        setCurrency("REUSD");
                      }}
                    >
                      <img src={"/assets/reusd.png"} alt="icon" /> ReUSD (REUSD)
                    </li>
                  </ul>
                </button>
              </div>
            </TabList>

            {TABS.map((items, i) => (
              <TabPanel key={i} className="tabs-row grid grid-cols-1 sm:grid-cols-3 gap-[30px]">
                <ProjectTab owner={owner} currency={currency} type={items} />
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </div>
    </ProjectItemsStyleWrapper>
  );
};

export default ProjectItems;
