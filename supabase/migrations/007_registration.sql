-- Teams
create table teams (
  id uuid primary key default gen_random_uuid(),
  league_id uuid references leagues(id) on delete cascade,
  name text not null,
  created_at timestamptz default now(),
  unique (league_id, name)
);

-- Drivers
create table drivers (
  id uuid primary key default gen_random_uuid(),
  league_id uuid references leagues(id) on delete cascade,
  user_id uuid references profiles(id),
  team_id uuid references teams(id),
  number integer,
  created_at timestamptz default now(),
  unique (league_id, user_id)
);
