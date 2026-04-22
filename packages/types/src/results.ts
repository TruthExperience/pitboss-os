import { z } from "zod";

export const RaceResultSchema = z.object({
  id: z.string().uuid(),
  league_id: z.string().uuid(),
  event_id: z.string().uuid(),
  driver_id: z.string().uuid(),
  position: z.number().nullable(),
  points: z.number().default(0),
  time_gap: z.string().nullable(), // e.g. "+5.234", "DNF", "DSQ"
  status: z.enum(["finished", "dnf", "dsq", "dns"]),
  created_at: z.string().datetime()
});

export type RaceResult = z.infer<typeof RaceResultSchema>;

export const ConstructorResultSchema = z.object({
  id: z.string().uuid(),
  league_id: z.string().uuid(),
  event_id: z.string().uuid(),
  team_id: z.string().uuid(),
  points: z.number().default(0),
  created_at: z.string().datetime()
});

export type ConstructorResult = z.infer<typeof ConstructorResultSchema>;
