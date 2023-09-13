import React from 'react';
import StartButton from './StartButton';
import useLaunchPool from '@/hooks/program/useLaunchPool';
import Button from '@/components/commons/Button';
import CompleteButton from './CompleteButton';
import WithdrawButton from './WithdrawButton';

type Props = {
  pool_pda: string;
};
const OwnerFunction: React.FC<Props> = ({ pool_pda }) => {
  const { data: pool, isLoading, error } = useLaunchPool(pool_pda);

  if (error || pool?.status.cancelled) {
    return null;
  }

  if (isLoading) {
    return (
      <div className='project_card_footer'>
        <Button
          $sm
          $variant='mint'
          disabled
          className='bg-[#21D969] text-black text-center !w-full px-3'
        >
          Pool is loading...
        </Button>
      </div>
    );
  }

  if (pool?.status.pending && pool.unlockDate > Date.now() / 1000) {
    return (
      <StartButton
        pool_pda={pool_pda}
        withWhitelist={!!pool.poolType.whiteList}
      />
    );
  }

  if (pool?.status.active) {
    if (pool.unlockDate <= Date.now() / 1000)
      return <CompleteButton pool_pda={pool_pda} />;
    return (
      <div className='project_card_footer'>
        <Button
          $sm
          $variant='mint'
          disabled
          className='bg-[#21D969] text-black text-center !w-full px-3'
        >
          Pool is running
        </Button>
      </div>
    );
  }

  if (pool?.status.completed && pool.unlockDate <= Date.now() / 1000) {
    return (
      <WithdrawButton
        pool_pda={pool_pda}
        currency={Object.keys(pool.currency)[0]}
      />
    );
  }

  if (
    pool?.status.cancelled ||
    (pool?.status.pending && pool.unlockDate <= Date.now() / 1000)
  ) {
    return (
      <div className='project_card_footer'>
        <Button
          $sm
          $variant='mint'
          disabled
          className='bg-[#21D969] text-black text-center !w-full px-3'
        >
          Out of date
        </Button>
      </div>
    );
  }

  return null;
};

export default OwnerFunction;
