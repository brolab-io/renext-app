import Button from '@/components/commons/Button';
import useCompleteLaunchPool from '@/hooks/program/useCompleteLaunchPool';

type Props = {
  pool_pda: string;
};
const CompleteButton: React.FC<Props> = ({ pool_pda }) => {
  const { mutate: completeLaunchPool } = useCompleteLaunchPool(pool_pda);

  return (
    <Button
      onClick={() => completeLaunchPool()}
      className='bg-[#21D969] text-black text-center !w-full'
    >
      Complete Pool
    </Button>
  );
};

export default CompleteButton;
