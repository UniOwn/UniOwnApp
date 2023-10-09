import { UserId, UnixMilliseconds } from "./common";

export default interface IUser {
    id: UserId;
    name: string;
    welcomeMessage?: string;
    photoUrl?: string;
    headerPhotoUrl?: string;
    role?: string;
    email?: string[] | null;
    phone?: string[] | null;
    custom?: { [name: string]: string };
    availabilityText?: string;
    locale?: string;
    createdAt: UnixMilliseconds;
    pushTokens: { [token_id: string]: true | null } | null;
}
