import type { IMessage } from "@/types";
import clsx from "clsx";
import NextImage from "next/image";

interface IProps extends IMessage {
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
  timestamp,
  isMine,
}: IProps) {
  return (
    <div className={clsx("flex gap-2", isMine && "flex-row-reverse")}>
      <NextImage
        src={avatar}
        width={40}
        height={40}
        alt={name}
        className="object-cover rounded-full size-10"
      />
      <div
        className={clsx(
          "bg-background-higher p-2 rounded-xl shadow",
          isMine ? "rounded-tr-none" : "rounded-tl-none"
        )}
      >
        <Content type={type} message={message} />
      </div>
    </div>
  );
}
