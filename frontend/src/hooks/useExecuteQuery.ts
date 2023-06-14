import { useState, useEffect, useCallback } from "react";

const useExecuteQuery = <T>(handler: (...params: any) => Promise<Response>, options: { shouldPerform: boolean }, params?: any) => {
    const { shouldPerform } = options;
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setLoading] = useState<boolean>(false);

    const getData = useCallback(async () => {
        try {
            setLoading(true);
            const response = await handler(params || {});
            const value = await response.json();

            setData(value);
            setLoading(false);
        } catch (e) {
            setLoading(false);
            const ex = e as Error;
            setError(ex?.message);
        }
    }, [handler, params]);

    const onSubmit = useCallback(async (submitParams: any) => {
        try {
            setLoading(true);
            const response = await handler(submitParams || {});
            const value = await response.json();

            setLoading(false);
            return value;
        } catch (e) {
            setLoading(false);
            const ex = e as Error;
            setError(ex.message);
        }
    }, [handler]);

    const clearError = () => {
        setError(null);
    };

    useEffect(() => {
            shouldPerform && getData();
    }, [getData, shouldPerform]);

    return {
        data,
        error,
        onSubmit,
        isLoading,
        clearError,
        refetch: getData
    };
};

export default useExecuteQuery;
