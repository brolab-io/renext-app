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
import { TProject } from "@/types/project.type";
import { useMemo } from "react";
import { formatLamportToNumber, formatToken } from "@/utils/format.util";
import useLaunchPool from "@/hooks/program/useLaunchPool";

// @ts-ignore
const Countdown = dynamic(() => import("react-countdown"), { ssr: false });

const LiveProject = () => {
  const { data } = useLiveProjects();
  const sliderSettings = {
    dots: true,
    arrows: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const calculateProgress = (
    remaining: number | undefined,
    allocation: number
  ) => {
    if (!remaining || !allocation) return 0;
    const progress = ((allocation - remaining) / allocation) * 100;
    return progress;
  };

  return (
    <LiveProjectStyleWrapper className="live_project_wrapper">
      <div className="container mx-auto">
        <Slider {...sliderSettings}>
          {data?.map((item, i) => {
            return <LiveProjectItem key={item.id} item={item} />;
          })}
        </Slider>
      </div>
    </LiveProjectStyleWrapper>
  );
};

type ItemProps = {
  item: TProject;
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

const LiveProjectItem: React.FC<ItemProps> = ({ item }) => {
  const { data: pool } = useLaunchPool(item.launch_pool_pda);

  const calculatedProgress = useMemo(() => {
    if (!pool) return 0;
    if (pool.status.pending || pool.status.cancelled) return 0;
    return (
      (pool.poolSize.sub(pool.poolSizeRemaining).toNumber() /
        pool.poolSize.toNumber()) *
      100
    );
  }, [pool]);

  const _price = useMemo(() => {
    if (!pool) return 0;
    return 1 / Number(item.presale_rate);
  }, [item.presale_rate, pool]);

  const _targetedRaise = useMemo(() => {
    if (!pool) return 0;
    return formatLamportToNumber(pool.poolSize.toString()) * _price;
  }, [_price, pool]);

  const _totalRaise = useMemo(() => {
    if (!pool) return 0;
    return pool?.status.active || pool?.status.completed
      ? formatLamportToNumber(
          pool.poolSize.sub(pool.poolSizeRemaining).toString()
        ) * _price
      : 0;
  }, [_price, pool]);

  const _allocation = useMemo(() => {
    if (!pool) return 0;
    return formatLamportToNumber(
      pool?.poolSize.toString(),
      pool.tokenMintDecimals
    );
  }, [pool]);

  return (
    <SliderItem>
      <Link href={`/project/${item.slug || item.launch_pool_pda}`}>
        <div className="game-price-item">
          <div className="game-price-inner">
            <div className="total-price">
              <div className="flex price-inner mb-11 md:mb-5">
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
                Total Raise:{" "}
                {pool ? (
                  <DisplayNumber value={_totalRaise}>
                    {item.currency_address.toUpperCase()}
                  </DisplayNumber>
                ) : null}
              </div>
            </div>
            <div className="text-center allocation-max">
              <Image
                src={`/assets/${item.currency_address.toLowerCase()}.png`}
                alt="icon"
                width={50}
                height={50}
              />
              <div className="allocation">
                Allocation: <DisplayNumber value={_allocation} />
              </div>
            </div>
            <div className="targeted-raise">
              <div className="seles-end-text">Token Unlocked In</div>
              <Countdown
                date={item.token_unlock_date.toString()}
                renderer={CountdownRender}
              />

              <div className="targeted-raise-amount">
                Targeted Raise:{" "}
                <DisplayNumber value={_targetedRaise}>
                  {item.currency_address.toUpperCase()}
                </DisplayNumber>
              </div>
            </div>
          </div>
          <div className="progress-inner">
            <ProgressBar progress={calculatedProgress} />
          </div>

          {/* hover */}
          <CardHover />
        </div>
      </Link>
    </SliderItem>
  );
};

export default LiveProject;
