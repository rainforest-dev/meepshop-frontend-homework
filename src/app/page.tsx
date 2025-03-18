import Conversations from "./Conversations";

export default async function Home({
  params,
}: {
  params: Promise<{ id?: string }>;
}) {
  const { id: _id } = await params;
  const id = _id ? Number(_id) : undefined;
  return (
    <div className="flex flex-col gap-4">
      <h1>Conversations</h1>
      <Conversations id={id} />
    </div>
  );
}
