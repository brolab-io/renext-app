"use client";
import { FiX } from "react-icons/fi";
import Button from "../../Button";
import VestingPlanModalStyleWrapper from "./VestingPlanModal";
import { useCallback, useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import LabelInput from "../../Form/LabelInput";
import { FaPlus } from "react-icons/fa6";
import useUpdateVestingPlan from "@/hooks/program/useUpdateVestingPlan";

type WhitelistModalProps = {
  setIsOpen: (isOpen: boolean) => void;
  pool_pda: string;
  decimals: number;
};

type FormValues = {
  vestingPlan: {
    releaseTime: string;
    amount: string;
  }[];
};

const VestingPlanModal: React.FC<WhitelistModalProps> = ({
  setIsOpen,
  pool_pda,
  decimals,
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<FormValues>({
    defaultValues: {
      vestingPlan: [],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "vestingPlan",
  });

  const vestingPlan = watch("vestingPlan");

  const { mutate, isLoading } = useUpdateVestingPlan(pool_pda, decimals);

  const addRound = useCallback(() => {
    append({
      amount: "",
      releaseTime: "",
    });
  }, [append]);

  useEffect(() => {
    if (!vestingPlan.length) {
      addRound();
    }
  }, [addRound, vestingPlan]);

  const handleUpdateVestingPlan = useCallback(
    async (data: FormValues) => {
      mutate(data.vestingPlan);
      setIsOpen(false);
    },
    [mutate, setIsOpen]
  );

  return (
    <VestingPlanModalStyleWrapper className="modal_overlay">
      <div className="mint_modal_box">
        <div className="mint_modal_content">
          <form
            className="h-full flex flex-col"
            onSubmit={handleSubmit(handleUpdateVestingPlan)}
          >
            <div className="modal_header">
              <h2>
                Update Vesting Plan - {vestingPlan.length}{" "}
                <span className="lowercase">rounds</span>
              </h2>
              <button
                type="button"
                className="modal_close"
                onClick={() => setIsOpen(false)}
              >
                <FiX />
              </button>
            </div>
            <div className="modal_body">
              <ul className="space-y-2">
                {fields.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-2 md:gap-3 lg:gap-4 relative"
                  >
                    <button
                      type="button"
                      className="absolute right-0 top-3 z-50"
                      onClick={() => remove(index)}
                    >
                      <FiX className="text-xl text-red-500" />
                    </button>
                    <LabelInput
                      className="w-1/2"
                      label={`Round ${index + 1}`}
                      type="datetime-local"
                      placeholder="Release Time"
                      {...register(`vestingPlan.${index}.releaseTime`, {
                        required: true,
                      })}
                    />
                    <LabelInput
                      className="w-1/2"
                      placeholder="Amount"
                      label={`Amount`}
                      {...register(`vestingPlan.${index}.amount`, {
                        required: true,
                      })}
                    />
                  </div>
                ))}
              </ul>
              <div className="flex -mt-2 pb-4">
                <button
                  type="button"
                  className="flex items-center gap-2"
                  onClick={addRound}
                >
                  <FaPlus />
                  Add Round
                </button>
              </div>
            </div>
            <div className="mt-5 self-end">
              <Button $variant="mint" type="submit" $lg>
                Update
              </Button>
              <div className="social_links"></div>
            </div>
          </form>
        </div>
      </div>
    </VestingPlanModalStyleWrapper>
  );
};

export default VestingPlanModal;
