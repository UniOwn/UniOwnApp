import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type DaoDocument = Dao & Document;

@Schema()
export class Dao {
    @Prop()
    amount: string;

    @Prop()
    currency: string;

    @Prop()
    address: string;

    @Prop()
    tokenId: number;

    @Prop()
    participationCount: number;

    @Prop()
    itemId: number;

    @Prop()
    nftAddress: string;

    @Prop()
    marketplace: string;

    @Prop()
    usersId: string[];
}

export const DaoSchema = SchemaFactory.createForClass(Dao);
