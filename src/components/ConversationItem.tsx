import { format, formatDistanceToNowStrict } from "date-fns";
import NextLink from "next/link";

import type { IConversation } from "@/types/api";
import { DATETIME_FORMAT } from "@/utils";

interface IProps extends IConversation {
  isActive?: boolean;
}

export default function ConversationItem({
  id,
  participants,
  lastMessage,
  timestamp,
  isActive = false,
}: IProps) {
  const title = participants.map((participant) => participant.user).join(", ");
  const date = new Date(timestamp);

  return (
    <li>
      <NextLink
        href={`/conversations/${id}`}
        data-active={isActive}
        className="hover:bg-background-higher data-[active=true]:bg-background-higher flex flex-col gap-1 rounded px-4 py-2 data-[active=true]:border"
      >
        <h3 className="">{title}</h3>
        <p className="flex items-end justify-between text-sm">
          {lastMessage}
          <time
            dateTime={format(date, DATETIME_FORMAT)}
            title={format(date, DATETIME_FORMAT)}
            className="text-foreground/50"
          >
            {formatDistanceToNowStrict(date)}
          </time>
        </p>
      </NextLink>
    </li>
  );
}
