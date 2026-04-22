import { supabase } from "./supabase";
import { Event } from "@pitboss/types";

export async function listEvents(leagueId: string): Promise<Event[]> {
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("league_id", leagueId)
    .order("starts_at", { ascending: true });

  if (error) throw error;
  return data;
}

export async function getEvent(eventId: string): Promise<Event | null> {
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("id", eventId)
    .maybeSingle();

  if (error) throw error;
  return data;
}
