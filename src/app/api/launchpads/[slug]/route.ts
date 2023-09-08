import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, context: { params: { slug: string } }) {
  const slug = context.params.slug;

  // Find or slug or launch pool pda
  const { data, error } = await supabase
    .from("launchpads")
    .select("*")
    // or condition
    .or(`slug.eq.${slug},launch_pool_pda.eq.${slug}`)
    .single();

  if (!data) {
    return NextResponse.json({ message: "Project not found" }, { status: 404 });
  }

  if (error) {
    return NextResponse.json({ message: (error as Error).message }, { status: 500 });
  }
  return NextResponse.json(data);
}
