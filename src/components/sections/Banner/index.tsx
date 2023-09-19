"use client";
import Image from "next/image";

import BannerStyleWrapper from "./Banner.style";
import Button from "@/components/commons/Button";
const Banner = () => {
  const particles = Array.from({ length: 5 }, () => "/assets/rocketStar.svg");
  return (
    <BannerStyleWrapper>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="px-5 md:px-0">
            <div className="gamfi_v2_hero_left">
              <h2>
                Web <span>3.0</span> IGO/IDO Token Launchpad
              </h2>
              <p>The next generation crypto token launching platform</p>
              <div className="banner-btns">
                <Button href="/explore" $md $variant="mint">
                  View Projects
                </Button>
                <Button href="/apply" $md $variant="outline">
                  Apply Project
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div className="gamfi_v2_hero_right">
              <div className="gamfi_v2_hero_thumb">
                <span className="rocket_thumb">
                  <Image src={"/assets/rocket.png"} alt="Rocket thumb" width={450} height={450} />
                </span>

                {particles?.map((particle, i) => (
                  <span key={i} className={`rocket_particle particle_${i + 1}`}>
                    <Image src={particle} alt="rocket particle" width={4} height={75} />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </BannerStyleWrapper>
  );
};

export default Banner;
