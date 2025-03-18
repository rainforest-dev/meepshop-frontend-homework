import clsx from "clsx";

export default function MessageSkeleton({
  isMine = false,
}: {
  isMine?: boolean;
}) {
  return (
    <div className={clsx("flex w-full gap-2", isMine && "flex-row-reverse")}>
      <div className="skeleton-background-highest size-10 rounded-full"></div>
      <div
        className={clsx(
          "flex w-full flex-col gap-1.5 px-1",
          isMine && "items-end",
        )}
      >
        <div
          className={clsx(
            "skeleton-background-highest w-1/2 rounded-xl p-2 shadow",
            isMine ? "rounded-tr-none" : "rounded-tl-none",
          )}
        >
          <div className="h-lh"></div>
        </div>
        <div className="h-lh skeleton-background-highest w-1/4 text-xs opacity-90"></div>
      </div>
    </div>
  );
}
