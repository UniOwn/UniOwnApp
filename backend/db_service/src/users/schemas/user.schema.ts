import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type UserDocument = User & Document;

@Schema({ timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } })
export class User {
    @Prop()
    address: string;

    @Prop()
    signature?: string;

    @Prop()
    nonce?: string;

    @Prop()
    username?: string;

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
    passportTokenId?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
