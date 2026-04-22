import { z } from "zod";

export const ProfileSchema = z.object({
  id: z.string().uuid(),
  username: z.string().nullable(),
  avatar_url: z.string().nullable(),
  created_at: z.string().datetime()
});

export type Profile = z.infer<typeof ProfileSchema>;

export const RoleSchema = z.object({
  id: z.string().uuid(),
  tenant_id: z.string().uuid(),
  name: z.string(),
  created_at: z.string().datetime()
});

export type Role = z.infer<typeof RoleSchema>;

export const TenantMembershipSchema = z.object({
  id: z.string().uuid(),
  tenant_id: z.string().uuid(),
  user_id: z.string().uuid(),
  created_at: z.string().datetime()
});

export type TenantMembership = z.infer<typeof TenantMembershipSchema>;

export const UserRoleSchema = z.object({
  id: z.string().uuid(),
  membership_id: z.string().uuid(),
  role_id: z.string().uuid(),
  created_at: z.string().datetime()
});

export type UserRole = z.infer<typeof UserRoleSchema>;
