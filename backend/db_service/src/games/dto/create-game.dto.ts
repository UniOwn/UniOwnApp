import { Types } from "mongoose";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateGameDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly contractAddress: string;

    @IsString()
    @IsNotEmpty()
    readonly chainId: string;

    @IsString()
    @IsNotEmpty()
    readonly imageLink: string;

    @IsString()
    @IsNotEmpty()
    readonly ownerId: Types.ObjectId;
}
