export interface IGame {
    id: string;
    name: string;
    chainId: string;
    ownerName: string;
    imageLink: string;
    assetsCount: number;
    isFeatured?: boolean;
    contractAddress: string;
}
