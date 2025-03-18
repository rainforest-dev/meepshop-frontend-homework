import { ReactionType } from "./api";

export interface IUser {
  id: number;
  name: string;
  avatar: string;
}

export interface IMessage {
  type: "text" | "image" | "system";
  message: string;
  name: string;
  avatar: string;
  reactions: Record<ReactionType, number>;
  timestamp: Date;
}
