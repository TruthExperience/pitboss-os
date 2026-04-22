alter table tenants enable row level security;
alter table guild_links enable row level security;
alter table leagues enable row level security;

alter table profiles enable row level security;
alter table roles enable row level security;
alter table tenant_memberships enable row level security;
alter table user_roles enable row level security;

alter table rulebooks enable row level security;
alter table rulebook_sections enable row level security;
alter table penalty_definitions enable row level security;

alter table incidents enable row level security;
alter table incident_evidence enable row level security;
alter table steward_votes enable row level security;
alter table incident_verdicts enable row level security;

alter table checkin_windows enable row level security;
alter table checkins enable row level security;

alter table events enable row level security;

alter table teams enable row level security;
alter table drivers enable row level security;

alter table race_results enable row level security;

alter table rag_embeddings enable row level security;
