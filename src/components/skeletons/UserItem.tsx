export default function UserItemSkeleton() {
  return (
    <div className="flex items-center gap-2 rounded px-4 py-2">
      <div className="skeleton-background-highest size-10 rounded-full"></div>
      <h3 className="h-lh skeleton-background-highest grow"></h3>
      <button disabled className="rounded px-2 py-1">
        Logout
      </button>
    </div>
  );
}
