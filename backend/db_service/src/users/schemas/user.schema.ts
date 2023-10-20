import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type UserDocument = User & Document;

@Schema({ timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } })
export class User {
    @Prop()
    nickname: string;

    @Prop()
    photoUrl?: string;

    @Prop()
    role?: string;

    @Prop()
    email?: string[];

    @Prop()
    phone?: string[];

    @Prop()
    locale?: string;

    @Prop()
    likedGameIds?: string[];

    @Prop()
    likedAssetIds?: string[];

    @Prop()
    hasMintedPassport: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
