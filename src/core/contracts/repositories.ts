import type { AuditLogEntry } from "@/src/core/types/audit";
import type { SessionUser, SystemRole } from "@/src/core/types/auth";
import type { PaginationInput, PaginatedResult } from "@/src/core/types/common";
import type { Tenant } from "@/src/core/types/tenant";

export interface TenantRepository {
  findById(id: string): Promise<Tenant | null>;
  findBySlug(slug: string): Promise<Tenant | null>;
}

export interface MembershipRepository {
  userHasRole(userId: string, tenantId: string, roles: SystemRole[]): Promise<boolean>;
  findUserMemberships(userId: string): Promise<SessionUser["memberships"]>;
}

export interface AuditLogRepository {
  create(entry: Omit<AuditLogEntry, "id" | "occurredAt">): Promise<AuditLogEntry>;
  listByTenant(
    tenantId: string,
    pagination: PaginationInput,
  ): Promise<PaginatedResult<AuditLogEntry>>;
}
