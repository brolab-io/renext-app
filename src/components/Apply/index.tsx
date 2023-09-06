"use client";

import ApplyProjectStyleWrapperStyle from "./ApplyProject.style";
import ProjectInfo from "./ProjectInfo";

type Props = {};

const ApplyProject: React.FC<Props> = () => {
  return (
    <ApplyProjectStyleWrapperStyle>
      <div className="container mx-auto p-3 sm:p-0">
        <div className="flex">
          <div className="w-full">
            <ProjectInfo />
            {/* <Actions id={id} currency={data.currency} /> */}
          </div>
        </div>

        <div className="token_info_row grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* {data?.info.map((item, i) => (
            <div key={i}>
              <TokenInfo title={item.title} tokenInfo={item.tokenInfo} />
            </div>
          ))} */}
        </div>
        {/* <Summary content={data?.summary} /> */}
      </div>
    </ApplyProjectStyleWrapperStyle>
  );
};

export default ApplyProject;
