"use client";
/* eslint-disable @next/next/no-img-element */
import Button from "@/components/commons/Button";
import ActionsStyleWrapper from "./Actions.style";
import { useMemo, useState } from "react";
import { TProject } from "@/types/project.type";
import {
  formatLamportToNumber,
  formatToken,
  parseToken,
} from "@/utils/format.util";
import useUserPool from "@/hooks/program/useUserPool";
import { BN } from "@project-serum/anchor";
import DisplayNumber from "@/components/commons/DisplayNumber";
import ButtonBuy from "./ButtonBuy";
import useLaunchPool from "@/hooks/program/useLaunchPool";

type Props = {
  project: TProject;
  launchPool: ReturnType<typeof useLaunchPool>["data"] | undefined;
};
const Actions: React.FC<Props> = ({ project, launchPool }) => {
  const [amount, setAmount] = useState<string | undefined>();
  const { data: usePool } = useUserPool(
    project.launch_pool_pda,
    project.token_address
  );

  const handleBuyMax = () => {
    const max = usePool
      ? new BN(project.maximum_token_amount).sub(usePool.amount).toString()
      : project.maximum_token_amount;
    setAmount(formatLamportToNumber(max, project.token_decimals).toString());
  };

  const _buyed = useMemo(() => {
    return usePool
      ? formatLamportToNumber(usePool.amount.toString(), project.token_decimals)
      : 0;
  }, [project.token_decimals, usePool]);

  return (
    <ActionsStyleWrapper>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div className="project-form">
          <h3 className="widget_title">
            Join with us <img src={"/assets/steps.png"} alt="shape" />
          </h3>
          <h4>Amount to buy</h4>
          <div className="gap-2 form-group-area">
            <input
              type="number"
              placeholder="00.00"
              value={amount || ""}
              onChange={(e) => setAmount(e.target.value)}
            />
            <Button $sm className="max" $variant="dark" onClick={handleBuyMax}>
              MAX
            </Button>
            <ButtonBuy
              pool={project.launch_pool_pda}
              value={amount}
              disabled={!launchPool?.status.active}
            />
          </div>
        </div>
        <div className="space-y-5">
          <ul className="info_list">
            <li>
              <span className="info_key">MIN</span>

              <DisplayNumber
                className="info_value"
                value={formatLamportToNumber(
                  project.minimum_token_amount,
                  project.token_decimals
                )}
              >
                {project.currency_address.toUpperCase()}
              </DisplayNumber>
            </li>
            <li>
              <span className="info_key">MAX</span>

              <DisplayNumber
                className="info_value"
                value={formatLamportToNumber(
                  project.maximum_token_amount,
                  project.token_decimals
                )}
              >
                {project.currency_address.toUpperCase()}
              </DisplayNumber>
            </li>
            <li>
              <span className="info_key">Buyed</span>
              <DisplayNumber className="info_value" value={_buyed}>
                {project.currency_address.toUpperCase()}
              </DisplayNumber>
            </li>
          </ul>
        </div>
      </div>
    </ActionsStyleWrapper>
  );
};

export default Actions;
