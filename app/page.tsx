"use client";

import { useEffect, useState } from "react";

import AgentFeed from "@/components/mission-control/AgentFeed";
import AgentCard from "@/components/mission-control/AgentCard";
import JobsTable from "@/components/mission-control/JobsTable";
import Radar from "@/components/mission-control/Radar";
import FilterPanel
from "@/components/mission-control/FilterPanel";
import { useFilterStore }
from "@/store/filterStore";

import ResumeUploader
from "@/components/mission-control/ResumeUploader";

import { parseResume }
from "@/lib/parseResume";

import { extractSkills }
from "@/lib/extractSkills";

import { useProfileStore }
from "@/store/profileStore";

import { runAgents } from "@/agents/orchestrator";
import { Job } from "@/types/job";

const messages = [
  {
    agent: "Scout-01",
    message: "Scanning YC Startups...",
  },
  {
    agent: "Scout-02",
    message: "Searching Greenhouse Jobs...",
  },
  {
    agent: "Matcher-01",
    message: "Calculating Match Score...",
  },
  {
    agent: "Ranker-01",
    message: "Prioritizing Opportunities...",
  },
  {
    agent: "Scout-03",
    message: "Found SDE Internship @ Startup",
  },
];

export default function Home() {
  const [logs, setLogs] = useState<
    { agent: string; message: string }[]
  >([]);

  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const random =
        messages[Math.floor(Math.random() * messages.length)];

      setLogs((prev) => [random, ...prev].slice(0, 20));
    }, 1200);

    return () => clearInterval(interval);
  }, []);
  
  const { skills, setSkills } =
  useProfileStore();

  useEffect(() => {
    async function loadJobs() {
      const rankedJobs = await runAgents(skills);

      console.log("Agent Results:", rankedJobs);
       console.log( // temperory
      "Top Job:",
      rankedJobs[0]
    );

      setJobs(rankedJobs);
    }

    loadJobs();
  }, [skills]);



  const {roles,addRole,removeRole,} = useFilterStore();

  const filteredJobs =
  roles.length === 0
    ? jobs
    : jobs.filter((job) => {

        const title =
          job.role.toLowerCase();

        return roles.some((role) =>
          title.includes(
            role.toLowerCase()
          )
        );
      });  

  const suggestedRoles: string[] = [];

if (skills.includes("React")) {
  suggestedRoles.push("Frontend");
}

if (skills.includes("Node.js")) {
  suggestedRoles.push("Backend");
}

if (
  skills.includes("React") &&
  skills.includes("Node.js")
) {
  suggestedRoles.push("Full Stack");
}

if (
  skills.includes("TypeScript")
) {
  suggestedRoles.push("Software Engineer");
}
  

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto p-8">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold">
            AGENTOPS
          </h1>
          

          <p className="mt-2 text-zinc-400">
            Multi-Agent Internship Intelligence System
          </p>
          
          <div className="mt-6">
            <ResumeUploader
              onUpload={async (file) => {
            
                const text =
                  await parseResume(file);
            
                const extractedSkills =
                  extractSkills(text);
            
                setSkills(extractedSkills);
            
                console.log(
                  "Skills:",
                  extractedSkills
                );
              }}
            />
          </div>
        </div>


       {/* Skills */}
<div className="mt-4 flex flex-wrap gap-2">

  {skills.map((skill) => (
    <span
      key={skill}
      className="rounded-full bg-cyan-500/10 px-3 py-1 text-cyan-400"
    >
      {skill}
    </span>
  ))}

</div>

{/* AI Suggested Filters */}
{suggestedRoles.length > 0 && (
  <div className="mt-6 rounded-xl border border-green-500/20 bg-zinc-950 p-4">

    <h3 className="mb-3 text-lg font-semibold text-green-400">
      AI Suggested Filters
    </h3>

    <p className="mb-3 text-sm text-zinc-400">
      Based on your resume skills
    </p>

    <div className="flex flex-wrap gap-2">

      {suggestedRoles.map((role) => (
        <button
          key={role}
          onClick={() => addRole(role)}
          className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-green-400 hover:bg-green-500/20"
        >
          + {role}
        </button>
      ))}

    </div>

  </div>
)}
<div className="mt-6">
            <FilterPanel />
          </div>


        {/* Radar + Feed */}
        <div className="grid grid-cols-12 gap-6">

          <div className="col-span-8">
            <Radar />
          </div>

          <div className="col-span-4">
            <AgentFeed logs={logs} />
          </div>

        </div>

        {/* Stats */}
        <div className="mt-6 flex justify-between rounded-xl border border-zinc-800 bg-zinc-950 p-4">

          <span>
            🛰️ Active Agents: 4
          </span>

          <span>
            🎯 Jobs Found: {jobs.length}
          </span>

          <span className="text-green-400">
            ● ONLINE
          </span>

        </div>

        {/* Agents */}
        <div className="grid grid-cols-4 gap-4 mt-6">

          <AgentCard
            name="Scout-01"
            status="searching"
          />

          <AgentCard
            name="Scout-02"
            status="searching"
          />

          <AgentCard
            name="Matcher-01"
            status="processing"
          />

          <AgentCard
            name="Ranker-01"
            status="idle"
          />

        </div>
       

        {/* Jobs */}
        <div className="mt-6">
          
          <JobsTable jobs={filteredJobs} />
        </div>

      </div>
    </main>
  );
}