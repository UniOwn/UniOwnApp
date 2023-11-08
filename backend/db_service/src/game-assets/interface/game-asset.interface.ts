import { Document, Types } from "mongoose";

export interface IGameAsset extends Document {
    readonly name: string;
    readonly price: number;
    readonly tokenId: string;
    readonly chainId: string;
    readonly gameId?: Types.ObjectId;
    readonly ownerId: Types.ObjectId;
    readonly contractAddress: string;
}
