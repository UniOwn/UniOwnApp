export class GameAssetDto {
    readonly id?: string;
    readonly name: string;
    readonly contractAddress: string;
    readonly tokenId: string;
    readonly price: number;
    readonly chainId: string;
    readonly gameId?: string;
}
