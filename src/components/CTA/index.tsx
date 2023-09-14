"use client";
import Button from "../commons/Button";
import CardHover from "../commons/CardHover";
import CTAStyleWrapper from "./CTA.style";

const CTA = () => {
  return (
    <CTAStyleWrapper>
      <div className="container mx-auto">
        <div className="cta-area text-center">
          <h2 className="title">
            Apply for project <br />
            incubation
          </h2>
          <div className="dsc">
            If you want to lanuch an IGO/IDO, It will be your perfect choice
          </div>
          <Button $variant="mint" $md href="/apply">
            Apply now
          </Button>
          <CardHover />
        </div>
      </div>
    </CTAStyleWrapper>
  );
};

export default CTA;
