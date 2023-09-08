"use client";

import useCreateLaunchpad from "@/hooks/program/useCreateLaunchpad";
import dayjs from "dayjs";
import { PropsWithChildren } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

type FormValues = {
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
  campaign_type: string;
  currency: "RENEC" | "REUSD";
  currency_address: string;
};

type Props = {};

export const useApplyFormContext = () => useFormContext<FormValues>();

const ApplyFormProvider: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  const methods = useForm<FormValues>({
    defaultValues: {
      token_decimals: 9,
      // yyyy/mm/ddThh:mm
      token_unlock_date: dayjs().format().substring(0, "yyyy/mm/ddThh:mm".length),
      project_category: "DEFI",
      project_description: "# Feng",
    },
  });

  const { isLoading, mutate } = useCreateLaunchpad();

  const onSubmit = (data: FormValues) => {
    console.log("Submit apply project form with data: ", data);
    mutate(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default ApplyFormProvider;
