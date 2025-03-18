import json from "@/assets/chat_data.json";
import type {
  CreateMessagePayloadType,
  IConversation,
  IMessage,
  IUser,
} from "@/types/api";

const conversations = json.conversations as IConversation[];

const messages = json.messages as IMessage[];

const users = new Map<number, IUser>();
conversations.forEach((conversation) => {
  conversation.participants.forEach((participant) => {
    if (!users.has(participant.userId)) {
      users.set(participant.userId, participant);
    }
  });
});

export const getConversations = () => {
  return conversations;
};

export const getUsers = () => {
  return conversations;
};

export const getUserById = (id: number) => {
  return users.get(id);
};

export const createMessage = (payload: CreateMessagePayloadType) => {
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

  messages.push(message);
  return message;
};

export const getMessages = (conversationId?: number) => {
  if (!conversationId) {
    return messages;
  }
  return messages.filter(
    (message) => message.conversationId === conversationId,
  );
};
