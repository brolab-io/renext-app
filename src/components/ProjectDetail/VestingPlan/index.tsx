"use client";
import useVestingPlan from "@/hooks/program/useVestingPlan";
/* eslint-disable @next/next/no-img-element */
import VestingPlanStyleWrapper from "./VestingPlan.style";
import dayjs from "dayjs";
import DisplayNumber from "@/components/commons/DisplayNumber";
import { formatLamportToNumber } from "@/utils/format.util";
type Props = {
  pool: string;
  decimals: number;
};
const VestingPlan: React.FC<Props> = ({ pool, decimals }) => {
  const { data } = useVestingPlan(pool);
  if (!data) return null;
  return (
    <VestingPlanStyleWrapper>
      <h3 className="widget_title">
        Vesting plan <img src={"/assets/steps.png"} alt="shape" />
      </h3>
      <div className="schedule_table">
        <table>
          <thead>
            <tr className="table-header">
              <th className="text-left">Release time</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.schedule.map((item, i) => (
              <tr key={item.releaseTime.toString()}>
                <td className="text-left">
                  {dayjs(Number(item.releaseTime) * 1000)
                    .toDate()
                    .toLocaleString()}
                </td>
                <td className="text-center">
                  <DisplayNumber
                    value={formatLamportToNumber(
                      item.amount.toString(),
                      decimals
                    )}
                  />
                </td>
                <td className="text-center">
                  {dayjs(Number(item.releaseTime) * 1000).isAfter(dayjs())
                    ? "Comming"
                    : "Completed"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div className="vesting_plan">
        <ul>
          {data.schedule.map((item, i) => (
            <li key={item.releaseTime.toString()}>
              {item.releaseTime.toString()} - {item.amount.toString()}
            </li>
          ))}
        </ul>
      </div> */}
    </VestingPlanStyleWrapper>
  );
};

export default VestingPlan;
