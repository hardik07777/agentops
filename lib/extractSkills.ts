const knownSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Prisma",
  "AWS",
  "Python",
  "Java",
  "C++",
];

export function extractSkills(
  text: string
): string[] {
  return knownSkills.filter((skill) =>
    text.toLowerCase().includes(
      skill.toLowerCase()
    )
  );
}