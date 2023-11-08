import { environment } from "@/config";

const buildEndpoint = (endpoint: string, params?: Record<string, string>, filter?: Record<string, string>): string => {
    let url = endpoint;

    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            url = url.replace(`:${key}`, value);
        });
    }

    if (filter) {
        const filterParams = new URLSearchParams(filter);

        url += `?${filterParams.toString()}`;
    }

    return `${environment.backendUrl}${url}`;
};

export default buildEndpoint;
