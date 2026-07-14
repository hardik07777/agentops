"use client";

import { motion } from "framer-motion";

export default function WorldMap() {
  return (
    <div className="relative h-[700px] w-full overflow-hidden rounded-2xl border border-zinc-800 bg-black">

      <img
        src="/world-map.svg"
        alt="world map"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />

      <motion.div
        className="absolute"
        animate={{
          x: [100, 300, 500, 250],
          y: [100, 200, 150, 300],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        🛰️
      </motion.div>

      <motion.div
        className="absolute"
        animate={{
          x: [600, 400, 200, 600],
          y: [300, 150, 250, 300],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        🛰️
      </motion.div>

    </div>
  );
}