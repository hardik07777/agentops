export interface Agent {
  id: string;
  name: string;
  status: "searching" | "processing" | "idle";
}

export interface AgentLog {
  id: string;
  agent: string;
  message: string;
  timestamp: string;
}