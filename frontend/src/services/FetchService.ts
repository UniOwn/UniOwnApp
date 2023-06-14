export const fetchData = async (apiCall: string, method: "GET" | "POST" | "PUT" | "DELETE", data?: BodyInit | null, customHeaders?: [string, string][]) => {
    const url = `https://api.talkjs.com/${apiCall}`;

    const headers: HeadersInit = [["Authorization", `Bearer sk_test_dcVoELjbb46SEnajCuDnpZPxxlnLr8og`], ["Content-type", "application/json"], ...(customHeaders || [])];

    return await fetch(url, {
        headers,
        body: data ?? null,
        method
    });
};
