import { NextResponse } from "next/server";
import { listEvents, getEvent } from "@pitboss/core";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const leagueId = url.searchParams.get("league");
  const eventId = url.searchParams.get("id");

  if (!leagueId && !eventId) {
    return NextResponse.json(
      { error: "Missing league or event id" },
      { status: 400 }
    );
  }

  try {
    if (eventId) {
      const event = await getEvent(eventId);
      return NextResponse.json({ event });
    }

    const events = await listEvents(leagueId!);
    return NextResponse.json({ events });
  } catch {
    return NextResponse.json(
      { error: "Failed to load calendar" },
      { status: 500 }
    );
  }
}
