import { IJWTTokens } from "./jwt-tokens.interface";

export interface ISignUpResponse {
    userId: string;
    tokens: IJWTTokens;
}
