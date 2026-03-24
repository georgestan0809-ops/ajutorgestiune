import type { ConnectorDefinition } from "@/src/modules/connectors/domain/connector";

export const connectorRegistry: ConnectorDefinition[] = [
  {
    key: "smartbill",
    label: "SmartBill",
    description: "Placeholder connector definition for future invoice sync.",
  },
  {
    key: "nexus",
    label: "Nexus POS",
    description: "Placeholder connector definition for future sales and stock sync.",
  },
  {
    key: "custom_csv",
    label: "CSV import",
    description: "Fallback ingestion path for merchants without native connectors.",
  },
];
