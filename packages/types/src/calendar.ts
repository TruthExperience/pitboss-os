import { z } from "zod";

export const EventSchema = z.object({
  id: z.string().uuid(),
  league_id: z.string().uuid(),
  title: z.string(),
  description: z.string().nullable(),
  starts_at: z.string().datetime(),
  ends_at: z.string().datetime(),
  created_at: z.string().datetime()
});

export type Event = z.infer<typeof EventSchema>;
