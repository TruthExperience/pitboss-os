import { z } from "zod";

export const TenantSchema = z.object({
  id: z.string().uuid(),
  slug: z.string(),
  name: z.string(),
  created_at: z.string().datetime()
});

export type Tenant = z.infer<typeof TenantSchema>;
