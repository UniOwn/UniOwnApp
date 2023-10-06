export class UpdateDaoDto {
    readonly amount: string;
    readonly currency: string;
    readonly address: string;
    readonly tokenId: number;
    readonly participationCount: number;
    readonly itemId: number;
    readonly nftAddress: string;
    readonly marketplace: string;
    readonly usersId: string[];
}