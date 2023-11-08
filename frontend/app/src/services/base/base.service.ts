import { getServerSession } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { IExtendedSession } from "@/models/extended-session/extended-session.interface";
import { AuthError } from "@/models/auth-error/auth-error";

export default class BaseService {
    private readonly _headers: [string, string][] = [["Content-Type", "application/json"]];

    private async _fetchWithAuth<T>(url: string, method: string, data?: BodyInit | null, customHeaders?: [string, string][]): Promise<T> {
        const session: IExtendedSession | null = await getServerSession(authOptions);
        const headers = [...this._headers, ...(customHeaders || [])];

        if (session?.access_token) {
            headers.push(["Authorization", `Bearer ${session.access_token}`]);
        }

        const response = await fetch(url, { method, body: data ?? null, headers });

        if (!response.ok) {
            switch (response.status) {
                case 401:
                    throw new AuthError();
                default:
                    throw new Error(response.statusText);
            }
        }

        return response.json();
    }

    async get<T>(url: string, customHeaders?: [string, string][]): Promise<T> {
        return this._fetchWithAuth<T>(url, "GET", undefined, customHeaders);
    }

    async post<T>(url: string, data?: BodyInit | null, customHeaders?: [string, string][]): Promise<T> {
        return this._fetchWithAuth<T>(url, "POST", data, customHeaders);
    }

    async put<T>(url: string, data?: BodyInit | null, customHeaders?: [string, string][]): Promise<T> {
        return this._fetchWithAuth<T>(url, "PUT", data, customHeaders);
    }

    async patch<T>(url: string, data?: BodyInit | null, customHeaders?: [string, string][]): Promise<T> {
        return this._fetchWithAuth<T>(url, "PATCH", data, customHeaders);
    }

    async delete<T>(url: string, customHeaders?: [string, string][]): Promise<T> {
        return this._fetchWithAuth<T>(url, "DELETE", undefined, customHeaders);
    }
}
