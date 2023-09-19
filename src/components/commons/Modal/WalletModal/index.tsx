"use client";
import { useModal } from "@/hooks/useModal";
import WalletModalStyleWrapper from "./WalletModal.style";
import { FiX, FiChevronRight } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import useConnectWallet from "@/hooks/useConnectWallet";
const WalletModal = () => {
  const { connectWallet } = useConnectWallet();
  const { walletModalHandle } = useModal();

  const handleConnectWallet = async () => {
    await connectWallet();
    await walletModalHandle();
  };

  return (
    <>
      <WalletModalStyleWrapper className="modal_overlay">
        <div className="mint_modal_box">
          <div className="mint_modal_content">
            <div className="modal_header">
              <h2>CONNECT WALLET</h2>
              <p>Please select a wallet to connect to this marketplace</p>
              <button onClick={() => walletModalHandle()}>
                <FiX />
              </button>
            </div>
            <div className="modal_body text-center">
              <div className="wallet_list">
                <button onClick={handleConnectWallet}>
                  <Image
                    src={"/assets/demon.png"}
                    width={30}
                    height={30}
                    alt="demon-wallet-Image"
                  />
                  Demon Wallet
                  <span>
                    <FiChevronRight />
                  </span>
                </button>
              </div>
              <div className="modal_bottom_text">
                By connecting your wallet, you agree to our
                <Link href="# ">Terms of Service</Link>
                <Link href="#">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </WalletModalStyleWrapper>
    </>
  );
};

export default WalletModal;
