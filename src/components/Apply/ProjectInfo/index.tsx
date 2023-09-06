/* eslint-disable @next/next/no-img-element */
"use client";
import { zeroPad } from "react-countdown";
import ProjectInfoStyleWrapper from "./ProjectInfo.style";
import Button from "@/components/commons/Button";
import ProgressBar from "@/components/commons/ProgressBar";
import Link from "next/link";

import Image from "next/image";
import dynamic from "next/dynamic";
import dayjs from "dayjs";
import DisplayNumber from "@/components/commons/DisplayNumber";
// @ts-ignore
const Countdown = dynamic(() => import("react-countdown"), { ssr: false });

type Props = {};

const ProjectInfo: React.FC<Props> = ({}) => {
  const CountdownRender = ({
    days,
    hours,
    minutes,
    seconds,
  }: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }) => {
    return (
      <div className="countdown_wrapper">
        <div className="displayedTime">
          <div className="countBox">
            <div className="countBoxItem">
              <div className="count">{zeroPad(days)}</div>
              <div className="label">
                <span>D</span>
              </div>
            </div>
            <div className="countBoxItem">
              <div className="count">{zeroPad(hours)}</div>
              <div className="label">
                <span>H</span>
              </div>
            </div>
            <div className="countBoxItem">
              <div className="count">{zeroPad(minutes)}</div>
              <div className="label">
                <span>M</span>
              </div>
            </div>
            <div className="countBoxItem">
              <div className="count">{zeroPad(seconds)}</div>
              <div className="label">
                <span>S</span>
              </div>
            </div>
          </div>
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
    <ProjectInfoStyleWrapper className="live_project_wrapper">
      <div className="game-price-item">
        <div className="game-price-inner">
          <div className="total-price">
            <div className="price-inner flex">
              <div className="image-icon">
                <div className="h-[100px] w-[100px] bg-gray-100 rounded-full flex items-center justify-center"></div>
                {/* <Image src={project.thumb} alt="icon" width={100} height={100} /> */}
              </div>
              <div className="price-details">
                <h3>
                  <a>Project title</a>
                </h3>
                <div className="dsc">PRICE (1000 TEST) = 100 FENG</div>
              </div>
            </div>
            <div className="all-raise">
              Total Raise: <DisplayNumber value={1000000000} /> FENG
            </div>
          </div>
          <div className="allocation-max text-center">
            {/* <Image
              src={`/assets/${project.currency}.png`}
              alt="currency icon"
              width={50}
              height={50}
            /> */}
            <div className="h-[50] w-[50] bg-gray-100 flex items-center justify-center"></div>
            <div className="allocation">
              Allocation: <DisplayNumber value={999} /> FENG
            </div>
          </div>
          <div className="targeted-raise">
            <div className="seles-end-text">Sale End In</div>
            <Countdown date={dayjs().toString()} renderer={CountdownRender} />
            <div className="targeted-raise-amount">
              Targeted Raise: <DisplayNumber value={1000 * 999} /> FENG
            </div>
          </div>
        </div>
        <div className="progress-inner">
          <ProgressBar progress={calculateProgress(0, 999)} />
        </div>

        <div className="project_card_footer">
          <Button $sm $variant="mint">
            Claim Token
          </Button>
          <div className="participants">Participants {5000}</div>
          <div className="social_links">
            {/* {project.socialLinks?.map((profile, i) => (
              <Link key={i} href={profile.url}>
                <img src={profile.icon} alt="social icon" />
              </Link>
            ))} */}
          </div>
        </div>
      </div>
    </ProjectInfoStyleWrapper>
  );
};

export default ProjectInfo;
