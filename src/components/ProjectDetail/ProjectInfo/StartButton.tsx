import Button from '@/components/commons/Button';
import useStartPool from '@/hooks/program/useStartPool';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { isValidPublicKey } from '@/utils/network.util';
import MetamaskModalStyleWrapper from './Modal.style';
import { FiChevronRight, FiX } from 'react-icons/fi';
import Link from 'next/link';
import { useModal } from '@/hooks/useModal';
import Image from 'next/image';

type Props = {
  pool_pda: string;
  withWhitelist?: boolean;
};
const StartButton: React.FC<Props> = ({ pool_pda, withWhitelist }) => {
  const { walletModalHandle } = useModal();
  const { mutate: startPool, isLoading: isStartingPool } =
    useStartPool(pool_pda);
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const processCsvFile = async (file: File) => {
    return toast.promise(
      async () => {
        const fileUrl = URL.createObjectURL(file);

        const response = await fetch(fileUrl);

        const text = await response.text();

        const lines = text.split('\n');

        // 5. map through all the lines and split each line by comma.
        const _data = lines.map((line) =>
          line.split(',').map((col) => col.trim())
        );

        // 6. Since first row contains headers, we will remove the first row from data.
        _data.shift();
        const temp = _data
          .filter((item) => item[0].length > 36)
          .map((item) => item[0]);
        console.log({ address: temp });
        // check array include valid address
        const validAddress = temp.every((item) => {
          return isValidPublicKey(item);
        });
        setFile(null);
        if (!validAddress) {
          return Promise.reject(new Error('Invalid address in CSV file.'));
        }

        return temp;
      },
      {
        pending: 'Processing CSV file...',
        success: 'CSV file processed successfully!',
      }
    );
  };

  const handlerStartPool = async () => {
    if (!file) {
      toast.error('Please choose a file to process.');
      return;
    }
    try {
      const csv = await processCsvFile(file!);
      console.log(csv);
      startPool(csv);
    } catch (error) {
      toast.error((error as Error).message);
    } finally {
      setIsOpen(false);
    }
  };

  if (withWhitelist) {
    return (
      <>
        {isOpen && (
          <MetamaskModalStyleWrapper className='modal_overlay'>
            <div className='mint_modal_box'>
              <div className='mint_modal_content'>
                <div className='modal_header'>
                  <h2>CONNECT WALLET</h2>
                  <p>Please download & install metamask!</p>
                  <button onClick={() => setIsOpen(false)}>
                    <FiX />
                  </button>
                </div>
                <div className='modal_body text-center'>
                  <div className='wallet_list'>
                    <Link href='https://metamask.io/download/' target='_blank'>
                      {/* <Image src={metamaskIcon.src} alt='Meta-mask-Image' /> */}
                      MetaMask
                      <span>
                        <FiChevronRight />
                      </span>
                    </Link>
                  </div>
                  <div className='modal_bottom_text'>
                    By connecting your wallet, you agree to our
                    <Link href='# '>Terms of Service</Link>
                    <Link href='#'>Privacy Policy</Link>
                  </div>
                </div>
              </div>
            </div>
          </MetamaskModalStyleWrapper>
        )}

        <div className='project_card_footer'>
          <Button $sm $variant='mint' onClick={() => setIsOpen(true)}>
            Start Pool with Whitelist
          </Button>
          <div className='social_links'></div>
        </div>
      </>
    );
  }
  return (
    <div className='project_card_footer'>
      <Button $sm $variant='mint' onClick={() => startPool([])}>
        Start Project
      </Button>
      <div className='social_links'></div>
    </div>
  );
};

export default StartButton;
