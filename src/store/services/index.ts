import type {
  CreateMessagePayloadType,
  IConversation,
  IMessage,
} from "@/types/api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import queryString from "query-string";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  tagTypes: ["conversations", "messages"],
  endpoints: (build) => ({
    getConversations: build.query<IConversation[], void>({
      query: () => "conversations",
      providesTags: ["conversations"],
    }),
    getMessages: build.query<IMessage[], number>({
      query: (conversationId) =>
        queryString.stringifyUrl({
          url: "messages",
          query: { conversationId },
        }),
      providesTags: ["messages"],
    }),
    createMessage: build.mutation<IMessage, CreateMessagePayloadType>({
      query: ({ conversationId, ...body }) => ({
        url: `conversations/${conversationId}/messages/create`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["messages"],
    }),
  }),
});

export const {
  useGetConversationsQuery,
  useGetMessagesQuery,
  useCreateMessageMutation,
} = api;
