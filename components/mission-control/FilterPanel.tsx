"use client";

import { useState } from "react";
import { useFilterStore } from "@/store/filterStore";

export default function FilterPanel() {
  const [input, setInput] =
    useState("");

  const {
    roles,
    addRole,
    removeRole,
  } = useFilterStore();

  function addFilter() {
    if (!input.trim()) return;

    addRole(input.trim());

    setInput("");
  }

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">

      <h3 className="mb-4 text-lg font-semibold">
        Job Filters
      </h3>

      <div className="flex gap-2">

        <input
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          placeholder="Frontend, Backend, AI..."
          className="flex-1 rounded-lg bg-zinc-900 px-3 py-2 outline-none"
        />

        <button
          onClick={addFilter}
          className="rounded-lg bg-cyan-500 px-4 py-2 text-black"
        >
          Add
        </button>

      </div>

      <div className="mt-4 flex flex-wrap gap-2">

        {roles.map((role) => (
          <button
            key={role}
            onClick={() =>
              removeRole(role)
            }
            className="rounded-full bg-cyan-500/10 px-3 py-1 text-cyan-400"
          >
            {role} ✕
          </button>
        ))}

      </div>

    </div>
  );
}