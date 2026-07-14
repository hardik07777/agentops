import { Job } from "@/types/job";

export function analyzeJob(
  job: Job,
  skills: string[]
) {
  const strengths: string[] = [];
  const missingSkills: string[] = [];

  const role = job.role.toLowerCase();

  if (
    role.includes("frontend") ||
    role.includes("ui")
  ) {
    if (skills.includes("React"))
      strengths.push("React");
    else
      missingSkills.push("React");
  }

  if (
    role.includes("backend")
  ) {
    if (skills.includes("Node.js"))
      strengths.push("Node.js");
    else
      missingSkills.push("Node.js");
  }

  if (
    role.includes("full stack")
  ) {
    if (skills.includes("React"))
      strengths.push("React");

    if (skills.includes("Node.js"))
      strengths.push("Node.js");
  }

  if (
    role.includes("software")
  ) {
    if (skills.includes("TypeScript"))
      strengths.push("TypeScript");
  }

  return {
    strengths,
    missingSkills,
  };
}