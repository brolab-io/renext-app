"use server";

import { supabase } from "@/lib/supabase";
import { Database } from "@/lib/supabase.type";

export const createLaunchPad = async (
  data: Database["public"]["Tables"]["launchpads"]["Insert"]
) => {
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
