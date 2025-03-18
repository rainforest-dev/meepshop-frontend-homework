import type { IConversation } from "@/types/api";
import { DATETIME_FORMAT } from "@/utils";
import { format, formatDistanceToNowStrict } from "date-fns";
import NextLink from "next/link";

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
        className="flex flex-col gap-1 px-4 py-2 rounded 
                    hover:bg-background-higher 
                    data-[active=true]:bg-background-higher data-[active=true]:border"
      >
        <h3 className="">{title}</h3>
        <p className="flex justify-between items-end text-sm">
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
