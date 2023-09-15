"use client";
import useCreateLaunchpad from "@/hooks/program/useCreateLaunchpad";
import dayjs from "dayjs";
import { useContext, createContext, PropsWithChildren, useState } from "react";

type ContextState = {
  step: number;
  totalStep: number;
  goToNextStep: () => void;
  goToPrevStep: () => void;
  setStep: (step: number) => void;
  formValues: Partial<ApplyFormValues>;
  updateFormValues: (values: Partial<ApplyFormValues>) => void;
  onSubmit: (data: ApplyFormValues) => void;
};

const Context = createContext<ContextState>({} as ContextState);

export const useApplyProjectContext = () => useContext(Context);

export type ApplyFormValues = {
  // Database data
  name: string;
  project_description: string;
  project_category: string;
  project_website: string;
  project_email: string;
  project_logo_url: string;
  project_banner_url: string;

  // Onchain data
  token_address: string;
  token_sale_amount: string;
  minimum_token_amount: string;
  maximum_token_amount: string;
  presale_rate: string;
  token_unlock_date: string;
  token_decimals: number;
  token_symbol: string;
  campaign_type: string;
  currency: "RENEC" | "REUSD";
  currency_address: string;
};

const Provider: React.FC<PropsWithChildren> = ({ children }) => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState<Partial<ApplyFormValues>>({
    token_decimals: 9,
    // yyyy/mm/ddThh:mm
    token_unlock_date: "",
    project_category: "Others",
    project_description: "# PROJECT DESCRIPTION\n",
    currency_address: "RENEC",
  });
  const totalStep = 3;

  const { isLoading, mutate } = useCreateLaunchpad();

  const onSubmit = (data: ApplyFormValues) => {
    console.log("Submit apply project form with data: ", data);
    return;
    mutate(data);
  };

  const goToNextStep = () => {
    if (step < totalStep) {
      setStep(step + 1);
    }
  };
  const goToPrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const updateFormValues = (values: Partial<ApplyFormValues>) => {
    setFormValues((prevState) => ({
      ...prevState,
      ...values,
    }));
  };

  return (
    <Context.Provider
      value={{
        step,
        totalStep,
        goToNextStep,
        goToPrevStep,
        setStep,
        formValues,
        updateFormValues,
        onSubmit,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
