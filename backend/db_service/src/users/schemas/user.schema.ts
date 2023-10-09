import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    id: string;

    @Prop()
    name: string;

    @Prop()
    welcomeMessage?: string;

    @Prop()
    photoUrl?: string;

    @Prop()
    headerPhotoUrl?: string;

    @Prop()
    role?: string;

    @Prop()
    email?: string[] | null;

    @Prop()
    phone?: string[] | null;

    @Prop()
    availabilityText?: string;

    @Prop()
    locale?: string;

    @Prop()
    createdAt: number;

    @Prop()
    pushTokens?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
