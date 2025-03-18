import type { IMessage } from "@/types";
import clsx from "clsx";
import NextImage from "next/image";
import Reactions from "./Reactions";
import { format } from "date-fns";
import { DATETIME_FORMAT } from "@/utils";
import { ComponentProps } from "react";

interface IProps extends IMessage, ComponentProps<typeof Reactions> {
  isMine: boolean;
}

const Content = ({ type, message }: Pick<IProps, "type" | "message">) => {
  switch (type) {
    case "text":
    case "system":
      return message;
    case "image":
      return (
        <NextImage
          src={message}
          width={200}
          height={200}
          alt="image"
          className="rounded-xl rounded-tl-none shadow"
        />
      );
  }
};

export default function Message({
  type,
  message,
  name,
  avatar,
  reactions,
  onReact,
  timestamp: _timestamp,
  isMine,
}: IProps) {
  const timestamp = format(_timestamp, DATETIME_FORMAT);
  return (
    <div
      className={clsx("flex gap-2", isMine && "flex-row-reverse")}
      title={timestamp}
    >
      <NextImage
        src={avatar}
        width={40}
        height={40}
        alt={name}
        className="object-cover rounded-full size-10"
      />
      <div
        className={clsx("flex flex-col gap-1.5 px-1", isMine && "items-end")}
      >
        <div
          className={clsx(
            "bg-background-higher p-2 rounded-xl shadow relative",
            isMine ? "rounded-tr-none" : "rounded-tl-none"
          )}
        >
          <Content type={type} message={message} />
          <div
            className={clsx(
              "absolute bottom-0 translate-y-1/2",
              isMine ? "left-0 translate-x-1/2" : "right-0 -translate-x-1/2"
            )}
          >
            <Reactions reactions={reactions} onReact={onReact} />
          </div>
        </div>
        <div className="text-xs text-foreground/50">{timestamp}</div>
      </div>
    </div>
  );
}
