import { IMessage as IMessageServer } from "@/types/api";
import { IMessage } from "@/types/ui";

export * from "./constants";
export * from "./data";

export const transferMessage = (message: IMessageServer): IMessage => ({
  type: message.messageType,
  message: message.message,
  name: message.user,
  avatar: message.avatar,
  reactions: message.reactions,
  timestamp: new Date(message.timestamp),
});

export const imageToBase64 = (file: File): Promise<string> =>
  new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result === "string") {
        resolve(result);
      } else {
        throw new Error("Failed to convert image to base64");
      }
    };
    reader.readAsDataURL(file);
  });

export const isServerSide = typeof window === "undefined";
