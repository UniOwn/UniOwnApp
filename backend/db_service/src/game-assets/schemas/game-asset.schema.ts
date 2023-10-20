import { Document, Types } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type GameAssetDocument = GameAsset & Document;

@Schema({ timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } })
export class GameAsset {
    @Prop()
    name: string;

    @Prop()
    contractAddress: string;

    @Prop()
    tokenId: string;

    @Prop()
    price: number;

    @Prop()
    chainId: string;

    @Prop()
    gameId?: Types.ObjectId;

    @Prop()
    ownerId: Types.ObjectId;
}

export const GameAssetSchema = SchemaFactory.createForClass(GameAsset);
