import ApplyProject from "@/components/Apply";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Apply Your Project",
  description: "Apply your project on Renext App",
};

const ApplyPage: NextPage = () => {
  return (
    <>
      <ApplyProject />
    </>
  );
};

export default ApplyPage;
