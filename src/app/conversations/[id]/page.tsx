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
    <div className="relative flex flex-col h-full">
      <div className="sticky top-0 bg-background px-4 pt-6 pb-3">
        <MessageHeader id={id} />
      </div>
      <div className="h-full flex flex-col gap-3 overflow-auto px-4 py-3 rounded">
        <Messages id={id} />
      </div>
      <div className="sticky bottom-0 self-justify-end bg-background pb-6 pt-3">
        <MessageInput conversationId={id} />
      </div>
    </div>
  );
}
