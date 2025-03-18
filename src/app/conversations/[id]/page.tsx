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
    <div className="relative flex flex-col gap-3 px-4 py-6 h-full">
      <Messages id={id} />
      <div className="sticky bottom-0 self-justify-end bg-background">
        <MessageInput conversationId={id} />
      </div>
    </div>
  );
}
