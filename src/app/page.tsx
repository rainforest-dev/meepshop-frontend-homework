import Conversations from "./Conversations";

export default async function Home() {
  return (
    <div className="flex flex-col gap-4">
      <h1>Conversations</h1>
      <Conversations />
    </div>
  );
}
