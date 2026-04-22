import { z } from "zod";

export const RaceResultSchema = z.object({
  id: z.string().uuid(),
  league_id: z.string().uuid(),
  event_id: z.string().uuid(),
  driver_id: z.string().uuid(),
  position: z.number().nullable(),
  points: z.number().default(0),
  time_gap: z.string().nullable(), // e.g. "+5.234", "DNF", "DSQ"
  status: z.enum(["finished
