import About from "@/components/about";
import Banner from "@/components/banner";
import MainMenu from "@/components/header/MainMenu";

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
