import { Session } from "next-auth";

export interface IExtendedSession extends Session {
    error?: string;
    userId?: string;
    expires_at?: number;
    access_token?: string;
    refresh_token?: string;
}
