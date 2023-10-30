import { IsNotEmpty, IsString, IsOptional } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    readonly address: string;

    @IsString()
    readonly signature: string;

    @IsString()
    readonly nonce: string;

    @IsString()
    @IsOptional()
    readonly username: string;

    @IsOptional()
    readonly photoUrl: string;

    @IsOptional()
    readonly role: string;

    @IsOptional()
    readonly email: string[];

    @IsOptional()
    readonly phone: string[];

    @IsOptional()
    readonly locale: string;

    @IsOptional()
    readonly likedGameIds: string[];

    @IsOptional()
    readonly likedAssetIds: string[];

    @IsString()
    @IsOptional()
    readonly passportTokenId: string;
}
