"use client";
import { getExplorerAddressUrl } from "@/utils/network.util";
/* eslint-disable @next/next/no-img-element */

import VestingPlanStyleWrapper from "../VestingPlan/VestingPlan.style";
import useWhiteList from "@/hooks/program/useWhiteList";
import CircleLoading from "@/components/commons/CircleLoading";
type Props = {
  pool: string;
};
const Whitelist: React.FC<Props> = ({ pool }) => {
  const { data, isLoading } = useWhiteList(pool);
  //   if (!data) return null;
  return (
    <VestingPlanStyleWrapper>
      <h3 className="widget_title">
        Whitelist <img src={"/assets/steps.png"} alt="shape" />
      </h3>
      {isLoading ? (
        <div className="h-64 w-full flex items-center justify-center">
          <CircleLoading className="h-8 w-8 text-white" />
        </div>
      ) : null}
      {data && !isLoading ? (
        <div className="schedule_table">
          <table>
            <thead>
              <tr className="table-header">
                <th className="text-left">Wallets</th>
              </tr>
            </thead>
            <tbody>
              {data.wallets.map((item, i) => (
                <tr key={item.toString()}>
                  <td className="text-left">
                    <a
                      href={getExplorerAddressUrl(item.toString())}
                      target="_blank"
                    >
                      {item.toString()}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </VestingPlanStyleWrapper>
  );
};

export default Whitelist;
