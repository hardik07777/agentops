import { Job } from "@/types/job";

export function rankJobs(jobs: Job[]) {
  return [...jobs].sort(
    (a, b) => (b.score ?? 0) - (a.score ?? 0)
  );
}