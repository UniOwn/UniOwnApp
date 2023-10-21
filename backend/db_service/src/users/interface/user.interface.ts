import { Document } from "mongoose";

export interface IUser extends Document {
    readonly nickname: string;
    readonly photoUrl?: string;
    readonly role?: string;
    readonly email?: string[];
    readonly phone?: string[];
    readonly locale?: string;
    readonly likedGameIds?: string[];
    readonly likedAssetIds?: string[];
    readonly passportTokenId: string;
}
