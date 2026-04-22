import { NextResponse } from "next/server";
import { listRaceResults, listConstructorResults } from "@pitboss/core";

export async function GET(req: Request) {
  const url = new URL(req.url);

  const eventId = url.searchParams.get("event");
  const type = url.searchParams.get("type"); // "drivers" | "constructors"

  if (!eventId) {
    return NextResponse.json(
      { error: "Missing event id" },
      { status: 400 }
    );
  }

  try {
    if (type === "constructors") {
      const constructors = await listConstructorResults(eventId);
      return NextResponse.json({ constructors });
    }

    const results = await listRaceResults(eventId);
    return NextResponse.json({ results });
  } catch {
    return NextResponse.json(
      { error: "Failed to load results" },
      { status: 500 }
    );
  }
}
