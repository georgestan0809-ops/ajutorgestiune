export const systemRoles = ["OWNER", "ADMIN", "ANALYST", "OPERATOR", "VIEWER"] as const;

export type SystemRole = (typeof systemRoles)[number];

export type SessionUser = {
  id: string;
  email: string;
  displayName: string | null;
  memberships: TenantMembership[];
};

export type TenantMembership = {
  tenantId: string;
  role: SystemRole;
};
