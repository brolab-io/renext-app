/* eslint-disable @next/next/no-img-element */
'use client';
import { zeroPad } from 'react-countdown';
import ProjectInfoStyleWrapper from './ProjectInfo.style';
import Button from '@/components/commons/Button';
import ProgressBar from '@/components/commons/ProgressBar';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import dayjs from 'dayjs';
import DisplayNumber from '@/components/commons/DisplayNumber';
import { TProject } from '@/types/project.type';
import { formatToken } from '@/utils/format.util';
import { useCallback, useMemo } from 'react';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import useLaunchPool from '@/hooks/program/useLaunchPool';
import useUserPool from '@/hooks/program/useUserPool';
import useStartPool from '@/hooks/program/useStartPool';
import useCompleteLaunchPool from '@/hooks/program/useCompleteLaunchPool';
import useClaimToken from '@/hooks/program/useClaimToken';
// @ts-ignore
const Countdown = dynamic(() => import('react-countdown'), { ssr: false });

type Props = {
  project: TProject;
};

const ProjectInfo: React.FC<Props> = ({ project }) => {
  const wallet = useAnchorWallet();
  const {
    data: pool,
    isLoading,
    error,
  } = useLaunchPool(project.launch_pool_pda);
  const { data: userPool } = useUserPool(project.launch_pool_pda);
  const { mutate: startPool, isLoading: isStartingPool } = useStartPool(
    project.launch_pool_pda
  );
  const { mutate: completeLaunchPool, isLoading: isCompleting } =
    useCompleteLaunchPool(project.launch_pool_pda);
  const { mutate: clamToken, isLoading: isClamming } = useClaimToken(
    project.launch_pool_pda
  );

  const isOwner = useMemo(() => {
    if (!wallet?.publicKey) return false;
    return wallet.publicKey.toBase58() === project.created_by;
  }, [wallet, project]);

  console.log(pool, userPool);
  const actionName = useMemo(() => {
    if (!pool) return null;

    if (isOwner) {
      if (pool.status.pending) {
        return 'Start project';
      } else if (pool.status.active) {
        return 'Complete project';
      } else if (pool.status.completed) {
        return 'Completed';
      } else if (pool.status.cancelled) {
        return 'Cancelled';
      }
    } else {
      if (!userPool) return null;

      if (userPool.claimed.eq(userPool.amount)) {
        return 'Claimed';
      }
      return 'Claim token';
    }
    return null;
  }, [isOwner, pool, userPool]);

  const actionClicked = useCallback(() => {
    if (!pool) return null;

    if (isOwner) {
      if (pool.status.pending) {
        startPool([]);
      } else if (pool.status.active) {
        completeLaunchPool();
      }
    } else {
      if (!userPool) return null;
      clamToken();
    }
  }, [pool, isOwner, startPool, completeLaunchPool, userPool, clamToken]);

  const actionDisabled = useMemo(() => {
    return true;
  }, []);

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
      <div className='countdown_wrapper'>
        <div className='displayedTime'>
          <div className='countBox'>
            <div className='countBoxItem'>
              <div className='count'>{zeroPad(days)}</div>
              <div className='label'>
                <span>D</span>
              </div>
            </div>
            <div className='countBoxItem'>
              <div className='count'>{zeroPad(hours)}</div>
              <div className='label'>
                <span>H</span>
              </div>
            </div>
            <div className='countBoxItem'>
              <div className='count'>{zeroPad(minutes)}</div>
              <div className='label'>
                <span>M</span>
              </div>
            </div>
            <div className='countBoxItem'>
              <div className='count'>{zeroPad(seconds)}</div>
              <div className='label'>
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

  return (
    <ProjectInfoStyleWrapper className='live_project_wrapper'>
      <div className='game-price-item'>
        <div className='game-price-inner'>
          <div className='total-price'>
            <div className='flex price-inner'>
              <div className='image-icon'>
                <img
                  src={project.project_logo_url}
                  alt='icon'
                  className='h-[100px] w-[100px]'
                />
              </div>
              <div className='price-details'>
                <h3>
                  <a>{project.name}</a>
                </h3>
                <div className='dsc'>
                  PRICE ({0}) = {0} {project.currency_address.toUpperCase()}
                </div>
                <div>
                  Project website:{' '}
                  {project.project_website ? (
                    <Link href={project.project_website} target='_blank'>
                      {project.project_website}
                    </Link>
                  ) : (
                    'N/A'
                  )}
                </div>
              </div>
            </div>
            <div className='all-raise'>
              Total Raise:{' '}
              <DisplayNumber value={formatToken(project.token_sale_amount)} />{' '}
              {project.currency_address.toUpperCase()}
            </div>
          </div>
          <div className='text-center allocation-max'>
            <Image
              src={`/assets/${project.currency_address}.png`}
              alt='currency icon'
              width={50}
              height={50}
            />
            <div className='allocation'>
              Allocation: <DisplayNumber value={0} />{' '}
              {project.currency_address.toUpperCase()}
            </div>
          </div>
          <div className='targeted-raise'>
            <div className='seles-end-text'>Sale End In</div>
            <Countdown
              date={dayjs(project.token_unlock_date).toString()}
              renderer={CountdownRender}
            />
            <div className='targeted-raise-amount'>
              Targeted Raise:{' '}
              <DisplayNumber value={formatToken(project.token_sale_amount)} />{' '}
              {project.currency_address.toUpperCase()}
            </div>
          </div>
        </div>
        <div className='progress-inner'>
          <ProgressBar progress={calculateProgress(0, 1)} />
        </div>

        {actionName && (
          <div className='project_card_footer'>
            <Button
              $sm
              $variant='mint'
              onClick={actionClicked}
              disabled={actionDisabled}
            >
              {actionName}
            </Button>
            {/* {project.participants ? (
    <div className="participants">Participants {project.participants}</div>
  ) : null} */}
            <div className='social_links'>
              {/* {project.socialLinks?.map((profile, i) => (
      <Link key={i} href={profile.url}>
        <img src={profile.icon} alt="social icon" />
      </Link>
    ))} */}
            </div>
          </div>
        )}
      </div>
    </ProjectInfoStyleWrapper>
  );
};

export default ProjectInfo;
