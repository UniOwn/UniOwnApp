import { Document } from "mongoose";

export interface IGame extends Document {
    readonly name: string;
    readonly chainId: string;
    readonly isLiked: boolean;
    readonly imageLink: string;
    readonly ownerName: string;
    readonly assetsCount: number;
    readonly isFeatured?: boolean;
    readonly contractAddress: string;
}
