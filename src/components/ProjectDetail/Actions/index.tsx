"use client";
/* eslint-disable @next/next/no-img-element */
import Button from "@/components/commons/Button";
import ActionsStyleWrapper from "./Actions.style";
import { useState } from "react";

type Props = {
  id: string;
  currency: string;
};
const Actions: React.FC<Props> = ({ id, currency }) => {
  const [amount, setAmount] = useState<string | undefined>();

  const handleBuyMax = () => {
    console.log("handleBuyMax");
    setAmount("100");
  };

  const handleBuy = () => {
    console.log("handleBuy");
  };
  return (
    <ActionsStyleWrapper>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="project-form">
          <h3 className="widget_title">
            Join with us <img src={"/assets/steps.png"} alt="shape" />
          </h3>
          <h4>Amount to buy</h4>
          <div className="form-group-area gap-2">
            <input
              type="number"
              placeholder="00.00"
              value={amount || ""}
              onChange={(e) => setAmount(e.target.value)}
            />
            <Button $sm className="max" $variant="dark" onClick={handleBuyMax}>
              MAX
            </Button>
            <Button $xl onClick={handleBuy}>
              Buy
            </Button>
          </div>
        </div>
        <div className="space-y-5">
          <ul className="info_list">
            <li>
              <span className="info_key">MAX</span>
              <span className="info_value">1.000 {currency.toUpperCase()}</span>
            </li>
            <li>
              <span className="info_key">MIN</span>
              <span className="info_value">200 {currency.toUpperCase()}</span>
            </li>
            <li>
              <span className="info_key">Buyed</span>
              <span className="info_value">200 {currency.toUpperCase()}</span>
            </li>
          </ul>
          {/* <div className="flex justify-center">
            <Button $xxl $variant="mint" onClick={handleBuy}>
              Claim
            </Button>
          </div> */}
        </div>
      </div>
    </ActionsStyleWrapper>
  );
};

export default Actions;
