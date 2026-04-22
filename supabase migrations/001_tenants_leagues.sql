-- Tenants (multi-tenant root)
create table tenants (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null, -- e.g. 'trl', 'wsc', 'srh'
  name text not null,
  created_at timestamptz default now()
);

-- Discord guilds linked to tenants
create table guild_links (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid references tenants(id) on delete cascade,
  guild_id text unique not null, -- Discord guild ID
  created_at timestamptz default now()
);

-- Leagues (a tenant may have multiple leagues)
create table leagues (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid references tenants(id) on delete cascade,
  name text not null,
  slug text not null,
  season integer not null default 1,
  created_at timestamptz default now(),
  unique (tenant_id, slug)
);
