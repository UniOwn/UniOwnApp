import { Types } from "mongoose";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateGameAssetDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly contractAddress: string;

    @IsString()
    @IsNotEmpty()
    readonly tokenId: string;

    @IsNumber()
    @IsNotEmpty()
    readonly price: number;

    @IsString()
    @IsNotEmpty()
    readonly chainId: string;

    @IsString()
    @IsOptional()
    readonly gameId?: Types.ObjectId;

    @IsString()
    @IsNotEmpty()
    readonly ownerId: Types.ObjectId;
}
