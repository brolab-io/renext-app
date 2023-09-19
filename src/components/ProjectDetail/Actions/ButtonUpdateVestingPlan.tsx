import Button from "@/components/commons/Button";
import { useState } from "react";
import WhitelistModal from "@/components/commons/Modal/WhitelistModal";
import VestingPlanModal from "@/components/commons/Modal/VestingPlanModal";

type Props = {
  pool: string;
  decimals: number;
};
const ButtonUpdateVestingPlan: React.FC<Props> = ({ pool, decimals }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <VestingPlanModal
          setIsOpen={setIsOpen}
          pool_pda={pool}
          decimals={decimals}
        />
      ) : null}
      <Button
        $xl
        $variant="mint"
        onClick={() => setIsOpen(true)}
        className="!h-[50px]"
      >
        UPDATE VESTING PLAN
      </Button>
    </>
  );
};

export default ButtonUpdateVestingPlan;
