import { DefaultAuditService } from "@/src/server/services/audit-service";
import { DefaultAuthService } from "@/src/server/services/auth-service";
import { DefaultTenantService } from "@/src/server/services/tenant-service";
import { PrismaAuditLogRepository } from "@/src/server/repositories/prisma-audit-log-repository";
import { PrismaMembershipRepository } from "@/src/server/repositories/prisma-membership-repository";
import { PrismaTenantRepository } from "@/src/server/repositories/prisma-tenant-repository";

const tenantRepository = new PrismaTenantRepository();
const membershipRepository = new PrismaMembershipRepository();
const auditLogRepository = new PrismaAuditLogRepository();

export const container = {
  authService: new DefaultAuthService(),
  tenantService: new DefaultTenantService(tenantRepository, membershipRepository),
  auditService: new DefaultAuditService(auditLogRepository),
};
