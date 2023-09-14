"use client";

import Button from "@/components/commons/Button";
import useCompleteLaunchPool from "@/hooks/program/useCompleteLaunchPool";
import { BsCheckLg } from "react-icons/bs";

type Props = {
  pool: string;
};

const ButtonComplete: React.FC<Props> = ({ pool }) => {
  const { mutate, isLoading } = useCompleteLaunchPool(pool);
  return (
    <Button
      $xl
      className="!h-[50px]"
      disabled={isLoading}
      onClick={() => mutate()}
    >
      <BsCheckLg /> Mark as Complete
    </Button>
  );
};

export default ButtonComplete;
