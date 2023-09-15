"use client";
import { SectionTitle, SectionTitleWrapper } from "@/components/commons/SectionTitle";
import TutorialStyleWrapper from "./Tutorial.style";
import Button from "@/components/commons/Button";
import { FiChevronRight } from "react-icons/fi";
import Image from "next/image";

const data = [
  {
    icon: "/assets/participate-image.png",
    iconWidth: 50,
    iconHeight: 100,
    title: "Submit KYC",
    text: "Project submit KYC information",
  },
  {
    icon: "/assets/participate-image2.png",
    iconWidth: 77,
    iconHeight: 100,
    title: "Verify Wallet",
    text: "Verify wallet and set the rules for the project",
  },
  {
    icon: "/assets/participate-image3.png",
    iconWidth: 77,
    iconHeight: 100,
    title: "Start Launch",
    text: "Start the launch and get the BUMP",
  },
];

const Tutorial = () => {
  return (
    <TutorialStyleWrapper className="px-5 sm:px-0">
      <div className="container mx-auto">
        <SectionTitleWrapper>
          <SectionTitle title="HOW TO PARTICIPATE" subtitle="3 EASY STEPS" />

          <Button
            onClick={() => {
              window.open("https://fbff1h5dwf5.typeform.com/to/WkAeieJn", "_blank");
            }}
            $sm
            $variant="outline"
            target="_blank"
          >
            Verify KYC <FiChevronRight />
          </Button>
        </SectionTitleWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-3 ">
          {data?.map((step, i) => (
            <div key={i} className="">
              <div className="participate-item flex">
                <div className="number-image">
                  <Image
                    src={step.icon}
                    alt="Participate icon"
                    width={step.iconWidth}
                    height={step.iconHeight}
                  />
                </div>
                <div className="participate-info">
                  <h4 className="mb-10">{step.title}</h4>
                  <p className="description">{step.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </TutorialStyleWrapper>
  );
};

export default Tutorial;
