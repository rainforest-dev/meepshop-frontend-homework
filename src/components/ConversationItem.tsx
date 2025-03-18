import type { IConversation } from "@/types/api";
import { DATETIME_FORMAT } from "@/utils";
import { format, formatDistanceToNowStrict } from "date-fns";
import NextLink from "next/link";

export default function ConversationItem({
  id,
  participants,
  lastMessage,
  timestamp,
}: IConversation) {
  const title = participants.map((participant) => participant.user).join(", ");
  const date = new Date(timestamp);

  return (
    <li>
      <NextLink
        href={`/conversations/${id}`}
        className="flex flex-col gap-1 px-4 py-2 rounded hover:bg-background-higher"
      >
        <h2>{title}</h2>
        <p className="flex justify-between">
          {lastMessage}
          <time dateTime={format(date, DATETIME_FORMAT)}>
            {formatDistanceToNowStrict(date)}
          </time>
        </p>
      </NextLink>
    </li>
  );
}
