import { IMessage } from "@/types";

interface IProps extends Pick<IMessage, "reactions"> {
  onReact: (reaction: keyof IMessage["reactions"]) => void;
}

const getReactionEmoji = (reaction: keyof IMessage["reactions"]) => {
  switch (reaction) {
    case "like":
      return "👍";
    case "love":
      return "❤️";
    case "laugh":
      return "😂";
  }
};

export default function Reactions({ reactions, onReact }: IProps) {
  const totalReactions = Object.values(reactions).reduce(
    (acc, count) => acc + count,
    0
  );
  if (totalReactions === 0) {
    return null;
  }
  return (
    <div className="flex bg-background shadow rounded-full p-1 text-xs group gap-1">
      <div className="flex -space-x-1.5 group-hover:space-x-0 group-hover:gap-2">
        {Object.entries(reactions)
          .filter((reaction) => reaction[1])
          .map((reaction) => (
            <div key={reaction[0]} className="flex gap-1">
              <button
                className="cursor-pointer hover:bg-background-higher rounded-full"
                onClick={() =>
                  onReact(reaction[0] as keyof IMessage["reactions"])
                }
              >
                {getReactionEmoji(reaction[0] as keyof IMessage["reactions"])}
              </button>
              <span className="hidden group-hover:block">{reaction[1]}</span>
            </div>
          ))}
      </div>
      <span className="group-hover:hidden">{totalReactions}</span>
    </div>
  );
}
