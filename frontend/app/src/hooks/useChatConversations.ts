import IConversation from "../models/Conversation";
import { findConversations } from "../services/ChatService";

import useExecuteQuery from "./useExecuteQuery";

const useChatConversations = () => {
    const { refetch, data: conversations } = useExecuteQuery<IConversation[]>(findConversations, { shouldPerform: true });

    return {
        refetch,
        conversations
    };
};

export default useChatConversations;
