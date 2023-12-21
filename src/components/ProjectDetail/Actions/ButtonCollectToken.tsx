"use client";
import Button from "@/components/commons/Button";
import useCollectToken from "@/hooks/program/useCollectToken";
import useLaunchPool from "@/hooks/program/useLaunchPool";
import { BN } from "bn.js";
import { useMemo } from "react";
import { BsCollection } from "react-icons/bs";

type Props = {
  pool: string;
  disabled?: boolean;
};
const ButtonCollectToken: React.FC<Props> = ({ pool, disabled }) => {
  const { mutate, isLoading } = useCollectToken(pool);
  const { data } = useLaunchPool(pool);

  const _disabled = useMemo(() => {
    if (disabled || isLoading || !data || data.poolSizeRemaining.eq(new BN(0)))
      return true;
    return data.poolSizeRemaining.eq(new BN(0));
  }, [data, disabled, isLoading]);

  return (
    <Button
      $lg
      $variant="mint"
      className="!h-[50px]"
      disabled={_disabled}
      onClick={() => mutate()}
    >
      <BsCollection /> Collect remain token
    </Button>
  );
};

export default ButtonCollectToken;
