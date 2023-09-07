"use client";

import { useState } from "react";
import ApplyFormStep1 from "./ApplyFormStep1";
import ApplyProjectStyleWrapperStyle from "./ApplyProject.style";
import ApplyFormStep2 from "./ApplyFormStep2";
import ApplyFormWrapperStyle from "./ApplyForm.style";
import ApplyFormProvider, { useApplyFormContext } from "./FormProvider";
import { useApplyProjectContext } from "@/app/apply/provider";

type Props = {};

const ApplyProject: React.FC<Props> = () => {
  const { step } = useApplyProjectContext();
  return (
    <ApplyProjectStyleWrapperStyle>
      <div className="container mx-auto p-3 sm:p-0">
        <ApplyFormWrapperStyle>
          <ApplyFormProvider>
            {step === 1 && <ApplyFormStep1 />}
            {step === 2 && <ApplyFormStep2 />}
          </ApplyFormProvider>
        </ApplyFormWrapperStyle>
      </div>
    </ApplyProjectStyleWrapperStyle>
  );
};

export default ApplyProject;
