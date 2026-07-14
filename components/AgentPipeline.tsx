export default function AgentPipeline() {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
      <h2 className="text-xl font-semibold mb-6">
        AGENT WORKFLOW
      </h2>

      <div className="flex justify-between items-center">

        <div className="bg-zinc-900 p-4 rounded-lg">
          Scout
        </div>

        <span>→</span>

        <div className="bg-zinc-900 p-4 rounded-lg">
          Filter
        </div>

        <span>→</span>

        <div className="bg-zinc-900 p-4 rounded-lg">
          Match
        </div>

        <span>→</span>

        <div className="bg-zinc-900 p-4 rounded-lg">
          Rank
        </div>

      </div>
    </div>
  );
}