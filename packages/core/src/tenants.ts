import { supabase } from "./supabase";
import { Tenant } from "@pitboss/types";

export async function getTenantBySlug(slug: string): Promise<Tenant | null> {
  const { data, error } = await supabase
    .from("tenants")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error) throw error;
  return data;
}

export async function listTenants(): Promise<Tenant[]> {
  const { data, error } = await supabase.from("tenants").select("*");
  if (error) throw error;
  return data;
}
