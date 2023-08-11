import IMessage from "./Message";
import { UserId, ConversationId, UnixMilliseconds } from "./common";

export default interface IConversation {
    id: ConversationId;
    subject?: string | null;
    topicId?: string | null;
    photoUrl?: string | null;
    welcomeMessages?: string[] | null;
    custom?: { [name: string]: string } | null;
    lastMessage?: IMessage | null;
    participants: {
        [id: UserId]: { access: string; notify: boolean };
    };
    createdAt: UnixMilliseconds;
}

export interface IConversationCE {
    participants: string[];
    subject: string;
    welcomeMessages: string[];
    custom: { [name: string]: string } | null;
    photoUrl: string;
}
