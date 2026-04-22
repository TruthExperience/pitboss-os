import { z } from "zod";

export const TeamSchema = z.object({
  id: z.string().uuid(),
  league_id: z.string().uuid(),
  name: z.string(),
  color_primary: z.string().nullable(),
  color_secondary: z.string().nullable(),
  created_at: z.string().datetime()
});

export type Team = z.infer<typeof TeamSchema>;
