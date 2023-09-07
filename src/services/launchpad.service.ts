"use server";

import { supabase } from "@/lib/supabase";
import { Database } from "@/lib/supabase.type";

const randomString = (length: number) => {
  return Math.random().toString(36).substring(length);
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
