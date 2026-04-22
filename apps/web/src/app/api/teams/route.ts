import { NextResponse } from "next/server";
import { listTeams, getTeam } from "@pitboss/core";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const leagueId = url.searchParams.get("league");
  const teamId = url.searchParams.get("id");

  if (!leagueId && !teamId) {
    return NextResponse.json(
      { error: "Missing league or team id" },
      { status: 400 }
    );
  }

  try {
    if (teamId) {
      const team = await getTeam(teamId);
      return NextResponse.json({ team });
    }

    const teams = await listTeams(leagueId!);
    return NextResponse.json({ teams });
  } catch {
    return NextResponse.json(
      { error: "Failed to load teams" },
      { status: 500 }
    );
  }
}
