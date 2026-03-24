import type { AuditLogRepository } from "@/src/core/contracts/repositories";
import type { AuditService } from "@/src/core/contracts/services";
import type { AuditAction } from "@/src/core/types/audit";
import type { TenantContext } from "@/src/core/types/tenant";

export class DefaultAuditService implements AuditService {
  constructor(private readonly auditLogRepository: AuditLogRepository) {}

  async record({
    context,
    action,
    entityType,
    entityId,
    metadata = {},
  }: {
    context: TenantContext;
    action: AuditAction;
    entityType: string;
    entityId: string;
    metadata?: Record<string, unknown>;
  }) {
    return this.auditLogRepository.create({
      tenantId: context.tenantId,
      actorUserId: context.actorUserId,
      action,
      entityType,
      entityId,
      metadata,
    });
  }
}
