export interface StorePilotService {
  getDashboardSnapshot(tenantId: string): Promise<unknown>;
}
