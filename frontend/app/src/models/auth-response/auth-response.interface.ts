export interface IAuthResponse extends Record<string, string | number> {
    id: string;
    expires_at: number;
    access_token: string;
    refresh_token: string;
}
