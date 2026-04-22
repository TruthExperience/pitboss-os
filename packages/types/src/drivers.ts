import { z } from "zod";

export const DriverSchema = z.object({
  id: z.string().uuid(),
  league_id: z.string().uuid(),
  user_id: z.string().uuid(),
  team_id: z.string().uuid().nullable(),
  number: z.number().nullable(), // car number
  country: z.string().nullable(),
  created_at: z.string().datetime()
});

export type Driver = z.infer<typeof DriverSchema>;

export const DriverSeasonStatsSchema = z.object({
  id: z.string().uuid(),
  driver_id: z.string().uuid(),
  season: z.number(),
  points: z.number().default(0),
  wins: z.number().default(0),
  podiums: z.number().default(0),
  poles: z.number().default(0),
  created_at: z.string().datetime()
});

export type DriverSeasonStats = z.infer<typeof DriverSeasonStatsSchema>;
