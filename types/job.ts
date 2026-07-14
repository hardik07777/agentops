export interface Job {
  company: string;
  role: string;
  location: string;

  score?: number;
  reason?: string;

  strengths?: string[];
  missingSkills?: string[];
}