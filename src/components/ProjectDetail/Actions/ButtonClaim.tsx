"use client";
import Button from "@/components/commons/Button";
import useClaimToken from "@/hooks/program/useClaimToken";
import useUserPool from "@/hooks/program/useUserPool";
import { BN } from "bn.js";
import { useMemo } from "react";

type Props = {
  pool: string;
  tokenMint: string;
  disabled?: boolean;
};
const ButtonClaim: React.FC<Props> = ({ pool, tokenMint, disabled }) => {
  const { mutate, isLoading } = useClaimToken(pool);
  const { data } = useUserPool(pool, tokenMint);

  const _disabled = useMemo(() => {
    if (disabled || isLoading || !data || data.amount.eq(new BN(0))) return true;
    return data.amount.sub(data.claimed).eq(new BN(0));
  }, [data, disabled, isLoading]);

  return (
    <Button $sm $variant="mint" disabled={_disabled} onClick={() => mutate()}>
      Claim Token
    </Button>
  );
};

export default ButtonClaim;
