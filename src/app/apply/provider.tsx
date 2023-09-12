"use client";
import { useContext, createContext, PropsWithChildren, useState } from "react";

type ContextState = {
  step: number;
  totalStep: number;
  goToNextStep: () => void;
  goToPrevStep: () => void;
};

const Context = createContext<ContextState>({} as ContextState);

export const useApplyProjectContext = () => useContext(Context);

const Provider: React.FC<PropsWithChildren> = ({ children }) => {
  const [step, setStep] = useState(1);
  const totalStep = 3;
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

  return (
    <Context.Provider
      value={{
        step,
        totalStep,
        goToNextStep,
        goToPrevStep,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
