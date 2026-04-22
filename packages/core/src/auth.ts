import { supabase } from "./supabase";

export async function getUser(sessionToken: string) {
  const { data, error } = await supabase.auth.getUser(sessionToken);
  if (error) throw error;
  return data.user;
}

export async function requireUser(sessionToken: string) {
  const user = await getUser(sessionToken);
  if (!user) throw new Error("Unauthorized");
  return user;
}
