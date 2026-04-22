-- Incidents
create table incidents (
  id uuid primary key default gen_random_uuid(),
  league_id uuid references leagues(id) on delete cascade,
  reported_by uuid references profiles(id),
  description text not null,
  status text not null default 'submitted', -- submitted, ready_for_review, voting, finalized
  created_at timestamptz default now()
);

-- Evidence
create table incident_evidence (
  id uuid primary key default gen_random_uuid(),
  incident_id uuid references incidents(id) on delete cascade,
  url text not null,
  uploaded_by uuid references profiles(id),
  created_at timestamptz default now()
);

-- Steward votes
create table steward_votes (
  id uuid primary key default gen_random_uuid(),
  incident_id uuid references incidents(id) on delete cascade,
  steward_id uuid references profiles(id),
  verdict text not null,
  notes text,
  created_at timestamptz default now(),
  unique (incident_id, steward_id)
);

-- Final verdict
create table incident_verdicts (
  id uuid primary key default gen_random_uuid(),
  incident_id uuid references incidents(id) on delete cascade,
  verdict text not null,
  explanation text,
  penalty_code text references penalty_definitions(code),
  created_at timestamptz default now()
);
