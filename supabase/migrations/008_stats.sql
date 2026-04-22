create table race_results (
  id uuid primary key default gen_random_uuid(),
  league_id uuid references leagues(id) on delete cascade,
  event_id uuid references events(id) on delete cascade,
  driver_id uuid references drivers(id),
  position integer,
  points integer,
  time interval,
  created_at timestamptz default now()
);
