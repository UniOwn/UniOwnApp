import { IConversationCE } from "../models/Conversation";
import { IMessageCE } from "../models/Message";

import { fetchData } from "./FetchService";

const appId = process.env.CHAT_APP_ID;

export const findMessagesByConversationId = (conversationId: string) => {
    const response = fetchData(`v1/${appId}/conversations/${conversationId}/messages`, "GET");

    return response;
};

export const sendMessage = ({ message, conversationId }: { message: IMessageCE[]; conversationId: string }) => {
    const response = fetchData(`v1/${appId}/conversations/${conversationId}/messages`, "POST", JSON.stringify(message));

    return response;
};

export const leaveConversation = (userId: string, conversationId: string) => {
    const response = fetchData(`v1/${appId}/conversations/${conversationId}/participants/${userId}`, "DELETE");

    return response;
};

export const addParticipantToConversation = (userId: string, conversationId: string) => {
    const response = fetchData(`v1/${appId}/conversations/${conversationId}/participants/${userId}`, "PUT");

    return response;
};

export const createConversation = (conversation: IConversationCE) => {
    const conversationId = `internal_conversation_${new Date().getTime()}`;
    const response = fetchData(`v1/${appId}/conversations/${conversationId}`, "PUT", JSON.stringify(conversation));

    return response;
};

export const findConversations = () => {
    const response = fetchData(`v1/${appId}/conversations`, "GET");

    return response;
};

export const findConversationById = (conversationId: string) => {
    const response = fetchData(`v1/${appId}/conversations/${conversationId}`, "GET");

    return response;
};

export const findUsers = () => {
    const response = fetchData(`v1/${appId}/users`, "GET");

    return response;
};

export const findUserById = (userId: string) => {
    const response = fetchData(`v1/${appId}/users/${userId}`, "GET");

    return response;
};
