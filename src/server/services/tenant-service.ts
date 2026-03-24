import type { MembershipRepository, TenantRepository } from "@/src/core/contracts/repositories";
import type { TenantService } from "@/src/core/contracts/services";
import { AuthorizationError } from "@/src/core/errors/authorization-error";
import type { SystemRole } from "@/src/core/types/auth";
import type { TenantContext } from "@/src/core/types/tenant";

export class DefaultTenantService implements TenantService {
  constructor(
    private readonly tenantRepository: TenantRepository,
    private readonly membershipRepository: MembershipRepository,
  ) {}

  async getTenantBySlug(slug: string) {
    return this.tenantRepository.findBySlug(slug);
  }

  async assertTenantAccess(context: TenantContext, allowedRoles: SystemRole[]) {
    const hasRole = await this.membershipRepository.userHasRole(
      context.actorUserId,
      context.tenantId,
      allowedRoles,
    );

    if (!hasRole) {
      throw new AuthorizationError();
    }
  }
}
