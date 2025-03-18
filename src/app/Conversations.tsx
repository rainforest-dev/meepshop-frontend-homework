"use client";

import { ConversationItem } from "@/components";
import { ConversationItemSkeleton } from "@/components/skeletons";
import { useGetConversationsQuery } from "@/store/services";

export default function Conversations({ id }: { id?: number }) {
  const { data: conversations, isLoading } = useGetConversationsQuery();

  return (
    <ul className="flex flex-col gap-1">
      {isLoading
        ? Array.from({ length: 5 }).map((_, key) => (
            <ConversationItemSkeleton key={key} />
          ))
        : conversations?.map((conversation) => (
            <ConversationItem
              key={conversation.id}
              {...conversation}
              isActive={id === conversation.id}
            />
          ))}
    </ul>
  );
}
