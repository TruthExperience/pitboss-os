import { NextResponse } from "next/server";
import { submitIncident, addIncidentEvidence } from "@pitboss/core";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { leagueId, description, reportedBy } = body;

    if (!leagueId || !description) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const incident = await submitIncident(
      leagueId,
      description,
      reportedBy ?? null
    );

    return NextResponse.json({ incident });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to submit incident" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { incidentId, evidenceUrl, uploadedBy } = body;

    if (!incidentId || !evidenceUrl) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const updated = await addIncidentEvidence(incidentId, evidenceUrl, uploadedBy ?? null);

    return NextResponse.json({ incident: updated });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to add evidence" },
      { status: 500 }
    );
  }
}
