import { FiCheck } from "react-icons/fi";
import Button from "@/components/commons/Button";
import LabelInput from "@/components/commons/Form/LabelInput";
import { useApplyFormContext } from "../FormProvider";
import { useApplyProjectContext } from "@/app/apply/provider";

type Props = {};

const ApplyFormStep1: React.FC<Props> = ({}) => {
  const { goToNextStep } = useApplyProjectContext();
  const {
    register,
    formState: { errors },
  } = useApplyFormContext();

  return (
    <div>
      <div className="kyc_form py-6 lg:py-10">
        <div className="grid lg:grid-cols-12 gap-4 md:gap-8 lg:gap-12 xl:gap-16">
          <div className="lg:col-span-7">
            <h3 className="from_title">PROJECT INFORMATION</h3>

            <div className="kyc_user_form">
              <LabelInput
                label="Project Name *"
                placeholder="e.g.  The New Renext Project"
                {...register("name", {
                  required: "Project name is required",
                })}
                error={errors.name?.message}
              />

              <LabelInput
                label="Project Logo *"
                placeholder="e.g.  https://renext.xyz/logo.png"
                {...register("project_logo_url", {
                  required: "Project logo is required",
                })}
              />

              <LabelInput
                label="Project Banner *"
                placeholder="e.g.  https://renext.xyz/banner.png"
                {...register("project_banner_url", {
                  required: "Project banner is required",
                })}
                error={errors.project_banner_url?.message}
              />

              <LabelInput
                label="Email *"
                placeholder="e.g.  contact@renext.xyz"
                {...register("project_email", {
                  required: "Project email is required",
                })}
                error={errors.project_email?.message}
              />

              <LabelInput
                label="Project Website"
                placeholder="e.g.  https://renext.xyz"
                {...register("project_website", {})}
                error={errors.project_website?.message}
              />
            </div>
          </div>
          <div className="lg:col-span-5 lg:pt-[68px]">
            <div className="custom_label">Select Your Project Type *</div>
            <div className="kyc_radio_sect">
              <div className={`kyc_radio_btn active`} id="DEFI">
                <label>
                  DEFI
                  <input type="radio" name="radio" id="whitelist" />
                  <span className="checkmark">
                    <FiCheck />
                  </span>
                </label>
                <div className="kyc_icon">
                  {/* <FaListCheck /> */}
                  {/* <img src={nidIcon.src} alt="icon" className="imf-fluid" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <div />
          <Button
            type="button"
            onClick={goToNextStep}
            className="!max-w-[460px]"
            href=""
            $variant="blue"
          >
            CONTINUE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ApplyFormStep1;
