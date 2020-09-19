export enum ScreenSize {
	mobileS = "320px",
	mobileM = "375px",
	mobileL = "425px",
	tablet = "768px",
	laptop = "1024px",
	laptopL = "1440px",
	desktop = "2560px",
}

export const formatMoney = (num: number): string => {
	return (Math.round(num * 100) / 100).toFixed(2);
};
