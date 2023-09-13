import "@uiw/react-md-editor/markdown-editor.css";
import { useState } from "react";
import Button from "@/components/commons/Button";
import { Controller, useForm } from "react-hook-form";
import { ApplyFormValues, useApplyProjectContext } from "@/app/apply/provider";
import dynamic from "next/dynamic";
import { FiCheck } from "react-icons/fi";
import Link from "next/link";
import clsx from "clsx";
import { toast } from "react-toastify";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-[300px]">
      <p>Loading Markdown Editor...</p>
    </div>
  ),
});

type Props = {};

type Form3 = Pick<ApplyFormValues, "project_description">;

const ApplyFormStep3: React.FC<Props> = ({}) => {
  const { goToPrevStep, formValues, updateFormValues, onSubmit } = useApplyProjectContext();
  const [isChecked, setChecked] = useState(false);
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
    watch,
  } = useForm<Form3>({
    defaultValues: formValues,
  });
  const onValidatedAndSubmit = (data: Form3) => {
    if (!data.project_description) {
      setError("project_description", {
        type: "required",
        message: "Project description is required",
      });
      return;
    }
    if (data.project_description.length < 80) {
      setError("project_description", {
        type: "minLength",
        message: "Project description must be at least 80 characters",
      });
      return;
    }
    // Limit to 1000 characters
    if (data.project_description.length > 10000) {
      setError("project_description", {
        type: "maxLength",
        message: "Project description must be at most 10000 characters",
      });
      return;
    }

    updateFormValues(data);
    onSubmit(formValues as ApplyFormValues);
  };

  const projectDescription = watch("project_description");

  return (
    <form onSubmit={handleSubmit(onValidatedAndSubmit)}>
      <div className="py-6 kyc_form lg:py-10">
        <div className="">
          <h3 className="from_title">PROJECT DESCRIPTION</h3>
          <Controller
            name="project_description"
            render={({ field: { onChange, value } }) => (
              <div data-color-mode="dark" className="relative">
                <div className="absolute -bottom-5 right-4 z-50">
                  <p className="text-xs text-gray-400">
                    <span
                      className={clsx(
                        projectDescription.length < 80 ? "text-red-400" : "text-green-400"
                      )}
                    >
                      {projectDescription?.length || 0}
                    </span>{" "}
                    / 10000
                  </p>
                </div>
                <div className="wmde-markdown-var"> </div>
                <MDEditor height={300} value={value} onChange={onChange} preview="edit" />
              </div>
            )}
            control={control}
          />
          {errors.project_description ? (
            <p className="mt-2 text-xs !text-red-400">{errors.project_description.message}</p>
          ) : null}
        </div>
        <div className={`kyc_trems_condition ${isChecked ? "active" : ""}`}>
          <span className={clsx("checkmark")} onClick={() => setChecked(!isChecked)}>
            {" "}
            <FiCheck />{" "}
          </span>
          <input
            type="checkbox"
            id="agrredCheck"
            required
            onChange={() => setChecked(!isChecked)}
          />
          <span>
            I accept the
            <Link href="#">Term of Conditions</Link>
            and
            <Link href="#">Privacy Policy</Link>
          </span>
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
    </form>
  );
};

export default ApplyFormStep3;
