-- Check-in windows
create table checkin_windows (
  id uuid primary key default gen_random_uuid(),
  league_id uuid references leagues(id) on delete cascade,
  opens_at timestamptz not null,
  closes_at timestamptz not null,
  created_at timestamptz default now()
);

-- Driver check-ins
create table checkins (
  id uuid primary key default gen_random_uuid(),
  window_id uuid references checkin_windows(id) on delete cascade,
  user_id uuid references profiles(id),
  status text not null, -- in, out, reserve
  notes text,
  created_at timestamptz default now(),
  unique (window_id, user_id)
);
