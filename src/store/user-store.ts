import { create } from "zustand";

interface UserState {
  name: string | null;
  email: string | null;
  setUser: (user: { name: string; email: string }) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  name: null,
  email: null,
  setUser: (user) => set({ name: user.name, email: user.email }),
  clearUser: () => set({ name: null, email: null }),
}));
