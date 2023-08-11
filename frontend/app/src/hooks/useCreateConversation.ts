import { createConversation } from "../services/ChatService";

import useExecuteQuery from "./useExecuteQuery";

const useCreateConversation = () => {
    const {
        error: newPoolConversationError,
        onSubmit: onSubmitNewPoolConversation,
        clearError: clearNewPoolConversationError
    } = useExecuteQuery(createConversation, { shouldPerform: false });

    return {
        newPoolConversationError,
        onSubmitNewPoolConversation,
        clearNewPoolConversationError
    };
};

export default useCreateConversation;
