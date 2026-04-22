import { z } from "zod";

export const CheckinWindowSchema = z.object({
  id: z.string().uuid(),
  league_id: z.string().uuid(),
  opens_at: z.string().datetime(),
  closes_at: z.string().datetime(),
  created_at: z.string().datetime()
});

export type CheckinWindow = z.infer<typeof CheckinWindowSchema>;

export const CheckinSchema = z.object({
  id: z.string().uuid(),
  window_id: z.string().uuid(),
  user_id: z.string().uuid(),
  status: z.enum(["in", "out", "reserve"]),
  notes: z.string().nullable(),
  created_at: z.string().datetime()
});

export type Checkin = z.infer<typeof CheckinSchema>;
