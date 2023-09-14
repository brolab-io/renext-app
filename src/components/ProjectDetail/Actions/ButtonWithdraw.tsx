"use client";
import Button from "@/components/commons/Button";
import useWithdrawLaunchPool from "@/hooks/program/useWithdrawLaunchPool";
import { HiOutlineCreditCard } from "react-icons/hi2";
type Props = {
  pool: string;
  currency: string;
};
const ButtonWithdraw: React.FC<Props> = ({ pool, currency }) => {
  const { mutate, isLoading } = useWithdrawLaunchPool(pool, currency);
  return (
    <Button
      $xl
      $variant="mint"
      className="!h-[50px]"
      disabled={isLoading}
      onClick={() => mutate()}
    >
      <HiOutlineCreditCard /> Withdraw {currency.toUpperCase()}
    </Button>
  );
};

export default ButtonWithdraw;
