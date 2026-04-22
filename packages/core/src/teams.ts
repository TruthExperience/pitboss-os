import { supabase } from "./supabase";
import { Team } from "@pitboss/types";

export async function listTeams(leagueId: string): Promise<Team[]> {
  const { data, error } = await supabase
    .from("teams")
    .select("*")
    .eq("league_id", leagueId)
    .order("name", { ascending: true });

  if (error) throw error;
  return data;
}

export async function getTeam(teamId: string): Promise<Team | null> {
  const { data, error } = await supabase
    .from("teams")
    .select("*")
    .eq("id", teamId)
    .maybeSingle();

  if (error) throw error;
  return data;
}
