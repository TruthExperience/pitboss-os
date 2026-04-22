create extension if not exists vector;

create table rag_embeddings (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid references tenants(id) on delete cascade,
  source_type text not null, -- rulebook, penalty, incident, etc.
  source_id uuid,
  content text not null,
  embedding vector(1536),
  created_at timestamptz default now()
);
