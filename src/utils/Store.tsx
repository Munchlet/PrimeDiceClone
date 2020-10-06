import create from "zustand";

export const SettingsStore = create<SettingsStoreState>((set, get) => ({
	rollOver: 49.99,
	payout: 1.98,
	winChance: 50.0,
	isRollOver: true,
	setRollAndWin: (rollOver, payout, winChance) => set({ rollOver, winChance, payout }),
}));

type SettingsStoreState = {
	rollOver: number;
	payout: number;
	winChance: number;
	isRollOver: boolean;
	setRollAndWin: (rollOver: number, payout: number, winChance: number) => void;
};
