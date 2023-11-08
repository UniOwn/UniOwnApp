export interface IUser {
    id: string;
    address: string;
    username: string;
    likedGameIds?: string[];
    likedAssetIds?: string[];
    passportTokenId?: string;
}
