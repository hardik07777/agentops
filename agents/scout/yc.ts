import { Job } from "@/types/job";

export async function scoutYC(): Promise<Job[]> {
  return [
    {
      company: "YC Startup",
      role: "Full Stack Intern",
      location: "Bangalore",
      score: 0,
    },
  ];
}