import { getUserById } from "@/utils";

export const GET = async (
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) => {
  const { id: _id } = await params;
  const id = parseInt(_id);
  const user = await getUserById(id);

  if (!user) {
    return new Response("User not found", { status: 404 });
  }
  return new Response(JSON.stringify(user), {
    headers: { "Content-Type": "application/json" },
  });
};
