import { z } from "zod";

export const IncidentSchema = z.object({
  id: z.string().uuid(),
  league_id: z.string().uuid(),
  reported_by: z.string().uuid().nullable(),
  description: z.string(),
  status: z.enum(["submitted", "ready_for_review", "voting", "finalized"]),
  created_at: z.string().datetime()
});

export type Incident = z.infer<typeof IncidentSchema>;

export const IncidentEvidenceSchema = z.object({
  id: z.string().uuid(),
  incident_id: z.string().uuid(),
  url: z.string(),
  uploaded_by: z.string().uuid().nullable(),
  created_at: z.string().datetime()
});

export type IncidentEvidence = z.infer<typeof IncidentEvidenceSchema>;

export const StewardVoteSchema = z.object({
  id: z.string().uuid(),
  incident_id: z.string().uuid(),
  steward_id: z.string().uuid(),
  verdict: z.string(),
  notes: z.string().nullable(),
  created_at: z.string().datetime()
});

export type StewardVote = z.infer<typeof StewardVoteSchema>;

export const IncidentVerdictSchema = z.object({
  id: z.string().uuid(),
  incident_id: z.string().uuid(),
  verdict: z.string(),
  explanation: z.string().nullable(),
  penalty_code: z.string().nullable(),
  created_at: z.string().datetime()
});

export type IncidentVerdict = z.infer<typeof IncidentVerdictSchema>;
