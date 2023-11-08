import { Document, Types } from "mongoose";

export interface ICachedRefreshToken extends Document {
    readonly token: string;
    readonly expiresAt: number;
    readonly userId: Types.ObjectId;
}
