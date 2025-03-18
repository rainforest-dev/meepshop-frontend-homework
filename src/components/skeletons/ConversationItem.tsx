export default function ConversationItemSkeleton() {
  return (
    <li className="border-background-highest flex flex-col gap-1 rounded border px-4 py-2">
      <h3 className="h-lh skeleton-background-highest w-1/3"></h3>
      <p className="flex items-end justify-between text-sm">
        <span className="h-lh skeleton-background-highest w-1/2"></span>
        <span className="h-lh skeleton-background-highest w-1/4"></span>
      </p>
    </li>
  );
}
