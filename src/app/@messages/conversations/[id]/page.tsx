import MessageHeader from "@/app/conversations/[id]/MessageHeader";
import MessageInput from "@/app/conversations/[id]/MessageInput";
import Messages from "@/app/conversations/[id]/Messages";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: _id } = await params;
  const id = parseInt(_id);

  return (
    <div className="relative flex size-full flex-col">
      <div className="bg-background sticky top-0 px-4 pt-6 pb-3">
        <MessageHeader id={id} />
      </div>
      <div className="flex h-full flex-col-reverse gap-3 overflow-auto rounded px-4 py-3">
        <Messages id={id} />
      </div>
      <div className="bg-background sticky bottom-0 pt-3 pb-6">
        <MessageInput prefix="desktop" conversationId={id} />
      </div>
    </div>
  );
}
