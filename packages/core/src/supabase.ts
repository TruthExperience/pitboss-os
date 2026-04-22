import { createClient } from "@supabase/supabase-js";
import { loadEnv } from "@pitboss/shared";

const env = loadEnv();

export const supabase = createClient(
  env.SUPABASE_URL,
  env.SUPABASE_ANON_KEY
);
