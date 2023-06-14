export default interface IPool {
    [o: string]: string | number | boolean;
    address: string;
    tokenId: number;
    maxAmount: number;
    totalAmount: number;
    endTime: number;
    minParticipation: number;
    itemId: number;
    collection: string;
    marketplace: string;
    poolFinished: boolean;
    poolSuccessful: boolean;
}

export const poolPropertyNames = [
    "tokenId",
    "maxAmount",
    "totalAmount",
    "endTime",
    "minParticipation",
    "itemId",
    "collection",
    "marketplace",
    "poolFinished",
    "poolSuccessful"
];
