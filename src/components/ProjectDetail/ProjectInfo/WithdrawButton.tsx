import Button from '@/components/commons/Button';
import useWithdrawLaunchPool from '@/hooks/program/useWithdrawLaunchPool';

type Props = {
  pool_pda: string;
  currency: string;
};
const WithdrawButton: React.FC<Props> = ({ pool_pda, currency }) => {
  const { mutate } = useWithdrawLaunchPool(pool_pda, currency);

  return (
    <Button
      onClick={() => mutate()}
      $sm
      $variant='mint'
      className='bg-[#21D969] text-black text-center !w-full'
    >
      Withdraw pool
    </Button>
  );
};

export default WithdrawButton;
