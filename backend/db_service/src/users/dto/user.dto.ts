export class UserDto {
    readonly id?: string;
    readonly nickname: string;
    readonly photoUrl?: string;
    readonly role?: string;
    readonly email?: string[] | null;
    readonly phone?: string[] | null;
    readonly locale?: string;
    readonly createdAt: number;
    readonly likedGameIds?: string[];
    readonly likedAssetIds?: string[];
    readonly hasMintedPassport: boolean;
}
