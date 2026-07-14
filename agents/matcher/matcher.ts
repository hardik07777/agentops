import { Job } from "@/types/job";
import { analyzeJob } from "../analyzer/analyzer";

export async function matchJobs(
  jobs: Job[],
  skills: string[]
): Promise<Job[]> {

  return jobs.map((job) => {

    let score = 50;
    const analysis =
  analyzeJob(job, skills);

    const role = job.role.toLowerCase();

    if (role.includes("frontend")) score += 20;
    if (role.includes("backend")) score += 20;
    if (role.includes("full stack")) score += 25;
    if (role.includes("software")) score += 15;
    if (role.includes("web")) score += 15;

    if (skills.includes("React")) score += 5;
    if (skills.includes("Node.js")) score += 5;
    if (skills.includes("TypeScript")) score += 5;
    if (skills.includes("PostgreSQL")) score += 5;
    if (skills.includes("Docker")) score += 5;

    return {
  ...job,

  score: Math.min(score, 100),

  strengths:
    analysis.strengths,

  missingSkills:
    analysis.missingSkills,

  reason:
    analysis.strengths.length > 0
      ? `Matched ${analysis.strengths.join(", ")}`
      : "Low skill overlap",
};
  });

}