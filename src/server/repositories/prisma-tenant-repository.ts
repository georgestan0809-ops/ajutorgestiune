import type { TenantRepository } from "@/src/core/contracts/repositories";
import type { Tenant } from "@/src/core/types/tenant";
import { prisma } from "@/src/server/db/client";

function mapTenant(tenant: {
  id: string;
  slug: string;
  name: string;
  createdAt: Date;
}): Tenant {
  return {
    id: tenant.id,
    slug: tenant.slug,
    name: tenant.name,
    createdAt: tenant.createdAt.toISOString(),
  };
}

export class PrismaTenantRepository implements TenantRepository {
  async findById(id: string) {
    const tenant = await prisma.tenant.findUnique({ where: { id } });
    return tenant ? mapTenant(tenant) : null;
  }

  async findBySlug(slug: string) {
    const tenant = await prisma.tenant.findUnique({ where: { slug } });
    return tenant ? mapTenant(tenant) : null;
  }
}
