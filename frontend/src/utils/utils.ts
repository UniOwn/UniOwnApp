import { formatUnits } from "ethers/lib/utils";
import { UserIds } from "../config/userIds";

export const getShortAddress = (account: string): string => `${account.slice(0, 4)}...${account.slice(account.length - 4)}`;
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

const names = {
    [UserIds.internal_user_id1.toString()]: "Man13",
    [UserIds.internal_user_id2.toString()]: "Cryptojocker"
};

export const getUserNameById = (id: string): string => names[id];
