import { Document, Types } from "mongoose";

export interface IGame extends Document {
    readonly name: string;
    readonly contractAddress: string;
    readonly chainId: string;
    readonly imageLink: string;
    readonly ownerId: Types.ObjectId;
}
