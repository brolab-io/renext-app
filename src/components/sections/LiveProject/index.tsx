/* eslint-disable @next/next/no-img-element */
"use client";
import { zeroPad } from "react-countdown";
import LiveProjectStyleWrapper from "./Project.style";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Slider, SliderItem } from "@/components/Slider";
import ProgressBar from "@/components/commons/ProgressBar";
import CardHover from "@/components/commons/CardHover";
import dayjs from "dayjs";
import DisplayNumber from "@/components/commons/DisplayNumber";
import useLiveProjects from "@/hooks/useLiveProjects";
import { BN } from "@project-serum/anchor";

// @ts-ignore
const Countdown = dynamic(() => import("react-countdown"), { ssr: false });

const LiveProject = () => {
  const { data } = useLiveProjects();
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

  const calculateProgress = (remaining: number | undefined, allocation: number) => {
    if (!remaining || !allocation) return 0;
    const progress = ((allocation - remaining) / allocation) * 100;
    return progress;
  };

  return (
    <LiveProjectStyleWrapper className="live_project_wrapper">
      <div className="container mx-auto">
        <Slider {...sliderSettings}>
          {data?.map((item, i) => {
            const _price = 1 / (Number(item.presale_rate) || 1);

            return (
              <SliderItem key={i}>
                <Link href={`/project/${item.slug || item.launch_pool_pda}`}>
                  <div className="game-price-item">
                    <div className="game-price-inner">
                      <div className="total-price">
                        <div className="price-inner flex mb-11 md:mb-5">
                          <div className="image-icon">
                            <img
                              src={item.project_logo_url}
                              alt="icon"
                              className="h-[100px] w-[100px]"
                            />
                          </div>
                          <div className="price-details">
                            <h3 className="mb-4">{item.name}</h3>
                            <div className="dsc">
                              PRICE: 1 {item.token_symbol.toUpperCase()} = {_price}{" "}
                              {item.currency_address.toUpperCase()}
                            </div>
                          </div>
                        </div>
                        <div className="all-raise">
                          Total Raise: <DisplayNumber value={0} />{" "}
                          {item.currency_address.toUpperCase()}
                        </div>
                      </div>
                      <div className="allocation-max text-center">
                        <Image
                          src={`/assets/${item.currency_address}.png`}
                          alt="icon"
                          width={50}
                          height={50}
                        />
                        <div className="allocation">
                          {/* Allocation: <DisplayNumber value={item.allocation} />{" "} */}
                          {item.token_symbol.toUpperCase()}
                        </div>
                      </div>
                      <div className="targeted-raise">
                        <div className="seles-end-text">Sale End In</div>
                        <Countdown
                          date={item.token_unlock_date.toString()}
                          renderer={CountdownRender}
                        />

                        <div className="targeted-raise-amount">
                          {/* Targeted Raise: <DisplayNumber value={item.price * item.allocation} />{" "} */}
                          {item.currency_address.toUpperCase()}
                        </div>
                      </div>
                    </div>
                    <div className="progress-inner">
                      {/* <ProgressBar progress={calculateProgress(item.remaining, item.allocation)} /> */}
                    </div>

                    {/* hover */}
                    <CardHover />
                  </div>
                </Link>
              </SliderItem>
            );
          })}
        </Slider>
      </div>
    </LiveProjectStyleWrapper>
  );
};

export default LiveProject;
