export interface IMessage {
  id: number;
  conversation_id: number;
  user_id: number;
  type: "text" | "image" | "system";
  content: string;
  reactions: { like: number; love: number; laugh: number };
  created_at: string;
}
