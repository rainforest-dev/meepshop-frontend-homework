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
  reactions: { like: number; love: number; laugh: number };
  timestamp: Date;
}
