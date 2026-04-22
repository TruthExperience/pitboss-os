import { supabase } from "./supabase";
import {
  Incident,
  IncidentEvidence,
  StewardVote,
  IncidentVerdict
} from "@pitboss/types";

export async function submitIncident(
  leagueId: string,
  description: string,
  reportedBy: string | null
): Promise<Incident> {
  const { data, error } = await supabase
    .from("incidents")
    .insert({
      league_id: leagueId,
      description,
      reported_by: reportedBy,
      status: "submitted"
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function addIncidentEvidence(
  incidentId: string,
  url: string,
  uploadedBy: string | null
): Promise<IncidentEvidence> {
  const { data, error } = await supabase
    .from("incident_evidence")
    .insert({
      incident_id: incidentId,
      url,
      uploaded_by: uploadedBy
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function castStewardVote(
  incidentId: string,
  stewardId: string,
  verdict: string,
  notes: string | null
): Promise<StewardVote> {
  const { data, error } = await supabase
    .from("steward_votes")
    .insert({
      incident_id: incidentId,
      steward_id: stewardId,
      verdict,
      notes
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function finalizeIncident(
  incidentId: string,
  verdict: string,
  explanation: string | null,
  penaltyCode: string | null
): Promise<IncidentVerdict> {
  const { data, error } = await supabase
    .from("incident_verdicts")
    .insert({
      incident_id: incidentId,
      verdict,
      explanation,
      penalty_code: penaltyCode
    })
    .select()
    .single();

  if (error) throw error;

  await supabase
    .from("incidents")
    .update({ status: "finalized" })
    .eq("id", incidentId);

  return data;
}
