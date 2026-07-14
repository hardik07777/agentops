import axios from "axios";
import { Job } from "@/types/job";
import { greenhouseCompanies } from "./companies";

export async function scoutGreenhouse(): Promise<Job[]> {
  const jobs: Job[] = [];

  for (const company of greenhouseCompanies) {
    try {
      const { data } = await axios.get(
        `https://boards-api.greenhouse.io/v1/boards/${company}/jobs`
      );

      const companyJobs = data.jobs.map((job: any) => ({
        company,
        role: job.title,
        location: job.location?.name ?? "Unknown",
      }));

      jobs.push(...companyJobs);
    } catch {
      continue;
    }
  }

  return jobs;
}