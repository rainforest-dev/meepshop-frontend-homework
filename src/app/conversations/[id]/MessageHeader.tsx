"use client";
import { useGetConversationsQuery } from "@/store/services";

export default function MessageHeader({ id }: { id: number }) {
  const { data: conversations } = useGetConversationsQuery();
  const conversation = conversations?.find((c) => c.id === id);
  const title = conversation?.participants.map((p) => p.user).join(", ");
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
  );
}
