import IConversation from "../models/Conversation";
import { findConversationById } from "../services/ChatService";

import useExecuteQuery from "./useExecuteQuery";

const useConversation = (conversationId: string) => {
    const { data: conversation } = useExecuteQuery<IConversation>(
        findConversationById,
        { shouldPerform: true },
        conversationId
    );

    return {
        conversation
    };
};

export default useConversation;
