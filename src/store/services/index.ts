import type {
  CreateMessagePayloadType,
  IConversation,
  IMessage,
} from "@/types/api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  endpoints: (build) => ({
    getConversations: build.query<IConversation[], void>({
      query: () => "conversations",
    }),
    getMessages: build.query<IMessage[], string>({
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
