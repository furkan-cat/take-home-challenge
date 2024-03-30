import getData from "@/app/api";
import { create } from "zustand";

export const useDataSlice = create((set) => ({
  data: [],
  originalData: [],
  fetchData: async () => {
    set({ data: (await getData()).data });
    set({ originalData: (await getData()).originalData });
  },
  updateList: (selected) => set(() => ({ data: [...selected] })),
}));

export const useFilterSlice = create((set) => ({
  searched: "",
  filtered: "",
  resetState: (state) => set(() => ({ searched: state })),
  setFilter: (selected) => set(() => ({ filtered: selected, searched: "" })),
  setSearch: (searched) => set(() => ({ searched: searched })),
}));
