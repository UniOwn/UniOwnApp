export class UpdatePoolDto {
    readonly amount: string;
    readonly address: string;
    readonly tokenId: number;
    readonly maxAmount: number;
    readonly totalAmount: number;
    readonly endTime: number;
    readonly minParticipation: number;
    readonly itemId: number;
    readonly nftAddress: string;
    readonly marketplace: string;
    readonly poolFinished: boolean;
    readonly poolSuccessful: boolean;
}