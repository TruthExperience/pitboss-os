import { z } from "zod";

export const LeagueSchema = z.object({
  id: z.string().uuid(),
  tenant_id: z.string().uuid(),
  name: z.string(),
  slug: z.string(),
  season: z.number(),
  created_at: z.string().datetime()
});

export type League = z.infer<typeof LeagueSchema>;
