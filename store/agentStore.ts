import { create } from "zustand";

interface Log {
  id: string;
  agent: string;
  message: string;
}

interface AgentState {
  logs: Log[];
  addLog: (log: Log) => void;
}

export const useAgentStore = create<AgentState>((set) => ({
  logs: [],
  addLog: (log) =>
    set((state) => ({
      logs: [log, ...state.logs]
    }))
}));