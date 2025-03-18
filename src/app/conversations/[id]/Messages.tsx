"use client";

import { Message } from "@/components";
import { useGetMessagesQuery } from "@/store/services";
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

  return (
    <>
      {messages?.map((_message) => {
        const message = transferMessage(_message);
        return (
          <Message
            key={getMessageKey(
              _message.conversationId,
              _message.userId,
              _message.timestamp
            )}
            {...message}
            isMine={_message.userId === USER_ID}
          />
        );
      })}
    </>
  );
}
