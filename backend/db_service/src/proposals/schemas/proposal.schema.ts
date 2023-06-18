import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ProposalDocument = Proposal & Document;

@Schema()
export class Proposal {
    @Prop()
    description: string;
}

export const ProposalSchema = SchemaFactory.createForClass(Proposal);
