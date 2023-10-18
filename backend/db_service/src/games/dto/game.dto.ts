import { Types } from "mongoose";

export class GameDto {
    readonly id?: string;
    readonly name: string;
    readonly contractAddress: string;
    readonly chainId: string;
    readonly imageLink: string;
    readonly ownerId: Types.ObjectId;
}
