import { Document, Types } from "mongoose";

export interface IGameAsset extends Document {
    readonly name: string;
    readonly contractAddress: string;
    readonly tokenId: string;
    readonly price: number;
    readonly chainId: string;
    readonly gameId?: Types.ObjectId;
    readonly ownerId: Types.ObjectId;
}
