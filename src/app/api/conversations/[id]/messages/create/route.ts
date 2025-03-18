import type { CreateMessagePayloadType } from "@/types/api";
import { createMessage } from "@/utils";

export const POST = async (
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) => {
  const { id: _id } = await params;
  const id = parseInt(_id);
  const body = await request.json();
  const { message, userId, messageType } = body as CreateMessagePayloadType;

  const newMessage = createMessage({
    conversationId: id,
    message,
    userId,
    messageType,
  });

  return new Response(JSON.stringify(newMessage), {
    headers: { "Content-Type": "application/json" },
  });
};
