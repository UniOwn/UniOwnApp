import { Document, Types } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type GameDocument = Game & Document;

@Schema({ timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } })
export class Game {
    @Prop()
    name: string;

    @Prop()
    chainId: string;

    @Prop()
    imageLink: string;

    @Prop()
    ownerId: Types.ObjectId;

    @Prop()
    contractAddress: string;
}

export const GameSchema = SchemaFactory.createForClass(Game);
