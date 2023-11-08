import { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";

import { errors } from "@/config";
import { IExtendedSession } from "@/models/extended-session/extended-session.interface";

const useRefreshTokenErrorHandler = () => {
    const { data: session } = useSession() as { data: IExtendedSession };

    useEffect(() => {
        if (!session || session?.error === errors.refreshAccessTokenError) {
            signOut();
        }
    }, [session]);
};

export default useRefreshTokenErrorHandler;
