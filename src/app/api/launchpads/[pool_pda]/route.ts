import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, context: { params: { pool_pda: string } }) {
  const pool_pda = context.params.pool_pda;
  const { data, error } = await supabase
    .from("launchpads")
    .select("*")
    .eq("launch_pool_pda", pool_pda)
    .maybeSingle();

  if (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
  return NextResponse.json(data);
}
