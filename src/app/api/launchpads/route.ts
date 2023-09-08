import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const [limit, offset] = [
    parseInt(searchParams.get("limit") || "10", 10) || 10,
    parseInt(searchParams.get("offset") || "0") || 0,
  ];

  const {
    count = 0,
    error: error,
    data,
  } = await supabase
    .from("launchpads")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1);

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
