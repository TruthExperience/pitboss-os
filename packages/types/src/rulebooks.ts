import { z } from "zod";

export const RulebookSchema = z.object({
  id: z.string().uuid(),
  tenant_id: z.string().uuid(),
  title: z.string(),
  version: z.string(),
  created_at: z.string().datetime()
});

export type Rulebook = z.infer<typeof RulebookSchema>;

export const RulebookSectionSchema = z.object({
  id: z.string().uuid(),
  rulebook_id: z.string().uuid(),
  section_number: z.string().nullable(),
  title: z.string().nullable(),
  content: z.string(),
  created_at: z.string().datetime()
});

export type RulebookSection = z.infer<typeof RulebookSectionSchema>;
