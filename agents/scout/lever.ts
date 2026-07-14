import { Job } from "@/types/job";

export async function scoutLever(): Promise<Job[]> {
  return [
    {
      company: "Netflix",
      role: "Frontend Intern",
      location: "Remote",
      score: 0,
    },
  ];
}