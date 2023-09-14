import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const [limit, offset] = [
    parseInt(searchParams.get("limit") || "10", 10) || 10,
    parseInt(searchParams.get("offset") || "0") || 0,
  ];
  const owner = searchParams.get("owner");
  const status = searchParams.get("status");
  const currency = searchParams.get("currency");

  const builder = supabase.from("launchpads").select("*", { count: "exact" });
  if (owner) {
    builder.eq("created_by", owner);
  }
  if (status) {
    const now = new Date().toISOString();
    if (status === "on-going") {
      builder.gt("token_unlock_date", now);
    }
    if (status === "ended") {
      builder.lt("token_unlock_date", now);
    }
  }

  if (currency && ["RENECT", "REUSD"].includes(currency)) {
    builder.eq("currency_address", currency);
  }

  const {
    count = 0,
    error: error,
    data,
  } = await builder.order("created_at", { ascending: false }).range(offset, offset + limit - 1);

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
