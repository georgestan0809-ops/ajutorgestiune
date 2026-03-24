import type { AuditAction, AuditLogEntry } from "@/src/core/types/audit";
import type { SessionUser, SystemRole } from "@/src/core/types/auth";
import type { Tenant, TenantContext } from "@/src/core/types/tenant";

export interface AuthService {
  getSessionUser(): Promise<SessionUser | null>;
}

export interface TenantService {
  getTenantBySlug(slug: string): Promise<Tenant | null>;
  assertTenantAccess(context: TenantContext, allowedRoles: SystemRole[]): Promise<void>;
}

export interface AuditService {
  record(params: {
    context: TenantContext;
    action: AuditAction;
    entityType: string;
    entityId: string;
    metadata?: Record<string, unknown>;
  }): Promise<AuditLogEntry>;
}
