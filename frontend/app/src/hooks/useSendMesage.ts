import { sendMessage } from "../services/ChatService";
import useExecuteQuery from "./useExecuteQuery";

const useSendMessage = () => {
    const { onSubmit: onSendMessage } = useExecuteQuery(sendMessage, { shouldPerform: false });

    return {
        onSendMessage
    };
};

export default useSendMessage;
