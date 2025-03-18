"use client";

import { Message } from "@/components";
import { MessageSkeleton } from "@/components/skeletons";
import { useAppSelector } from "@/store/hooks";
import { useGetMessagesQuery } from "@/store/services";
import { selectUserId } from "@/store/slices";
import type { IMessage } from "@/types";
import type { ReactionType } from "@/types/api";
import { transferMessage } from "@/utils";

const getMessageKey = (
  conversationId: number,
  userId: number,
  timestamp: number,
) => {
  return `${conversationId}-${userId}-${timestamp}`;
};

export default function Messages({ id }: { id: number }) {
  const userId = useAppSelector(selectUserId);
  const { data: messages = [], isLoading } = useGetMessagesQuery(id);

  const handleReact = (message: IMessage, reaction: ReactionType) => {
    alert(`You reacted with ${reaction} to message: ${message.message}`);
  };

  if (isLoading)
    return (
      <>
        {Array.from({ length: 5 }).map((_, key) => (
          <MessageSkeleton key={key} />
        ))}
        <MessageSkeleton isMine />
      </>
    );

  return (
    <>
      {[...messages].reverse().map((_message) => {
        const message = transferMessage(_message);
        const key = getMessageKey(
          _message.conversationId,
          _message.userId,
          _message.timestamp,
        );
        const isMine = _message.userId === userId;
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
