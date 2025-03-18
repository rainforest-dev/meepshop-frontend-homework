import Conversations from "./Conversations";
import UserItem from "./UserItem";

export default async function Home({
  params,
}: {
  params: Promise<{ id?: string }>;
}) {
  const { id: _id } = await params;
  const id = _id ? Number(_id) : undefined;
  return (
    <div className="flex h-full flex-col gap-4 pb-6">
      <h1>Conversations</h1>
      <div className="grow">
        <Conversations id={id} />
      </div>
      <UserItem />
    </div>
  );
}
