/* eslint-disable @next/next/no-img-element */
import { SectionTitle } from "@/components/commons/SectionTitle";
import SocialStyleWrapper from "./SocialProfile.style";
import Link from "next/link";

const data = [
  {
    icon: "/assets/facebook.svg",
    url: "#",
  },
  {
    icon: "/assets/discord.svg",
    url: "#",
  },
  {
    icon: "/assets/insta.svg",
    url: "#",
  },
  {
    icon: "/assets/linkedin.svg",
    url: "#",
  },
  {
    icon: "/assets/medium.svg",
    url: "#",
  },
  {
    icon: "/assets/telegram.svg",
    url: "#",
  },
  {
    icon: "/assets/twitter.svg",
    url: "#",
  },
];

const Social = () => {
  return (
    <SocialStyleWrapper>
      <div className="container mx-auto">
        <SectionTitle
          isCenter={true}
          subtitle="FIND US ON SOCIAL"
          className="flex justify-center"
        />
        <div className="social-link-list">
          {data?.map((profile, i) => (
            <Link key={i} href={profile.url}>
              <img src={profile.icon} alt="social icon" />
            </Link>
          ))}
        </div>
      </div>
    </SocialStyleWrapper>
  );
};

export default Social;
