import { supabase } from "./supabase";
import { PenaltyDefinition } from "@pitboss/types";

export async function listPenalties(tenantId: string): Promise<PenaltyDefinition[]> {
  const { data, error } = await supabase
    .from("penalty_definitions")
    .select("*")
    .eq("tenant_id", tenantId);

  if (error) throw error;
  return data;
}

export async function getPenaltyByCode(
  tenantId: string,
  code: string
): Promise<PenaltyDefinition | null> {
  const { data, error } = await supabase
    .from("penalty_definitions")
    .select("*")
    .eq("tenant_id", tenantId)
    .eq("code", code)
    .maybeSingle();

  if (error) throw error;
  return data;
}
