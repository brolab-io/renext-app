import About from "@/components/sections/About";
import Banner from "@/components/sections/Banner";

import { buildMetadata } from "@/utils/seo.util";
import { Metadata } from "next";
import ExploreProjects from "@/components/Project/ExploreProject";
import Footer from "@/components/Footer";

export const metadata: Metadata = buildMetadata("Home");

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <ExploreProjects />
      <Footer />
    </>
  );
}
