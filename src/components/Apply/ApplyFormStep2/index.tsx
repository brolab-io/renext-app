import { FiCheck } from "react-icons/fi";
import { FaListCheck, FaTimeline } from "react-icons/fa6";
import Button from "@/components/commons/Button";
import LabelInput from "@/components/commons/Form/LabelInput";
import { Controller, useForm } from "react-hook-form";
import { ApplyFormValues, useApplyProjectContext } from "@/app/apply/provider";

type Props = {};

type Form2 = Pick<
  ApplyFormValues,
  | "token_address"
  | "token_decimals"
  | "token_symbol"
  | "token_sale_amount"
  | "presale_rate"
  | "currency_address"
  | "minimum_token_amount"
  | "maximum_token_amount"
  | "campaign_type"
  | "token_unlock_date"
>;

const ApplyFormStep2: React.FC<Props> = ({}) => {
  const { goToPrevStep, goToNextStep, formValues, updateFormValues } = useApplyProjectContext();
  const {
    register,
    control,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<Form2>({
    defaultValues: formValues,
  });

  const currency = watch("currency_address");
  const symbol = watch("token_symbol");

  const onSubmit = (data: Form2) => {
    updateFormValues(data);
    goToNextStep();
  };

  const renderTokenSymbol = () => {
    if (symbol) {
      return <span className="text-[#6d4afe]">{symbol}</span>;
    }
    return "token";
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="py-6 kyc_form lg:py-10">
        <div className="grid gap-4 lg:grid-cols-12 md:gap-8 lg:gap-12 xl:gap-16">
          <div className="lg:col-span-7">
            <h3 className="from_title">LAUNCHPAD INFORMATION</h3>

            <div className="kyc_user_form">
              <div className="flex gap-1 md:gap-2">
                <LabelInput
                  label="Token Address * (Token you actually own)"
                  placeholder="e.g.  GFxaSoaQsrY35DCePxAVFpgeaEeucPGH6rt9j67LtzoS"
                  {...register("token_address", {
                    required: "Token address is required",
                    minLength: {
                      value: 32,
                      message: "Token address is invalid",
                    },
                    maxLength: {
                      value: 44,
                      message: "Token address is invalid",
                    },
                  })}
                  error={errors.token_address?.message}
                  required
                  className="w-full"
                />
                <LabelInput
                  label="Decimals *"
                  placeholder="e.g.  9"
                  {...register("token_decimals", {
                    required: "Token decimals is required",
                    min: {
                      value: 0,
                      message: "Token decimals must be greater than or equal to 0",
                    },
                    max: {
                      value: 32,
                      message: "Token decimals must be less than or equal to 32",
                    },
                    pattern: {
                      // ONY NUMBER
                      value: /^[0-9]+$/,
                      message: "Token decimal must be a valid number",
                    },
                  })}
                  error={errors.token_address?.message}
                  required
                  className="max-w-[120px]"
                />
                <LabelInput
                  label="Symbol *"
                  placeholder="e.g.  REX"
                  {...register("token_symbol", {
                    required: "Token symbol is required",
                  })}
                  minLength={1}
                  maxLength={6}
                  error={errors.token_address?.message}
                  required
                  className="max-w-[120px]"
                />
              </div>

              <LabelInput
                label={<>{renderTokenSymbol()} Pre-sale Amount *</>}
                placeholder="e.g.  1000000"
                {...register("token_sale_amount", {
                  required: "Token pre-sale amount is required",
                  pattern: {
                    // ONY NUMBER AND DOT
                    value: /^[0-9.]+$/,
                    message: "Token pre-sale amount must be a valid number",
                  },
                })}
                error={errors.token_sale_amount?.message}
                required
              />

              <div className="w-full form-group">
                <label>Currency* (User will buy {renderTokenSymbol()} by)</label>
                <select
                  className="block"
                  defaultValue="RENEC"
                  {...register("currency_address", {
                    required: "Currency is required",
                  })}
                  required
                >
                  <option value="RENEC">RENEC</option>
                  <option value="REUSD">REUSD</option>
                </select>
              </div>

              <LabelInput
                label={
                  <>
                    PRE-SALE RATE * (How many {renderTokenSymbol()} per {currency})
                  </>
                }
                placeholder={`e.g.  100 (1 ${currency} = 100 ${symbol || "your tokens"})`}
                {...register("presale_rate", {
                  required: "Pre-sale rate is required",
                  pattern: {
                    // ONY NUMBER AND DOT
                    value: /^[0-9.]+$/,
                    message: "Token pre-sale rate must be a valid number",
                  },
                })}
                error={errors.presale_rate?.message}
                required
              />

              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                <LabelInput
                  label={<>Minimum {renderTokenSymbol()} Buy *</>}
                  placeholder="e.g.  1"
                  {...register("minimum_token_amount", {
                    required: "Minimum token buy is required",
                    pattern: {
                      // ONY NUMBER AND DOT
                      value: /^[0-9.]+$/,
                      message: "Token minimum amount must be a valid number",
                    },
                  })}
                  error={errors.minimum_token_amount?.message}
                  required
                />

                <LabelInput
                  label={<>Maximum {renderTokenSymbol()} Buy *</>}
                  placeholder="e.g.  1000"
                  {...register("maximum_token_amount", {
                    required: "Maximum token buy is required",
                    pattern: {
                      // ONY NUMBER AND DOT
                      value: /^[0-9.]+$/,
                      message: "Token minimum amount must be a valid number",
                    },
                  })}
                  error={errors.maximum_token_amount?.message}
                  required
                />
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
          <Button type="submit" className="!max-w-[200px]" href="" $variant="blue">
            CONTINUE
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ApplyFormStep2;
