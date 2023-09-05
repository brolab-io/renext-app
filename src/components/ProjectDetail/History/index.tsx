"use client";
/* eslint-disable @next/next/no-img-element */
import useProjectHistory from "@/hooks/useProjectHistory";
import HistoryStyleWrapper from "./HistoryStyleWrapper.style";
import { useMemo } from "react";
import dayjs from "dayjs";
import Link from "next/link";
import { getExplorerUrl } from "@/utils/network.util";
type Props = {
  id: string;
};

const History: React.FC<Props> = ({ id }) => {
  const { data } = useProjectHistory(id);
  const _history = useMemo(() => {
    if (!data) return [];
    return data.pages.map((page) => page.items).flat();
  }, [data]);
  if (!data) return null;
  return (
    <HistoryStyleWrapper id="schedule">
      <h3 className="widget_title">
        HISTORY <img src={"/assets/steps.png"} alt="shape" />
      </h3>

      <div className="schedule_table">
        <table>
          <thead>
            <tr className="table-header">
              <th>NO.</th>
              <th>WALLET</th>
              <th>AMOUNT</th>
              <th>TIME</th>
              <th>EXPLORE</th>
            </tr>
          </thead>
          <tbody>
            {_history.map((item, i) => (
              <tr key={item.tx}>
                <td className="text-center">{i + 1}</td>
                <td>{item.wallet}</td>
                <td className="text-center">{item.amount}</td>
                <td>{dayjs(item.date * 1000).format("YYYY-MM-DD HH:mm:ss")}</td>
                <td className="text-center">
                  <Link href={getExplorerUrl(item.tx)} target="_blank">
                    <button>TX</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </HistoryStyleWrapper>
  );
};

export default History;
