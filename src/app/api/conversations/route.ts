import { getConversations } from "@/utils";

export const GET = async () => {
  const conversations = await getConversations();
  return new Response(JSON.stringify(conversations), {
    headers: { "Content-Type": "application/json" },
  });
};
