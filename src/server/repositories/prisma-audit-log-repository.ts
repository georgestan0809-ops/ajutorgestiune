import type { AuditLogRepository } from "@/src/core/contracts/repositories";
import type { AuditLogEntry } from "@/src/core/types/audit";
import type { PaginationInput, PaginatedResult } from "@/src/core/types/common";
import type { Prisma } from "@prisma/client";
import { prisma } from "@/src/server/db/client";

function mapAuditLogEntry(entry: {
  id: string;
  tenantId: string;
  actorUserId: string | null;
  action: string;
  entityType: string;
  entityId: string;
  metadata: unknown;
  occurredAt: Date;
}): AuditLogEntry {
  return {
    id: entry.id,
    tenantId: entry.tenantId,
    actorUserId: entry.actorUserId,
    action: entry.action as AuditLogEntry["action"],
    entityType: entry.entityType,
    entityId: entry.entityId,
    metadata: (entry.metadata as Record<string, unknown> | null) ?? {},
    occurredAt: entry.occurredAt.toISOString(),
  };
}

export class PrismaAuditLogRepository implements AuditLogRepository {
  async create(entry: Omit<AuditLogEntry, "id" | "occurredAt">) {
    const createdEntry = await prisma.auditLog.create({
      data: {
        ...entry,
        metadata: entry.metadata as Prisma.InputJsonValue,
      },
    });

    return mapAuditLogEntry(createdEntry);
  }

  async listByTenant(
    tenantId: string,
    pagination: PaginationInput,
  ): Promise<PaginatedResult<AuditLogEntry>> {
    const skip = (pagination.page - 1) * pagination.pageSize;

    const [items, total] = await Promise.all([
      prisma.auditLog.findMany({
        where: { tenantId },
        orderBy: { occurredAt: "desc" },
        skip,
        take: pagination.pageSize,
      }),
      prisma.auditLog.count({ where: { tenantId } }),
    ]);

    return {
      items: items.map(mapAuditLogEntry),
      total,
      page: pagination.page,
      pageSize: pagination.pageSize,
    };
  }
}
