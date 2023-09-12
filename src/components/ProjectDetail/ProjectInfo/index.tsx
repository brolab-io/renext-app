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
import { TProject } from "@/types/project.type";
import { formatLamportToNumber, formatToken } from "@/utils/format.util";
import { useMemo } from "react";
import { BN } from "@project-serum/anchor";
// @ts-ignore
const Countdown = dynamic(() => import("react-countdown"), { ssr: false });

type Props = {
  project: TProject;
};

const ProjectInfo: React.FC<Props> = ({ project }) => {
  const { data: pool } = useProject(project.launch_pool_pda);

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

  const calculateProgress = useMemo(() => {
    if (!pool) return 0;
    if (pool.status.pending || pool.status.cancelled) return 0;
    return (
      (pool.poolSize.sub(pool.poolSizeRemaining).toNumber() /
        pool.poolSize.toNumber()) *
      100
    );
  }, [pool]);

  const _price = useMemo(() => {
    return 1 / Number(project.presale_rate);
  }, [project.presale_rate]);

  const _targetedRaise = useMemo(() => {
    return (_price * Number(project.token_sale_amount as any)).toString();
  }, [_price, project.token_sale_amount]);

  return (
    <ProjectInfoStyleWrapper className="live_project_wrapper">
      <div className="game-price-item">
        <div className="game-price-inner">
          <div className="total-price">
            <div className="flex price-inner">
              <div className="image-icon">
                <img
                  src={project.project_logo_url}
                  alt="icon"
                  className="h-[100px] w-[100px]"
                />
              </div>
              <div className="price-details">
                <h3>
                  <a>{project.name}</a>
                </h3>
                <div className="dsc">
                  PRICE ({"N/A"}) = {_price.toLocaleString()}{" "}
                  {project.currency_address.toUpperCase()}
                </div>
                <div>
                  Project website:{" "}
                  {project.project_website ? (
                    <Link href={project.project_website} target="_blank">
                      {project.project_website}
                    </Link>
                  ) : (
                    "N/A"
                  )}
                </div>
              </div>
            </div>
            <div className="all-raise">
              Total Raise:{" "}
              <DisplayNumber
                value={
                  pool?.status.active || pool?.status.completed
                    ? formatLamportToNumber(
                        pool?.poolSize.sub(pool?.poolSizeRemaining).mul(_price),
                        project.token_decimals
                      )
                    : 0
                }
              />
              {project.currency_address.toUpperCase()}
            </div>
          </div>
          <div className="text-center allocation-max">
            <Image
              src={`/assets/${project.currency_address.toLowerCase()}.png`}
              alt="currency icon"
              width={50}
              height={50}
            />
            <div className="allocation">
              Allocation:{" "}
              <DisplayNumber
                value={formatLamportToNumber(
                  project.token_sale_amount,
                  project.token_decimals
                ).toLocaleString()}
              />{" "}
            </div>
          </div>
          <div className="targeted-raise">
            <div className="seles-end-text">Sale End In</div>
            <Countdown
              date={dayjs(project.token_unlock_date).toString()}
              renderer={CountdownRender}
            />
            <div className="targeted-raise-amount">
              Targeted Raise:{" "}
              <DisplayNumber value={formatLamportToNumber(_targetedRaise)} />{" "}
              {project.currency_address.toUpperCase()}
            </div>
          </div>
        </div>
        <div className="progress-inner">
          <ProgressBar progress={calculateProgress} />
        </div>

        <div className="project_card_footer">
          <Button $sm $variant="mint">
            Claim Token
          </Button>
          {/* {project.participants ? (
            <div className="participants">Participants {project.participants}</div>
          ) : null} */}
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
