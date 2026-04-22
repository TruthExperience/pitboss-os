import { NextResponse } from "next/server";
import { listPenalties, getPenaltyByCode } from "@pitboss/core";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const tenantId = url.searchParams.get("tenant");
  const code = url.searchParams.get("code");

  if (!tenantId) {
    return NextResponse.json(
      { error: "Missing tenant parameter" },
      { status: 400 }
    );
  }

  try {
    if (code) {
      const penalty = await getPenaltyByCode(tenantId, code);
      return NextResponse.json({ penalty });
    }

    const penalties = await listPenalties(tenantId);
    return NextResponse.json({ penalties });
  } catch {
    return NextResponse.json(
      { error: "Failed to load penalties" },
      { status: 500 }
    );
  }
}
