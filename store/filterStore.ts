import { create } from "zustand";

interface FilterState {
  roles: string[];

  addRole: (role: string) => void;
  removeRole: (role: string) => void;
}

export const useFilterStore =
  create<FilterState>((set) => ({
    roles: [],

    addRole: (role) =>
      set((state) => ({
        roles: state.roles.includes(role)
          ? state.roles
          : [...state.roles, role],
      })),

    removeRole: (role) =>
      set((state) => ({
        roles: state.roles.filter(
          (r) => r !== role
        ),
      })),
  }));