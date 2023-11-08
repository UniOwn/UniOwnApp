import { useSession } from "next-auth/react";

import { IExtendedSession } from "@/models/extended-session/extended-session.interface";

const useAccessToken = () => {
    const { data: session } = useSession() as { data: IExtendedSession };

    return session?.access_token;
};

export default useAccessToken;
