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

const keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

export const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;
