import { NextResponse } from "next/server";
import { listTenants } from "@pitboss/core";

export async function GET() {
  try {
    const tenants = await listTenants();
    return NextResponse.json({ tenants });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to load tenants" },
      { status: 500 }
    );
  }
}
