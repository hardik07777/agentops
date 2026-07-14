"use client";

interface Log {
  agent: string;
  message: string;
}

export default function AgentFeed({
  logs,
}: {
  logs: Log[];
}) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5 h-[500px] overflow-auto">
      <h2 className="text-xl font-semibold mb-4">
        LIVE AGENT FEED
      </h2>

      <div className="space-y-3">
        {logs.map((log, index) => (
          <div
            key={index}
            className="border border-zinc-800 rounded-lg p-3"
          >
            <span className="text-cyan-400">
              [{log.agent}]
            </span>{" "}
            {log.message}
          </div>
        ))}
      </div>
    </div>
  );
}