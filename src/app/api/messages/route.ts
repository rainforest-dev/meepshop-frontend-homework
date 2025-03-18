import type { NextRequest } from "next/server";

import { getMessages } from "@/utils";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const conversationId = searchParams.get("conversationId");

  const messages = getMessages(
    conversationId ? parseInt(conversationId) : undefined,
  );
  return new Response(JSON.stringify(messages), { status: 200 });
};
