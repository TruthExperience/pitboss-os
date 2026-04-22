import { NextResponse } from "next/server";
import { getUser } from "@pitboss/core";

export async function GET(req: Request) {
  const token = req.headers.get("authorization");

  if (!token) {
    return NextResponse.json({ error: "Missing token" }, { status: 401 });
  }

  try {
    const user = await getUser(token);
    return NextResponse.json({ user });
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
