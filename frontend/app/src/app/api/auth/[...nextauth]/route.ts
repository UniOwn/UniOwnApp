import { SiweMessage } from "siwe";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import { getCsrfToken } from "next-auth/react";
import CredentialsProvider from "next-auth/providers/credentials";

import { environment } from "@/config";
import { IAuthResponse } from "@/models/auth-response/auth-response.interface";

const login = async (address: string, nonce: string, signature: string): Promise<IAuthResponse | null> => {
    const url = `${environment.backendUrl}/auth/sign-in`;
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            address,
            nonce,
            signature
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    const tokens = await response.json();

    return tokens;
};

const refreshToken = async (token: string): Promise<JWT> => {
    const url = `${environment.backendUrl}/auth/refresh`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`
        }
    });

    const tokens: IAuthResponse = await response.json();

    return tokens;
};

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "web3",
            name: "web3",
            credentials: {
                message: {
                    label: "Message",
                    type: "text"
                },
                signature: {
                    label: "Signature",
                    type: "text"
                }
            },
            async authorize(credentials, req) {
                const siwe = new SiweMessage(JSON.parse(credentials?.message || "{}"));
                const nextAuthUrl = new URL(process.env.NEXTAUTH_URL as string);

                const result = await siwe.verify({
                    signature: credentials?.signature || "",
                    domain: nextAuthUrl.host,
                    nonce: await getCsrfToken({ req: { headers: req.headers } })
                });

                if (result.success) {
                    const response = await login(result.data.address, result.data.nonce, credentials?.signature || "");

                    return response;
                }

                return null;
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, user }) {
            const tokens = token as IAuthResponse;

            if (user) return { ...token, ...user };

            if (new Date().getTime() < tokens.expires_at) return token;

            return await refreshToken(tokens.refresh_token);
        },

        async session({ token, session }) {
            const { id, ...tokens } = token;

            return { ...session, userId: id, tokens: tokens };
        }
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
