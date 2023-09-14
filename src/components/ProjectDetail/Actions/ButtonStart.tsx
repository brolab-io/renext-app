import Button from "@/components/commons/Button";
import useStartPool from "@/hooks/program/useStartPool";
import { useCallback, useState } from "react";
import WhitelistModal from "@/components/commons/Modal/WhitelistModal";

type Props = {
  pool: string;
  disabled?: boolean;
  withWhitelist?: boolean;
};
const ButtonStart: React.FC<Props> = ({
  pool,
  disabled,
  withWhitelist = false,
}) => {
  const { mutate, isLoading } = useStartPool(pool);
  const [isOpen, setIsOpen] = useState(false);

  const handleStart = useCallback(() => {
    mutate(undefined);
  }, [mutate]);

  if (withWhitelist) {
    return (
      <>
        {isOpen ? (
          <WhitelistModal setIsOpen={setIsOpen} pool_pda={pool} />
        ) : null}
        <Button $xl onClick={() => setIsOpen(true)} className="!h-[50px]">
          Start Pool with Whitelist
        </Button>
      </>
    );
  }

  return (
    <Button
      $xl
      onClick={handleStart}
      disabled={disabled || isLoading}
      className="!h-[50px]"
    >
      Start Pool
    </Button>
  );
};

export default ButtonStart;
