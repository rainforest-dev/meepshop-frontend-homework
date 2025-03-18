export interface IUser {
  userId: number;
  user: string;
  avatar: string;
}

export interface IConversation {
  id: number;
  participants: IUser[];
  lastMessage: string;
  timestamp: number;
}

export type ReactionType = "like" | "love" | "laugh";

export interface IMessage {
  conversationId: number;
  userId: number;
  user: string;
  avatar: string;
  messageType: "text" | "image" | "system";
  message: string;
  reactions: Record<ReactionType, number>;
  timestamp: number;
}

export type CreateMessagePayloadType = Pick<
  IMessage,
  "conversationId" | "message" | "userId" | "messageType"
>;
