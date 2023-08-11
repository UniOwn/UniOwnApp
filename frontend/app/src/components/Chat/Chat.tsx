import React, { useCallback, useState } from "react";
import classNames from "classnames";

import IConversation from "../../models/Conversation";

import useMessages from "../../hooks/useMessages";
import useAuthUser from "../../hooks/useAuthUser";
import useSendMessage from "../../hooks/useSendMesage";

import { formatCreatedAtMessageDate, getUserNameById } from "../../utils/utils";

import chatIcon from "../../images/pool-details/chat-icon.png";

import "./Chat.scss";

export interface IChatProps {
    disabled?: boolean;
    conversation: IConversation | null;
}

const Chat: React.FC<IChatProps> = ({ disabled, conversation }) => {
    const [text, setText] = useState<string>("");

    const { refetch, messages } = useMessages(conversation?.id || "", {
        shouldPerform: !!conversation
    });

    const { onSendMessage } = useSendMessage();

    const { authUser } = useAuthUser();

    const onSend = useCallback(
        async (event: any) => {
            if (event.code === "Enter" && text) {
                await onSendMessage({
                    message: [
                        {
                            text,
                            sender: authUser?.id,
                            type: "UserMessage"
                        }
                    ],
                    conversationId: conversation?.id
                });
                await refetch();
                setText("");
            }
        },
        [text, refetch, onSendMessage, authUser?.id, conversation?.id]
    );

    return (
        <div className="Chat">
            <div className="Chat-Wrapper">
                <div className="Chat-Header">
                    {/* {conversation?.photoUrl && (
                        <img src={conversation?.photoUrl} alt="" width={74} height={74} />
                    )} */}
                    <img src={chatIcon} alt="" width={74} height={74} />
                    <div className="Chat-HeaderParticipants">
                        Man13, BoredApp,Matrix2, Cryptojocker
                    </div>
                </div>
                <div className="Chat-Main">
                    {messages?.map(m => (
                        <div
                            key={m.id}
                            className={classNames(
                                "Message",
                                m.senderId === authUser?.id ? "Mine" : "NotMine"
                            )}
                        >
                            <div className="MessageHeader">
                                <div className="MessageSender">{getUserNameById(m.senderId)}</div>
                                <div className="MessageSentTime">
                                    {formatCreatedAtMessageDate(m.createdAt)}
                                </div>
                            </div>
                            <div className="MessageContent">{m.text}</div>
                        </div>
                    ))}
                </div>
                <div className="Chat-Input">
                    <input
                        type="text"
                        value={text}
                        onChange={event => setText(event.target.value)}
                        placeholder="Say something..."
                        className="Input"
                        onKeyDown={onSend}
                        disabled={disabled}
                    />
                </div>
            </div>
        </div>
    );
};

export default Chat;
