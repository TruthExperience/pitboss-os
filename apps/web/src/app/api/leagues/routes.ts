import { NextResponse } from "next/server";
import { listLeagues } from "@pitboss/core";

export async function GET(req: Request) {
  const tenantId = new URL(req.url).searchParams.get("tenant");

  if (!tenantId) {
    return NextResponse.json(
      { error: "Missing tenant parameter" },
      { status: 400 }
    );
  }

  try {
    const leagues = await listLeagues(tenantId);
    return NextResponse.json({ leagues });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to load leagues" },
      { status: 500 }
    );
  }
}
