import About from "@/components/sections/about";
import MainMenu from "@/components/header/MainMenu";
import Banner from "@/components/sections/banner";

import { buildMetadata } from "@/utils/seo.util";
import { Metadata } from "next";

export const metadata: Metadata = buildMetadata("Home");

export default function Home() {
  return (
    <>
      <MainMenu />
      <Banner />
      <About />
    </>
  );
}
