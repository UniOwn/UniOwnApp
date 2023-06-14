import { findUsers } from "../services/ChatService";

import useExecuteQuery from "./useExecuteQuery";

const useChatUsers = () => {
    const { refetch, data: users } = useExecuteQuery(findUsers, { shouldPerform: true });

    return {
        users,
        refetch
    };
};

export default useChatUsers;
