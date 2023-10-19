import { IsNotEmpty, IsString, IsOptional, IsBoolean } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    readonly nickname: string;

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

    @IsBoolean()
    @IsNotEmpty()
    readonly hasMintedPassport: boolean;
}
