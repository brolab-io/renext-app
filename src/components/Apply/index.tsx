"use client";

import { useState } from "react";
import ApplyFormStep1 from "./ApplyFormStep1";
import ApplyProjectStyleWrapperStyle from "./ApplyProject.style";
import ApplyFormStep2 from "./ApplyFormStep2";
import ApplyFormWrapperStyle from "./ApplyForm.style";
import ApplyFormProvider, { useApplyFormContext } from "./FormProvider";
import { useApplyProjectContext } from "@/app/apply/provider";
import ApplyFormStep3 from "./ApplyFormStep3";

type Props = {};

const ApplyProject: React.FC<Props> = () => {
  const { step } = useApplyProjectContext();
  return (
    <ApplyProjectStyleWrapperStyle>
      <div className="container p-3 mx-auto sm:p-0">
        <ApplyFormWrapperStyle>
          <ApplyFormProvider>
            {step === 1 && <ApplyFormStep1 />}
            {step === 2 && <ApplyFormStep2 />}
            {step === 3 && <ApplyFormStep3 />}
          </ApplyFormProvider>
        </ApplyFormWrapperStyle>
      </div>
    </ApplyProjectStyleWrapperStyle>
  );
};

export default ApplyProject;
