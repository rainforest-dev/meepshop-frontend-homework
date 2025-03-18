"use client";

import { ConversationItem } from "@/components";
import { useGetConversationsQuery } from "@/store/services";

export default function Conversations() {
  const { data: conversations } = useGetConversationsQuery();

  return (
    <ul>
      {conversations?.map((conversation) => (
        <ConversationItem key={conversation.id} {...conversation} />
      ))}
    </ul>
  );
}
