import { supabase } from "./supabase";
import { Driver, DriverSeasonStats } from "@pitboss/types";

export async function listDrivers(leagueId: string): Promise<Driver[]> {
  const { data, error } = await supabase
    .from("drivers")
    .select("*")
    .eq("league_id", leagueId)
    .order("number", { ascending: true });

  if (error) throw error;
  return data;
}

export async function getDriver(driverId: string): Promise<Driver | null> {
  const { data, error } = await supabase
    .from("drivers")
    .select("*")
    .eq("id", driverId)
    .maybeSingle();

  if (error) throw error;
  return data;
}

export async function getDriverSeasonStats(
  driverId: string,
  season: number
): Promise<DriverSeasonStats | null> {
  const { data, error } = await supabase
    .from("driver_season_stats")
    .select("*")
    .eq("driver_id", driverId)
    .eq("season", season)
    .maybeSingle();

  if (error) throw error;
  return data;
}
