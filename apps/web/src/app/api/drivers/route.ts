import { NextResponse } from "next/server";
import { listDrivers, getDriver, getDriverSeasonStats } from "@pitboss/core";

export async function GET(req: Request) {
  const url = new URL(req.url);

  const leagueId = url.searchParams.get("league");
  const driverId = url.searchParams.get("id");
  const season = url.searchParams.get("season");

  if (!leagueId && !driverId) {
    return NextResponse.json(
      { error: "Missing league or driver id" },
      { status: 400 }
    );
  }

  try {
    // Fetch a single driver
    if (driverId) {
      const driver = await getDriver(driverId);

      // Optionally include season stats
      if (season) {
        const stats = await getDriverSeasonStats(driverId, Number(season));
        return NextResponse.json({ driver, stats });
      }

      return NextResponse.json({ driver });
    }

    // Fetch all drivers for a league
    const drivers = await listDrivers(leagueId!);
    return NextResponse.json({ drivers });
  } catch {
    return NextResponse.json(
      { error: "Failed to load drivers" },
      { status: 500 }
    );
  }
}
