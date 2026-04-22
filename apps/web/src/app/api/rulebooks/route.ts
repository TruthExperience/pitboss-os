import { NextResponse } from "next/server";
import { getRulebook, getRulebookSections } from "@pitboss/core";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const rulebookId = url.searchParams.get("id");

  if (!rulebookId) {
    return NextResponse.json(
      { error: "Missing rulebook id" },
      { status: 400 }
    );
  }

  try {
    const rulebook = await getRulebook(rulebookId);
    if (!rulebook) {
      return NextResponse.json(
        { error: "Rulebook not found" },
        { status: 404 }
      );
    }

    const sections = await getRulebookSections(rulebookId);

    return NextResponse.json({
      rulebook,
      sections
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch rulebook" },
      { status: 500 }
    );
  }
}
