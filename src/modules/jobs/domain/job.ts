export type JobName =
  | "sync-sales-data"
  | "sync-stock-data"
  | "sync-billing-data"
  | "generate-daily-owner-brief";

export type JobDefinition = {
  name: JobName;
  description: string;
};
