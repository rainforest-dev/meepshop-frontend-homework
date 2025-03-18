"use server";
import json from "@/assets/chat_data.json";
import type {
  CreateMessagePayloadType,
  IConversation,
  IMessage,
  IUser,
} from "@/types/api";
import type { IMessage as IMessageDB } from "@/types/db";

import { createClient } from "./supabase/server";

const conversations = json.conversations as IConversation[];

// const messages = json.messages as IMessage[];

const users = new Map<number, IUser>();
conversations.forEach((conversation) => {
  conversation.participants.forEach((participant) => {
    if (!users.has(participant.userId)) {
      users.set(participant.userId, participant);
    }
  });
});

export const getConversations = async () => {
  return conversations;
};

export const getUsers = async () => {
  return conversations;
};

export const getUserById = async (id: number) => {
  return users.get(id);
};

const transferMessage = (message: IMessage): Omit<IMessageDB, "id"> => {
  return {
    conversation_id: message.conversationId,
    user_id: message.userId,
    type: message.messageType,
    content: message.message,
    reactions: message.reactions,
    created_at: new Date(message.timestamp).toISOString(),
  };
};

const transferMessageFromDB = (message: IMessageDB): IMessage => {
  const user = users.get(message.user_id);
  if (!user) {
    throw new Error("User not found");
  }
  return {
    conversationId: message.conversation_id,
    userId: message.user_id,
    user: user.user,
    avatar: user.avatar,
    messageType: message.type as IMessage["messageType"],
    message: message.content,
    reactions: message.reactions,
    timestamp: new Date(message.created_at).getTime(),
  };
};

export const createMessage = async (payload: CreateMessagePayloadType) => {
  const user = users.get(payload.userId);
  if (!user) {
    throw new Error("User not found");
  }
  const message: IMessage = {
    conversationId: payload.conversationId,
    ...user,
    messageType: payload.messageType,
    message: payload.message,
    reactions: { like: 0, love: 0, laugh: 0 },
    timestamp: Date.now(),
  };

  const supabase = await createClient();
  await supabase.from("messages").insert([transferMessage(message)]);

  return message;
};

export const getMessages = async (conversationId?: number) => {
  const supabase = await createClient();
  const { data } = await supabase.from("messages").select("*");

  if (!data) {
    return [];
  }
  const messages = data.map(transferMessageFromDB);

  if (!conversationId) {
    return messages;
  }
  return messages.filter(
    (message) => message.conversationId === conversationId,
  );
};
