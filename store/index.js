import getData from "@/app/api";
import { create } from "zustand";

export const useStore = create((set) => ({
  fetchData: async () => {
    // get fetch request on a server side
    set({ data: await getData() });
  },
}));
