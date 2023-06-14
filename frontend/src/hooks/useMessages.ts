import IMessage from "../models/Message";
import { findMessagesByConversationId } from "../services/ChatService";

import useExecuteQuery from "./useExecuteQuery";

const useMessages = (conversationId: string, options: { shouldPerform: boolean }) => {
    const { shouldPerform } = options;

    const { data: messages, refetch } = useExecuteQuery<{ data: IMessage[] }>(
        findMessagesByConversationId,
        { shouldPerform },
        conversationId
    );

    return {
        refetch,
        messages: messages?.data
    };
};

export default useMessages;
