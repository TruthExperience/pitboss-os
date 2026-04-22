import { supabase } from "./supabase";
import { RaceResult, ConstructorResult } from "@pitboss/types";

export async function listRaceResults(eventId: string): Promise<RaceResult[]> {
  const { data, error } = await supabase
    .from("race_results")
    .select("*")
    .eq("event_id", eventId)
    .order("position", { ascending: true });

  if (error) throw error;
  return data;
}

export async function listConstructorResults(
  eventId: string
): Promise<ConstructorResult[]> {
  const { data, error } = await supabase
    .from("constructor_results")
    .select("*")
    .eq("event_id", eventId);

  if (error) throw error;
  return data;
}
