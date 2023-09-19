"use client";
import { useModal } from "@/hooks/useModal";
import ShareModalStyleWrapper from "./ShareModal.style";
import { FiX } from "react-icons/fi";

import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaTelegramPlane,
  FaFacebook,
  FaEnvelope,
  FaCopy,
} from "react-icons/fa";
import Link from "next/link";

const data = [
  {
    icon: <FaTwitter />,
    url: "#",
  },
  {
    icon: <FaLinkedinIn />,
    url: "#",
  },
  {
    icon: <FaFacebook />,
    url: "#",
  },
  {
    icon: <FaInstagram />,
    url: "#",
  },
  {
    icon: <FaTelegramPlane />,
    url: "#",
  },
  {
    icon: <FaEnvelope />,
    url: "#",
  },
  {
    icon: <FaCopy />,
    url: "#",
  },
];

const ShareModal = () => {
  const { shareModalHandle } = useModal();
  return (
    <>
      <ShareModalStyleWrapper className="modal_overlay">
        <div className="mint_modal_box">
          <div className="mint_modal_content">
            <div className="modal_header">
              <h2>SHARE POST</h2>
              <button onClick={(e) => shareModalHandle(e)}>
                <FiX />
              </button>
            </div>
            <div className="modal_body text-center">
              <div className="social_profiles">
                {data?.map((item, i) => (
                  <Link key={i} href={item.url}>
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ShareModalStyleWrapper>
    </>
  );
};

export default ShareModal;
