import { z } from "zod";

export const PenaltyDefinitionSchema = z.object({
  id: z.string().uuid(),
  tenant_id: z.string().uuid(),
  code: z.string(), // e.g. "AV1", "C1", "SEV-3"
  description: z.string(),
  default_points: z.number().nullable(),
  default_time_penalty: z.number().nullable(),
  created_at: z.string().datetime()
});

export type PenaltyDefinition = z.infer<typeof PenaltyDefinitionSchema>;
