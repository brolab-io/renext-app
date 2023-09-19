"use client";
import Button from "@/components/commons/Button";
import useBuyToken from "@/hooks/program/useBuyToken";
import { useCallback } from "react";

type Props = {
  pool: string;
  value: string | undefined;
  disabled?: boolean;
};

const ButtonBuy: React.FC<Props> = ({ pool, value, disabled }) => {
  const { mutate, isLoading } = useBuyToken(pool);
  const handleBuy = useCallback(() => {
    if (!value) return;

    console.log("handleBuy");
    mutate(value);
  }, [value, mutate]);
  return (
    <Button $xl onClick={handleBuy} disabled={disabled || isLoading}>
      Buy
    </Button>
  );
};

export default ButtonBuy;
