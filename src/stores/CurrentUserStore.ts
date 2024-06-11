import { Admin } from "@/types/Admin/Admin";
import { create } from "zustand";

type CurrentUserStore = {
  currentUser: Admin;
  setCurrentUser: (currentUser: Admin) => void;
};

const currentUser = JSON.parse(localStorage.getItem("currentUser") as string);

export const useCurrentUserStore = create<CurrentUserStore>((set) => ({
  currentUser,
  setCurrentUser: (currentUser) => set(() => ({ currentUser })),
}));
