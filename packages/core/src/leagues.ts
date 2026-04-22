import { supabase } from "./supabase";
import { League } from "@pitboss/types";

export async function getLeagueById(id: string): Promise<League | null> {
  const { data, error } = await supabase
    .from("leagues")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) throw error;
  return data;
}

export async function listLeagues(tenantId: string): Promise<League[]> {
  const { data, error } = await supabase
    .from("leagues")
    .select("*")
    .eq("tenant_id", tenantId);

  if (error) throw error;
  return data;
}
