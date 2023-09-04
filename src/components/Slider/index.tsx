"use client";
import React from "react";
import { SliderWrapper, SliderItemWrapper } from "./Slider.style";
import clsx from "clsx";
import { Settings } from "react-slick";

type SliderProps = {
  children: React.ReactNode;
  className?: string;
} & Settings;

const Slider: React.FC<SliderProps> = ({ children, className, ...props }) => {
  return (
    <SliderWrapper className={clsx("slick__slider", className)} {...props}>
      {children}
    </SliderWrapper>
  );
};

type SliderItemProps = {
  children: React.ReactNode;
  className?: string;
};

const SliderItem: React.FC<SliderItemProps> = ({ children, className }) => {
  return (
    <SliderItemWrapper className={clsx("slick__slider__item", className)}>
      {children}
    </SliderItemWrapper>
  );
};

export { Slider, SliderItem };
