/* eslint-disable @next/next/no-img-element */
"use client";
import { zeroPad } from "react-countdown";
import ProjectInfoStyleWrapper from "./ProjectInfo.style";
import Button from "@/components/commons/Button";
import ProgressBar from "@/components/commons/ProgressBar";
import Link from "next/link";
import useProject from "@/hooks/useProject";
import Image from "next/image";
import dynamic from "next/dynamic";
import dayjs from "dayjs";
import DisplayNumber from "@/components/commons/DisplayNumber";
// @ts-ignore
const Countdown = dynamic(() => import("react-countdown"), { ssr: false });

type Props = {
  project: ReturnType<typeof useProject>["data"];
};

const ProjectInfo: React.FC<Props> = ({ project }) => {
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

  const calculateProgress = (
    remaining: number | undefined,
    allocation: number
  ) => {
    if (!remaining || !allocation) return 0;
    const progress = ((allocation - remaining) / allocation) * 100;
    return progress;
  };
  if (!project) return null;

  return (
    <ProjectInfoStyleWrapper className="live_project_wrapper">
      <div className="game-price-item">
        <div className="game-price-inner">
          <div className="total-price">
            <div className="price-inner flex">
              <div className="image-icon">
                <Image
                  src={project.thumb}
                  alt="icon"
                  width={100}
                  height={100}
                />
              </div>
              <div className="price-details">
                <h3>
                  <a>{project?.title}</a>
                </h3>
                <div className="dsc">
                  PRICE (
                  {
                    project.info.find((el) => el.title === "Token Info")
                      ?.tokenInfo[1].text
                  }
                  ) = {project.price} {project.currency.toUpperCase()}
                </div>
              </div>
            </div>
            <div className="all-raise">
              Total Raise:{" "}
              <DisplayNumber
                value={
                  project.price *
                  (project.allocation - (project.remaining || 0))
                }
              />{" "}
              {project.currency.toUpperCase()}
            </div>
          </div>
          <div className="allocation-max text-center">
            <Image
              src={`/assets/${project.currency}.png`}
              alt="currency icon"
              width={50}
              height={50}
            />
            <div className="allocation">
              Allocation: <DisplayNumber value={project.allocation} />{" "}
              {project.symbol.toUpperCase()}
            </div>
          </div>
          <div className="targeted-raise">
            <div className="seles-end-text">Sale End In</div>
            <Countdown
              date={dayjs(project.saleEnd * 1000).toString()}
              renderer={CountdownRender}
            />
            <div className="targeted-raise-amount">
              Targeted Raise:{" "}
              <DisplayNumber value={project.price * project.allocation} />{" "}
              {project.currency.toUpperCase()}
            </div>
          </div>
        </div>
        <div className="progress-inner">
          <ProgressBar
            progress={calculateProgress(project.remaining, project.allocation)}
          />
        </div>

        <div className="project_card_footer">
          <Button $sm>Claim Token</Button>
          {project.participants ? (
            <div className="participants">
              Participants {project.participants}
            </div>
          ) : null}
          <div className="social_links">
            {project.socialLinks?.map((profile, i) => (
              <Link key={i} href={profile.url}>
                <img src={profile.icon} alt="social icon" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </ProjectInfoStyleWrapper>
  );
};

export default ProjectInfo;
