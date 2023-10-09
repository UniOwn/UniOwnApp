export class UpdateUserDto {
    readonly id: string;
    readonly name: string;
    readonly welcomeMessage?: string;
    readonly photoUrl?: string;
    readonly headerPhotoUrl?: string;
    readonly role?: string;
    readonly email?: string[] | null;
    readonly phone?: string[] | null;
    readonly availabilityText?: string;
    readonly locale?: string;
    readonly createdAt: number;
    readonly pushTokens: { [token_id: string]: true | null } | null;
}
