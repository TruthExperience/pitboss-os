-- Users (Supabase auth users)
create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text,
  avatar_url text,
  created_at timestamptz default now()
);

-- Roles within a tenant
create table roles (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid references tenants(id) on delete cascade,
  name text not null, -- admin, steward, driver, engineer, etc.
  created_at timestamptz default now(),
  unique (tenant_id, name)
);

-- User membership in a tenant
create table tenant_memberships (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid references tenants(id) on delete cascade,
  user_id uuid references profiles(id) on delete cascade,
  created_at timestamptz default now(),
  unique (tenant_id, user_id)
);

-- User roles within a tenant
create table user_roles (
  id uuid primary key default gen_random_uuid(),
  membership_id uuid references tenant_memberships(id) on delete cascade,
  role_id uuid references roles(id) on delete cascade,
  created_at timestamptz default now(),
  unique (membership_id, role_id)
);
