import create from "zustand";

interface StoreState {
    pagesVisited: number
    incrementFoodPageVisited: () => void
}

export const useStore = create<StoreState>(set => ({
    pagesVisited: 0,
    incrementFoodPageVisited: () => set(state => ({pagesVisited: state.pagesVisited + 1}))
}))

