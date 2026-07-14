"use client";

import { motion } from "framer-motion";

const agents = [
  {
    id: "scout-1",
    emoji: "🛰️",
    label: "Scout-01",
    startX: 120,
    startY: 180,
    pathX: [120, 300, 500, 700, 120],
    pathY: [180, 120, 240, 180, 180],
    duration: 20,
  },
  {
    id: "scout-2",
    emoji: "🛰️",
    label: "Scout-02",
    startX: 700,
    startY: 300,
    pathX: [700, 500, 250, 100, 700],
    pathY: [300, 180, 260, 150, 300],
    duration: 16,
  },
  {
    id: "scout-3",
    emoji: "🛰️",
    label: "Scout-03",
    startX: 450,
    startY: 420,
    pathX: [450, 600, 750, 500, 450],
    pathY: [420, 320, 180, 120, 420],
    duration: 22,
  },
];

export default function Radar() {
  return (
    <div className="relative h-[750px] overflow-hidden rounded-2xl border border-zinc-800 bg-black">

      {/* World Map */}
      <img
        src="/world-map.jpg"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />

      {/* Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent" />

      {/* AI Brain */}
      <motion.div
        className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-cyan-400 bg-cyan-500/10 text-4xl shadow-[0_0_40px_rgba(34,211,238,0.4)]">
          🧠
        </div>
      </motion.div>

      {/* Agent Drones */}
      {agents.map((agent) => (
        <motion.div
          key={agent.id}
          className="absolute z-30"
          animate={{
            x: agent.pathX,
            y: agent.pathY,
          }}
          transition={{
            duration: agent.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="flex flex-col items-center">
            <div className="text-2xl">
              {agent.emoji}
            </div>

            <div className="mt-1 rounded-full bg-black/70 px-2 py-1 text-[10px] text-cyan-400">
              {agent.label}
            </div>
          </div>
        </motion.div>
      ))}

      {/* Opportunity Pulse */}
      <motion.div
        className="absolute left-[62%] top-[35%]"
        animate={{
          scale: [1, 2.5, 1],
          opacity: [1, 0, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
      >
        <div className="h-5 w-5 rounded-full bg-green-400" />
      </motion.div>

      <div className="absolute left-[64%] top-[33%] text-xs text-green-400">
        Stripe SWE Intern
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-4 rounded-lg border border-zinc-800 bg-black/60 px-4 py-2 text-sm text-cyan-400 backdrop-blur">
        GLOBAL OPPORTUNITY GRID
      </div>
    </div>
  );
}