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
    <div className="flex flex-col gap-4 h-full pb-6">
      <h1>Conversations</h1>
      <div className="grow">
        <Conversations id={id} />
      </div>
      <UserItem />
    </div>
  );
}
