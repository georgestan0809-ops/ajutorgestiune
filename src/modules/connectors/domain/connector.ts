export type ConnectorKey = "smartbill" | "nexus" | "custom_csv";

export type ConnectorDefinition = {
  key: ConnectorKey;
  label: string;
  description: string;
};
