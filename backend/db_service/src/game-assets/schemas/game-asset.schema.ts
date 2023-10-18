import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type GameAssetDocument = GameAsset & Document;

@Schema()
export class GameAsset {
    @Prop()
    id?: string;

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
    gameId?: string;
}

export const GameAssetSchema = SchemaFactory.createForClass(GameAsset);
