import { supabase } from "./supabase";
import { Rulebook, RulebookSection } from "@pitboss/types";

export async function getRulebook(rulebookId: string): Promise<Rulebook | null> {
  const { data, error } = await supabase
    .from("rulebooks")
    .select("*")
    .eq("id", rulebookId)
    .maybeSingle();

  if (error) throw error;
  return data;
}

export async function getRulebookSections(rulebookId: string): Promise<RulebookSection[]> {
  const { data, error } = await supabase
    .from("rulebook_sections")
    .select("*")
    .eq("rulebook_id", rulebookId)
    .order("section_number", { ascending: true });

  if (error) throw error;
  return data;
}
