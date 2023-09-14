"use client";

/* eslint-disable @next/next/no-img-element */
import { zeroPad } from "react-countdown";
import ProjectInfoStyleWrapper from "./ProjectInfo.style";
import ProgressBar from "@/components/commons/ProgressBar";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import dayjs from "dayjs";
import DisplayNumber from "@/components/commons/DisplayNumber";
import { TProject } from "@/types/project.type";
import { formatLamportToNumber } from "@/utils/format.util";
import { useMemo } from "react";
import { BN } from "@project-serum/anchor";
import ButtonStart from "../Actions/ButtonStart";
import useLaunchPool from "@/hooks/program/useLaunchPool";
import { useDemonAdapter } from "@/hooks/useDemonAdapter";
import ButtonComplete from "../Actions/ButtonComplete";
import ButtonClaim from "../Actions/ButtonClaim";
import ButtonWithdraw from "../Actions/ButtonWithdraw";
import ButtonUpdateVestingPlan from "../Actions/ButtonUpdateVestingPlan";
// @ts-ignore
const Countdown = dynamic(() => import("react-countdown"), { ssr: false });

type Props = {
  project: TProject;
  launchPool: ReturnType<typeof useLaunchPool>["data"] | undefined;
};

const ProjectInfo: React.FC<Props> = ({ project, launchPool: pool }) => {
  console.log({ pool });
  const { anchorWallet } = useDemonAdapter();

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
    return (pool.poolSize.sub(pool.poolSizeRemaining).toNumber() / pool.poolSize.toNumber()) * 100;
  }, [pool]);

  const _price = useMemo(() => {
    if (!pool) return 0;
    return 1 / (Number(project.presale_rate) * 100);
  }, [pool, project.presale_rate]);

  const _targetedRaise = useMemo(() => {
    if (!pool || pool.rate.eq(0)) return 0;
    return formatLamportToNumber(pool.poolSize.div(pool.rate.mul(new BN(100))));
  }, [pool]);

  const _totalRaise = useMemo(() => {
    if (!pool) return 0;
    return pool?.status.active || pool?.status.completed
      ? formatLamportToNumber(
            pool.poolSize
            .sub(pool.poolSizeRemaining)
            .div(pool.rate.mul(new BN(100))),
          pool.tokenMintDecimals
        )
      : 0;
  }, [pool]);

  const _allocation = useMemo(() => {
    if (!pool) return 0;
    return formatLamportToNumber(pool?.poolSize.toString(), pool.tokenMintDecimals);
  }, [pool]);

  return (
    <ProjectInfoStyleWrapper className="live_project_wrapper">
      <div className="game-price-item">
        <div className="game-price-inner">
          <div className="total-price">
            <div className="flex price-inner">
              <div className="image-icon">
                <img src={project.project_logo_url} alt="icon" className="h-[100px] w-[100px]" />
              </div>
              <div className="price-details">
                <h3>
                  <a>{project.name}</a>
                </h3>
                <div className="dsc">
                  PRICE 1 {project.token_symbol} = {_price} {project.currency_address.toUpperCase()}
                </div>
                <div>
                  Project website:{" "}
                  {project.project_website ? (
                    <Link
                      href={
                        project.project_website.startsWith("http")
                          ? project.project_website
                          : `//${project.project_website}`
                      }
                      target="_blank"
                    >
                      {project.project_website}
                    </Link>
                  ) : (
                    project.token_symbol
                  )}
                </div>
              </div>
            </div>
            <div className="all-raise">
              Total Raise:{" "}
              {pool ? (
                <DisplayNumber value={_totalRaise}>
                  {project.currency_address.toUpperCase()}
                </DisplayNumber>
              ) : null}
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
              Allocation: <DisplayNumber value={_allocation} />
            </div>
          </div>
          <div className="targeted-raise">
            <div className="seles-end-text">Token Unlocked In</div>
            <Countdown
              date={dayjs(project.token_unlock_date).toString()}
              renderer={CountdownRender}
            />
            <div className="targeted-raise-amount">
              Targeted Raise:{" "}
              <DisplayNumber value={_targetedRaise}>
                {project.currency_address.toUpperCase()}
              </DisplayNumber>
            </div>
          </div>
        </div>
        <div className="progress-inner">
          <ProgressBar progress={calculateProgress} />
        </div>

        <div className="project_card_footer">
          {pool && !!pool.status.completed ? (
            <ButtonClaim
              pool={project.launch_pool_pda}
              tokenMint={pool.tokenMint.toString()}
              disabled={dayjs().isBefore(dayjs(Number(pool?.unlockDate) * 1000))}
            />
          ) : null}

          {/* {project.participants ? (
            <div className="participants">Participants {project.participants}</div>
          ) : null} */}
          <div className="social_links">
            {pool && anchorWallet?.publicKey.equals(pool?.authority) ? (
              !!pool.status.pending ? (
                <>
                  <ButtonUpdateVestingPlan pool={project.launch_pool_pda} />
                  <ButtonStart
                    pool={project.launch_pool_pda}
                    withWhitelist={!!pool.poolType.whiteList}
                  />
                </>
              ) : !!pool.status.active ? (
                <ButtonComplete pool={project.launch_pool_pda} />
              ) : !!pool.status.completed ? (
                <ButtonWithdraw
                  pool={project.launch_pool_pda}
                  currency={Object.keys(pool.currency)[0]}
                />
              ) : null
            ) : null}

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
