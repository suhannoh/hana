import { create } from "zustand";

const commonStore = create((set) => ({
    theme: false,
    toggleTheme: () => set((state) => ({ theme: !state.theme }))
}));

export default commonStore;