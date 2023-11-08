"use client";

import { useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    useEffect(() => {
        if (error) {
            toast.error(error?.message as string);
        }
    }, [error]);

    return <Toaster position="top-center" />;
}
