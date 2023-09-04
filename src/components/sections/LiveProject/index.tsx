"use client";
import { zeroPad } from "react-countdown";
import LiveProjectStyleWrapper from "./Project.style";

import Link from "next/link";
import Image from "next/image";

import useLiveProject from "@/hooks/useLiveProject";
import dynamic from "next/dynamic";
import { Slider, SliderItem } from "@/components/Slider";
import ProgressBar from "@/components/commons/ProgressBar";
import CardHover from "@/components/commons/CardHover";

// @ts-ignore
const Countdown = dynamic(() => import("react-countdown"), { ssr: false });

const LiveProject = () => {
  const { data } = useLiveProject();
  const sliderSettings = {
    dots: true,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const CountdownRender = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed?: boolean;
  }) => {
    return (
      <div className="countdown_wrapper">
        <div>
          {zeroPad(days)}
          <span>D</span>
        </div>
        <div>
          {zeroPad(hours)}
          <span>H</span>
        </div>
        <div>
          {zeroPad(minutes)}
          <span>M</span>
        </div>
        <div>
          {zeroPad(seconds)}
          <span>S</span>
        </div>
      </div>
    );
  };

  return (
    <LiveProjectStyleWrapper className="live_project_wrapper">
      <div className="container mx-auto">
        <Slider {...sliderSettings}>
          {data?.map((item, i) => (
            <SliderItem key={i}>
              <div className="game-price-item">
                <div className="game-price-inner">
                  <div className="total-price">
                    <div className="price-inner flex mb-11 md:mb-5">
                      <div className="image-icon">
                        <Link href="/projects-details-1">
                          <Image
                            src={item.projectIcon}
                            alt="icon"
                            width={100}
                            height={100}
                          />
                        </Link>
                      </div>
                      <div className="price-details">
                        <h3 className="mb-4">
                          <Link href="/projects-details-1">{item.title}</Link>
                        </h3>
                        <div className="dsc">PRICE (DDO) = {item.price}</div>
                      </div>
                    </div>
                    <div className="all-raise">
                      Total Raise {item.totalRise}
                    </div>
                  </div>
                  <div className="allocation-max text-center">
                    <Image
                      src={item.coinIcon}
                      alt="icon"
                      width={50}
                      height={50}
                    />
                    <div className="allocation">
                      Allocation: {item.allocation}
                    </div>
                  </div>
                  <div className="targeted-raise">
                    <div className="seles-end-text">Sale End In</div>
                    <Countdown
                      date="2024-02-01T01:02:03"
                      renderer={CountdownRender}
                    />
                    <div className="targeted-raise-amount">
                      Targeted Raise {item.targetedRise}
                    </div>
                  </div>
                </div>
                <div className="progress-inner">
                  <ProgressBar progress={item.progress} />
                </div>

                {/* hover */}
                <CardHover />
              </div>
            </SliderItem>
          ))}
        </Slider>
      </div>
    </LiveProjectStyleWrapper>
  );
};

export default LiveProject;
