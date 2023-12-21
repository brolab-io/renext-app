"use client";
import Button from "@/components/commons/Button";
import useLaunchPool from "@/hooks/program/useLaunchPool";
import useWithdrawLaunchPool from "@/hooks/program/useWithdrawLaunchPool";
import BN from "bn.js";
import { useMemo } from "react";
import { HiOutlineCreditCard } from "react-icons/hi2";
type Props = {
  pool: string;
  currency: string;
};
const ButtonWithdraw: React.FC<Props> = ({ pool, currency }) => {
  const { mutate, isLoading } = useWithdrawLaunchPool(pool, currency);
  const { data } = useLaunchPool(pool);

  const _disabled = useMemo(() => {
    if (isLoading || !data || data.vaultAmount.eq(new BN(0))) return true;
    return data.vaultAmount.eq(new BN(0));
  }, [data, isLoading]);
  return (
    <Button
      $lg
      $variant="mint"
      className="!h-[50px]"
      disabled={_disabled}
      onClick={() => mutate()}
    >
      <HiOutlineCreditCard /> Withdraw {currency.toUpperCase()}
    </Button>
  );
};

export default ButtonWithdraw;
