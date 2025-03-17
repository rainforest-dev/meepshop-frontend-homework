import { conversations } from "@/utils";

export const GET = async () => {
  return new Response(JSON.stringify(conversations), {
    headers: { "Content-Type": "application/json" },
  });
};
