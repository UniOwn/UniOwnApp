import { UserId, MessageId, UnixMilliseconds } from "./common";

export default interface IMessage {
    attachment: { url: string; size: number } | null;
    conversationId: string;
    createdAt: UnixMilliseconds;
    editedAt: UnixMilliseconds | null;
    custom: { [name: string]: string };
    id: MessageId;
    location: [number, number] | null;
    origin: string;
    readBy: UserId[];
    senderId: UserId;
    text: string;
    type: string;
    referencedMessageId: string | null;
}

export interface IMessageCE {
    text: string;
    sender: string;
    type: string;
    referencedMessageId?: string;
    custom?: { [key: string]: string };
    idempotencyKey?: string;
}
