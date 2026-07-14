interface AgentCardProps {
  name: string;
  status: string;
}

export default function AgentCard({
  name,
  status,
}: AgentCardProps) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
      <h3 className="font-semibold">{name}</h3>

      <p
        className={`mt-2 text-sm ${
          status === "searching"
            ? "text-green-400"
            : status === "processing"
            ? "text-yellow-400"
            : "text-zinc-400"
        }`}
      >
        {status}
      </p>
    </div>
  );
}