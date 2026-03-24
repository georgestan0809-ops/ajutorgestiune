import type { JobDispatcher } from "@/src/modules/jobs/application/job-dispatcher";
import type { JobName } from "@/src/modules/jobs/domain/job";

export class NoopJobDispatcher implements JobDispatcher {
  async dispatch(_jobName: JobName, _payload: Record<string, unknown>) {
    return;
  }
}
