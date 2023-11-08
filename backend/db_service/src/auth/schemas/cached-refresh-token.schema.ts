import { Document, Types } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type CachedRefreshTokenDocument = CachedRefreshToken & Document;

@Schema({ timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } })
export class CachedRefreshToken {
    @Prop()
    token: string;

    @Prop()
    expiresAt: number;

    @Prop()
    userId: Types.ObjectId;
}

export const CachedRefreshTokenSchema = SchemaFactory.createForClass(CachedRefreshToken);
