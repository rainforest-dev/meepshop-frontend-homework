import { IConversation, IMessage } from "./api";

declare global {
  namespace NodeJS {
    interface Global {
      conversations: IConversation[];
      messages: IMessage[];
    }
  }
}

export default global;
