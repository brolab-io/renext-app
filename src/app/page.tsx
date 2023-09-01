import About from "@/components/sections/about";
import Banner from "@/components/sections/banner";

import { buildMetadata } from "@/utils/seo.util";
import { Metadata } from "next";
import ExploreProjects from "@/components/projects/ExploreProject";

export const metadata: Metadata = buildMetadata("Home");

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <ExploreProjects />
    </>
  );
}
