import { z } from "zod";

export const EnvSchema = z.object({
  SUPABASE_URL: z.string().url().optional().default("http://localhost:54321"),
  SUPABASE_ANON_KEY: z.string().optional().default("dummy-key"),
  SUPABASE_SERVICE_ROLE_KEY: z.string().optional(),
  NEXT_PUBLIC_APP_URL: z.string().url().optional()
});

export type Env = z.infer<typeof EnvSchema>;

let cachedEnv: Env | null = null;

export function loadEnv(): Env {
  if (!cachedEnv) {
    cachedEnv = EnvSchema.parse({
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
      SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
      NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL
    });
  }
  return cachedEnv;
}
