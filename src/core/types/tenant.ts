import type { ISODateTimeString, ID } from "@/src/core/types/common";

export type Tenant = {
  id: ID;
  slug: string;
  name: string;
  createdAt: ISODateTimeString;
};

export type TenantContext = {
  tenantId: ID;
  actorUserId: ID;
};
