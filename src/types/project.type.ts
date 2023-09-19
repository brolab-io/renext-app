import { Database } from "@/lib/supabase.type";

export type ProjectType = {
  id: string;
  thumb: string;
  title: string;
  price: string | number;
  saleEnd: number;
  currency: string;
  projectDetails: ProjectDetailType[];
  socialLinks: SocialLinkType[];
};

export type TProject = Database["public"]["Tables"]["launchpads"]["Row"];

export type ProjectDetailType = {
  title: string;
  text: string;
};

export type SocialLinkType = {
  icon: string;
  url: string;
};
