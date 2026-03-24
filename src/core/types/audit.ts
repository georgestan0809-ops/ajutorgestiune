import type { ISODateTimeString, ID } from "@/src/core/types/common";

export type AuditAction =
  | "TENANT_CREATED"
  | "USER_INVITED"
  | "MEMBERSHIP_UPDATED"
  | "CONNECTOR_CREATED"
  | "JOB_TRIGGERED";

export type AuditLogEntry = {
  id: ID;
  tenantId: ID;
  actorUserId: ID | null;
  action: AuditAction;
  entityType: string;
  entityId: string;
  metadata: Record<string, unknown>;
  occurredAt: ISODateTimeString;
};
