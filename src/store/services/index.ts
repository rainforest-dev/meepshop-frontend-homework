import type { CreateMessagePayloadType, IMessage } from "@/types/api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (build) => ({
    getConversations: build.query({
      query: () => "conversations",
    }),
    getMessages: build.query({
      query: (conversationId: string) =>
        `conversations/${conversationId}/messages`,
    }),
    createMessage: build.mutation<IMessage, CreateMessagePayloadType>({
      query: ({ conversationId, ...body }) => ({
        url: `conversations/${conversationId}/messages`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetConversationsQuery,
  useGetMessagesQuery,
  useCreateMessageMutation,
} = api;
