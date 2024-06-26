import { create } from "zustand";

type UserSessionStore = {
  userSession: string;
  setUserSession: (userSession: string) => void;
};

const userSession = localStorage.getItem("userSession") ?? "";

export const useUserSessionStore = create<UserSessionStore>((set) => ({
  userSession,
  setUserSession: (userSession) => set(() => ({ userSession })),
}));
