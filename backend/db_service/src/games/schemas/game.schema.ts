import { Document, Types } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type GameDocument = Game & Document;

@Schema()
export class Game {
    @Prop()
    id?: string;

    @Prop()
    name: string;

    @Prop()
    contractAddress: string;

    @Prop()
    chainId: string;

    @Prop()
    imageLink: string;

    @Prop()
    ownerId: Types.ObjectId;
}

export const GameSchema = SchemaFactory.createForClass(Game);
