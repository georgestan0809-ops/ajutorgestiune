import type { JobName } from "@/src/modules/jobs/domain/job";

export interface JobDispatcher {
  dispatch(jobName: JobName, payload: Record<string, unknown>): Promise<void>;
}
