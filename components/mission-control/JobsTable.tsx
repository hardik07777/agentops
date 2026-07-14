import { Job } from "@/types/job";

interface JobsTableProps {
  jobs: Job[];
}

export default function JobsTable({
  jobs,
}: JobsTableProps) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
      <h2 className="mb-4 text-xl font-semibold">
        TOP OPPORTUNITIES
      </h2>

      <table className="w-full">
<thead>
  <tr className="border-b border-zinc-800">
    <th className="py-2 text-left">Company</th>
    <th className="py-2 text-left">Role</th>
    <th className="py-2 text-left">Location</th>
    <th className="py-2 text-left">Match</th>
    <th className="py-2 text-left">Reason</th>
  </tr>
</thead>

<tbody>
  {jobs.map((job , index) => (
    <tr
key={`${job.company}-${job.role}-${index}`}
      className="border-b border-zinc-900"
    >
      <td className="py-3">
        {job.company}
      </td>

      <td>
        {job.role}
      </td>

      <td>
        {job.location}
      </td>

      <td className="text-green-400">
        {job.score ?? 0}%
      </td>

      <td className="text-zinc-400">
        {job.reason ?? "No reason available"}
      </td>
    </tr>
  ))}

  {jobs.length === 0 && (
    <tr>
      <td
        colSpan={5}
        className="py-6 text-center text-zinc-500"
      >
        No opportunities discovered yet...
      </td>
    </tr>
  )}
</tbody>
      </table>
    </div>
  );
}