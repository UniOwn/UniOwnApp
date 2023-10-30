export interface IJWTToken {
    token: string;
    expiresIn: number;
}

export interface IJWTTokens {
    access: IJWTToken;
    refresh: IJWTToken;
}

export interface ICachedRefreshToken {
    userId: string;
    refreshToken: string;
}
