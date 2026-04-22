-- Rulebook documents
create table rulebooks (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid references tenants(id) on delete cascade,
  title text not null,
  version text not null,
  created_at timestamptz default now()
);

-- Rulebook sections (for RAG)
create table rulebook_sections (
  id uuid primary key default gen_random_uuid(),
  rulebook_id uuid references rulebooks(id) on delete cascade,
  section_number text,
  title text,
  content text not null,
  created_at timestamptz default now()
);

-- Penalty tables
create table penalty_definitions (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid references tenants(id) on delete cascade,
  code text not null, -- e.g. "AV1", "C1", "SEV-3"
  description text not null,
  default_points integer,
  default_time_penalty integer,
  created_at timestamptz default now(),
  unique (tenant_id, code)
);
