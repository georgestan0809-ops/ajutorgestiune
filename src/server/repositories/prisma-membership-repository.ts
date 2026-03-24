import type { MembershipRepository } from "@/src/core/contracts/repositories";
import type { SessionUser } from "@/src/core/types/auth";
import { prisma } from "@/src/server/db/client";

export class PrismaMembershipRepository implements MembershipRepository {
  async userHasRole(userId: string, tenantId: string, roles: SessionUser["memberships"][number]["role"][]) {
    const membership = await prisma.membership.findFirst({
      where: {
        userId,
        tenantId,
        role: { in: roles },
      },
      select: { id: true },
    });

    return Boolean(membership);
  }

  async findUserMemberships(userId: string) {
    const memberships = await prisma.membership.findMany({
      where: { userId },
      select: {
        tenantId: true,
        role: true,
      },
    });

    return memberships;
  }
}
