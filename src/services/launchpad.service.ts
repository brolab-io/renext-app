"use server";

import { supabase } from "@/lib/supabase";
import { Database } from "@/lib/supabase.type";

const randomString = (length: number) => {
  const randomStr =
    Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  return randomStr.substring(0, length);
};

export const createLaunchPad = async (
  data: Database["public"]["Tables"]["launchpads"]["Insert"]
) => {
  data.slug =
    data
      .name!.toLowerCase()
      .normalize("NFD")
      .replace(/đ/g, "d")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "") +
    "-" +
    randomString(5);

  const { data: result, error } = await supabase
    .from("launchpads")
    .insert([data])
    .select("*")
    .maybeSingle();
  if (error) {
    console.log(error);
    return Promise.reject(error);
  }
  if (!result) {
    return Promise.reject("An error occurred while creating the launchpad, no result was returned");
  }
  return result;
};

export const getLaunchPad = async (slug: string) => {
  const { data, error } = await supabase
    .from("launchpads")
    .select("*")
    // or condition
    .or(`slug.eq.${slug},launch_pool_pda.eq.${slug}`)
    .maybeSingle();

  if (!data) {
    return Promise.reject("Project not found");
  }

  if (error) {
    return Promise.reject(error);
  }
  return data;
};
