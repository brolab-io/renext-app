import { FiCheck } from "react-icons/fi";
import Button from "@/components/commons/Button";
import LabelInput from "@/components/commons/Form/LabelInput";
import { ApplyFormValues, useApplyProjectContext } from "@/app/apply/provider";
import { Controller, useForm } from "react-hook-form";
import { getProjectCategories } from "@/utils/data.util";
import clsx from "clsx";

type Props = {};

type Form1 = Pick<
  ApplyFormValues,
  | "name"
  | "project_logo_url"
  | "project_banner_url"
  | "project_email"
  | "project_website"
  | "project_category"
>;

const categories = getProjectCategories();

const ApplyFormStep1: React.FC<Props> = ({}) => {
  const { goToNextStep, updateFormValues, formValues } = useApplyProjectContext();

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<Form1>({
    defaultValues: formValues,
  });

  const onSubmit = (data: Form1) => {
    updateFormValues(data);
    goToNextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
                  minLength: {
                    value: 3,
                    message: "Project name must be at least 3 characters",
                  },
                })}
                error={errors.name?.message}
                required
              />

              <LabelInput
                label="Project Logo *"
                placeholder="e.g.  https://renext.xyz/logo.png"
                {...register("project_logo_url", {
                  required: "Project logo is required",
                  pattern: {
                    value: /^https?:\/\/.*\.(?:png|jpg|gif|svg|jpeg)$/i,
                    message: "Project logo must be a valid image url",
                  },
                })}
                error={errors.project_logo_url?.message}
                required
              />

              <LabelInput
                label="Project Banner *"
                placeholder="e.g.  https://renext.xyz/banner.png"
                {...register("project_banner_url", {
                  required: "Project banner is required",
                  pattern: {
                    value: /^https?:\/\/.*\.(?:png|jpg|gif|svg|jpeg)$/i,
                    message: "Project logo must be a valid image url",
                  },
                })}
                error={errors.project_banner_url?.message}
                required
              />

              <LabelInput
                label="Email *"
                placeholder="e.g.  contact@renext.xyz"
                {...register("project_email", {
                  required: "Project email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Project email must be a valid email",
                  },
                })}
                error={errors.project_email?.message}
                required
              />

              <LabelInput
                label="Project Website"
                placeholder="e.g.  https://renext.xyz"
                {...register("project_website", {
                  pattern: {
                    // just check if it's a valid domain
                    value: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                    message: "Project website must be a valid url",
                  },
                })}
                error={errors.project_website?.message}
                required
              />
            </div>
          </div>
          <div className="lg:col-span-5 lg:pt-[68px]">
            <div className="custom_label">Select Your Project Type *</div>
            <Controller
              control={control}
              name="project_category"
              render={({ field: { onChange, value } }) => (
                <div className="grid grid-cols-2 gap-2 md:gap-3 lg:gap-4 mt-2">
                  {categories.map((category) => (
                    <div className="kyc_radio_sect" key={category}>
                      <div
                        className={clsx(`kyc_radio_btn`, value === category && "active")}
                        id={category}
                        onClick={() => {
                          onChange(category);
                        }}
                      >
                        <label>
                          {category}
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
                  ))}
                </div>
              )}
            />
          </div>
        </div>

        <div className="flex justify-between">
          <div />
          <Button type="submit" className="!max-w-[460px]" href="" $variant="blue">
            CONTINUE
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ApplyFormStep1;
