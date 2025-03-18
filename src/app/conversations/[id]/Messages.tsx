"use client";

import { Message } from "@/components";
import { useGetMessagesQuery } from "@/store/services";
import type { IMessage } from "@/types";
import type { ReactionType } from "@/types/api";
import { transferMessage, USER_ID } from "@/utils";

const getMessageKey = (
  conversationId: number,
  userId: number,
  timestamp: number
) => {
  return `${conversationId}-${userId}-${timestamp}`;
};

export default function Messages({ id }: { id: number }) {
  const { data: messages } = useGetMessagesQuery(id);

  const handleReact = (message: IMessage, reaction: ReactionType) => {
    console.log(message, reaction);
  };

  return (
    <>
      {messages?.map((_message) => {
        const message = transferMessage(_message);
        const key = getMessageKey(
          _message.conversationId,
          _message.userId,
          _message.timestamp
        );
        const isMine = _message.userId === USER_ID;
        return (
          <Message
            key={key}
            {...message}
            isMine={isMine}
            onReact={(reaction) => handleReact(message, reaction)}
          />
        );
      })}
    </>
  );
}
