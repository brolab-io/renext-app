import { useState } from "react";
import { FiCheck } from "react-icons/fi";
import { FaListCheck, FaTimeline } from "react-icons/fa6";
import Link from "next/link";
import Button from "@/components/commons/Button";
import { useApplyFormContext } from "../FormProvider";
import LabelInput from "@/components/commons/Form/LabelInput";
import { Controller } from "react-hook-form";
import { useApplyProjectContext } from "@/app/apply/provider";

type Props = {};

const ApplyFormStep2: React.FC<Props> = ({}) => {
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
      <div className="kyc_form py-6 lg:py-10">
        <div className="grid lg:grid-cols-12 gap-4 md:gap-8 lg:gap-12 xl:gap-16">
          <div className="lg:col-span-7">
            <h3 className="from_title">LAUNCHPAD INFORMATION</h3>

            <div className="kyc_user_form">
              <div className="flex gap-1 md:gap-2">
                <LabelInput
                  label="Token Address * (Token you actually own)"
                  placeholder="e.g.  GFxaSoaQsrY35DCePxAVFpgeaEeucPGH6rt9j67LtzoS"
                  {...register("token_address", {
                    required: "Token address is required",
                  })}
                  error={errors.token_address?.message}
                  className="w-full"
                />
                <LabelInput
                  label="Decimals *"
                  placeholder="e.g.  9"
                  {...register("token_decimals", {
                    required: "Token decimals is required",
                  })}
                  error={errors.token_address?.message}
                  className="max-w-[120px]"
                />
              </div>

              <LabelInput
                label="Token Pre-sale Amount *"
                placeholder="e.g.  1000000"
                {...register("token_sale_amount", {
                  required: "Token pre-sale amount is required",
                })}
                error={errors.token_sale_amount?.message}
              />

              <div className="form-group w-full">
                <label>Currency* (User will buy your token by)</label>
                <select
                  className="block"
                  defaultValue="RENEC"
                  {...register("currency_address", {
                    required: "Currency is required",
                  })}
                >
                  <option value="RENEC">RENEC</option>
                  <option value="REUSD">REUSD</option>
                </select>
              </div>

              <LabelInput
                label={`Pre-sale Rate * (How many tokens per ${currency})`}
                placeholder={`e.g.  100 (1 ${currency} = 100 your tokens)`}
                {...register("presale_rate", {
                  required: "Pre-sale rate is required",
                })}
                error={errors.presale_rate?.message}
              />

              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                <LabelInput
                  label="Minimum Token Buy *"
                  placeholder="e.g.  1"
                  {...register("minimum_token_amount", {
                    required: "Minimum token buy is required",
                  })}
                  error={errors.minimum_token_amount?.message}
                />

                <LabelInput
                  label="Maximum Token Buy *"
                  placeholder="e.g.  1000"
                  {...register("maximum_token_amount", {
                    required: "Maximum token buy is required",
                  })}
                  error={errors.maximum_token_amount?.message}
                />
              </div>

              <div className={`kyc_trems_condition ${isChecked ? "active" : ""}`}>
                <span className="checkmark" onClick={() => setChecked(!isChecked)}>
                  {" "}
                  <FiCheck />{" "}
                </span>
                <input type="checkbox" id="agrredCheck" onChange={() => setChecked(!isChecked)} />
                <span>
                  I accept the
                  <Link href="#">Term of Conditions</Link>
                  and
                  <Link href="#">Privacy Policy</Link>
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 lg:pt-[68px] space-y-4 lg:space-y-6">
            <div className="">
              <div className="custom_label">Select Your Launchpad Type</div>
              <Controller
                name="campaign_type"
                render={({ field: { onChange, value } }) => (
                  <div className="kyc_radio_sect">
                    <div
                      className={`kyc_radio_btn ${value === "whitelist" ? "active" : ""} `}
                      id="whitelist"
                      onClick={() => onChange("whitelist")}
                    >
                      <label>
                        WHITELIST
                        <input
                          type="radio"
                          name="radio"
                          onChange={() => onChange("whitelist")}
                          id="whitelist"
                        />
                        <span className="checkmark">
                          <FiCheck />
                        </span>
                      </label>
                      <div className="kyc_icon">
                        <FaListCheck />
                        {/* <img src={nidIcon.src} alt="icon" className="imf-fluid" /> */}
                      </div>
                    </div>
                    <div
                      className={`kyc_radio_btn ${value === "fairlaunch" ? "active" : ""} `}
                      id="fairlaunch"
                      onClick={() => onChange("fairlaunch")}
                    >
                      <label>
                        FAIR LAUNCH
                        <input
                          type="radio"
                          checked
                          name="radio"
                          onChange={() => onChange("fairlaunch")}
                          id="fairlaunch"
                        />
                        <span className="checkmark">
                          <FiCheck />
                        </span>
                      </label>
                      <div className="kyc_icon">
                        <FaTimeline />
                        {/* <img src={passportIcon.src} alt="icon" className="imf-fluid" /> */}
                      </div>
                    </div>
                  </div>
                )}
                control={control}
                defaultValue="whitelist"
              />
            </div>

            <LabelInput
              className="pt-[51px]"
              label="Unlocked Date *"
              type="datetime-local"
              {...register("token_unlock_date", {
                required: "Pre-sale rate is required",
              })}
            />
          </div>
        </div>

        <div className="flex justify-between">
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

export default ApplyFormStep2;
