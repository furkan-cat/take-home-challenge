import { create } from "zustand";

const useDataSlice = create((set) => ({
  data: [],
  originalData: [],
  setFetchedData: (data, originalData) =>
    set(() => ({ data: data, originalData: originalData })),
  updateList: (selected) => set(() => ({ data: [...selected] })),
}));

const useFilterSlice = create((set) => ({
  searched: "",
  filtered: "",
  resetState: (state) => set(() => ({ searched: state })),
  setFilter: (selected) => set(() => ({ filtered: selected, searched: "" })),
  setSearch: (searched) => set(() => ({ searched: searched })),
}));

export { useDataSlice, useFilterSlice };