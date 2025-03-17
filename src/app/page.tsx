import { ConversationItem } from "@/components";
import { store } from "@/store";
import { api } from "@/store/services";

const getData = async () => {
  const conversations = await store.dispatch(
    api.endpoints.getConversations.initiate()
  );
  return conversations.data;
};

export default async function Home() {
  const conversations = await getData();

  return (
    <div className="flex flex-col gap-4">
      <h1>Conversations</h1>
      <ul>
        {conversations?.map((conversation) => (
          <ConversationItem key={conversation.id} {...conversation} />
        ))}
      </ul>
    </div>
  );
}
