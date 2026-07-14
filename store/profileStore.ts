import { create } from "zustand";

interface ProfileState {
  skills: string[];
  setSkills: (
    skills: string[]
  ) => void;
}

export const useProfileStore =
  create<ProfileState>((set) => ({
    skills: [],
    setSkills: (skills) =>
      set({ skills }),
  }));