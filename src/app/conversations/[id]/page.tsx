import MessageHeader from "./MessageHeader";
import MessageInput from "./MessageInput";
import Messages from "./Messages";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: _id } = await params;
  const id = parseInt(_id);

  return (
    <div className="relative flex h-full flex-col">
      <div className="bg-background sticky top-0 px-4 pt-6 pb-3">
        <MessageHeader id={id} />
      </div>
      <div className="flex h-full flex-col-reverse gap-3 overflow-auto rounded px-4 py-3">
        <Messages id={id} />
      </div>
      <div className="self-justify-end bg-background sticky bottom-0 pt-3 pb-6">
        <MessageInput conversationId={id} />
      </div>
    </div>
  );
}
