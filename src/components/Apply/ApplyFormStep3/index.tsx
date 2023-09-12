import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

import { useState } from "react";
import Button from "@/components/commons/Button";
import { useApplyFormContext } from "../FormProvider";
import { Controller } from "react-hook-form";
import { useApplyProjectContext } from "@/app/apply/provider";
import dynamic from "next/dynamic";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-[300px]">
      <p>Loading Markdown Editor...</p>
    </div>
  ),
});

type Props = {};

const ApplyFormStep3: React.FC<Props> = ({}) => {
  const { goToPrevStep } = useApplyProjectContext();
  const [isChecked, setChecked] = useState(false);
  const {
    register,
    control,
    watch,
    formState: { errors },
  } = useApplyFormContext();

  const currency = watch("currency");

  return (
    <div>
      <div className="py-6 kyc_form lg:py-10">
        <div className="">
          <h3 className="from_title">PROJECT DESCRIPTION</h3>
          <Controller
            name="campaign_type"
            render={({ field: { onChange, value } }) => (
              <MDEditor height={300} value={value} onChange={onChange} />
            )}
            control={control}
            defaultValue="whitelist"
          />
        </div>

        <div className="flex justify-between mt-4 lg:mt-8">
          <Button
            type="button"
            onClick={goToPrevStep}
            className="!max-w-[200px]"
            href=""
            $variant="white"
          >
            BACK
          </Button>
          <Button type="submit" className="!max-w-[460px]" href="" $variant="blue">
            CREATE LAUNCHPAD
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ApplyFormStep3;
