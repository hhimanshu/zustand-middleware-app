import create from "zustand";
import {persist} from "zustand/middleware";

interface StoreState {
    pagesVisited: number
    incrementFoodPageVisited: () => void
}

export const useStore = create<StoreState>(persist(
    (set, get) => ({
        pagesVisited: 0,
        incrementFoodPageVisited: () => set({ pagesVisited: get().pagesVisited + 1 })
    }),
    {
        name: "page-visits-datastore", // unique name
        getStorage: () => localStorage
    }
))

