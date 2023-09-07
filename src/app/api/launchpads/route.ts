import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const [limit, offset] = [
    parseInt(searchParams.get("limit") || "10", 10) || 10,
    parseInt(searchParams.get("offset") || "0") || 0,
  ];

  const { data, error } = await supabase
    .from("launchpads")
    .select("*")
    .range(offset, offset + limit);

  const { count = 0, error: countError } = await supabase
    .from("launchpads")
    .select("id", { count: "exact", head: true });

  if (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
  return NextResponse.json({
    items: data,
    total: count,
    offset,
    limit,
    hasMore: offset + limit < count!,
  });
}
