import { formatUnits } from "ethers";

export const getShortAddress = (account: string | undefined): string => `${account?.slice(0, 4)}...${account?.slice(account?.length - 4)}`;
export const formatHexIntoDecimal = (hex: number): number => parseInt(formatUnits(hex, 16));
export const formatHexIntoDate = (hex: number): number => parseInt(formatUnits(hex, 0));
export const formatCreatedAtMessageDate = (ticks: number): string => {
    const date = new Date(ticks);

    if (date.getSeconds() <= 59) {
        return `${date.getSeconds()}s`;
    } else if (date.getMinutes() <= 59) {
        return `${date.getMinutes()}m`;
    } else if (date.getHours() <= 23) {
        return `${date.getHours()}h`;
    } else {
        return `${date.getDate()}d`;
    }
};

export const parseEnvVariable = (variable: string | undefined) => variable || "";
