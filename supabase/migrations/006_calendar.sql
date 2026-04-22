create table events (
  id uuid primary key default gen_random_uuid(),
  league_id uuid references leagues(id) on delete cascade,
  title text not null,
  description text,
  start_time timestamptz not null,
  end_time timestamptz,
  created_at timestamptz default now()
);
