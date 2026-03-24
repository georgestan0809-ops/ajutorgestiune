import type { ConnectorDefinition } from "@/src/modules/connectors/domain/connector";

export interface ConnectorService {
  listAvailable(): Promise<ConnectorDefinition[]>;
}
