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
create or replace function auth.user_tenant_ids()
returns uuid[]
language sql stable
as $$
  select array(
    select tenant_id
    from tenant_memberships
    where user_id = auth.uid()
  );
```blockmath
;
create or replace function auth.is_staff(tenant uuid)
returns boolean
language sql stable

---

# ⭐ 4. Tenant‑scoped read access

Every tenant‑bound table gets:

```sql
create policy "tenant read"
on <table>
for select
using (
  tenant_id = any(create policy "staff write"
on <table>
for insert
with check (auth.is_staff(tenant_id));

create policy "staff update"
on <table>
for update
using (auth.is_staff(tenant_id))
with check (auth.is_staff(tenant_id));

create policy "staff delete"
on <table>
for delete
using (auth.is_staff(tenant_id));
create policy "user update own profile"
on profiles
for update
using (id = auth.uid())
with check (id = create policy "user submit incidents"
on incidents
for insert
with check (
  reported_by = create policy "user upload evidence"
on incident_evidence
for insert
with check (uploaded_by = create policy "user check in"
on checkins
for insert
with check (user_id = create policy "service role full access"
on <table>
for all
using (auth.role() = 'service_role')
with check (auth.role() = 'create policy "bot access"
on guild_links
for all
using (auth.role() = 'service_role')
with check (auth.role() = 'service_role');
