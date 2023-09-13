'use client';
/* eslint-disable @next/next/no-img-element */
import Button from '@/components/commons/Button';
import ActionsStyleWrapper from './Actions.style';
import { useMemo, useState } from 'react';
import { TProject } from '@/types/project.type';
import { formatToken } from '@/utils/format.util';
import useBuyToken from '@/hooks/program/useBuyToken';
import useClaimToken from '@/hooks/program/useClaimToken';
import useUserPool from '@/hooks/program/useUserPool';
import useLaunchPool from '@/hooks/program/useLaunchPool';

type Props = {
  project: TProject;
};
const Actions: React.FC<Props> = ({ project }) => {
  const [amount, setAmount] = useState<string | undefined>();
  const { data: pool } = useLaunchPool(project.launch_pool_pda);
  const { data: userPool } = useUserPool(project.launch_pool_pda);
  const { mutate: buyToken } = useBuyToken(project.launch_pool_pda);
  const { mutate: claimToken } = useClaimToken(project.launch_pool_pda);

  const isClaimed = useMemo(() => {
    if (!userPool || !pool?.status.completed) return true;
    return userPool.claimed.eq(userPool.amount);
  }, [pool?.status, userPool]);

  const handleBuyMax = () => {
    console.log('handleBuyMax');
    setAmount('100');
  };

  const handleBuy = () => {
    if (!amount) return;
    buyToken(amount);
  };

  const handleClaim = () => {
    claimToken();
  };

  return (
    <ActionsStyleWrapper>
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
        <div className='project-form'>
          <h3 className='widget_title'>
            Join with us <img src={'/assets/steps.png'} alt='shape' />
          </h3>
          <h4>Amount to buy</h4>
          <div className='gap-2 form-group-area'>
            <input
              type='number'
              placeholder='00.00'
              value={amount || ''}
              onChange={(e) => setAmount(e.target.value)}
            />
            <Button $sm className='max' $variant='dark' onClick={handleBuyMax}>
              MAX
            </Button>
            <Button $xl onClick={handleBuy}>
              Buy
            </Button>
          </div>
        </div>
        <div className='space-y-5'>
          <ul className='info_list'>
            <li>
              <span className='info_key'>MIN</span>
              <span className='info_value'>
                {formatToken(
                  project.minimum_token_amount,
                  project.token_decimals
                )}{' '}
                {project.currency_address.toUpperCase()}
              </span>
            </li>
            <li>
              <span className='info_key'>MAX</span>
              <span className='info_value'>
                {formatToken(
                  project.maximum_token_amount,
                  project.token_decimals
                )}{' '}
                {project.currency_address.toUpperCase()}
              </span>
            </li>
            <li>
              <span className='info_key'>Buyed</span>
              <span className='info_value'>
                {0} {project.currency_address.toUpperCase()}
              </span>
            </li>
          </ul>
          <div className='flex justify-center'>
            {!isClaimed && (
              <Button
                $xxl
                $variant='mint'
                disabled={isClaimed}
                onClick={handleClaim}
              >
                Claim token
              </Button>
            )}
          </div>
        </div>
      </div>
    </ActionsStyleWrapper>
  );
};

export default Actions;
