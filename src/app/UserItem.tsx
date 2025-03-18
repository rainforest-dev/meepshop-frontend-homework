"use client";

import NextImage from "next/image";

import { UserItemSkeleton } from "@/components/skeletons";
import { useGetUserQuery } from "@/store/services";
import { USER_ID } from "@/utils";

export default function UserItem() {
  const { data: user, isLoading } = useGetUserQuery(USER_ID);

  if (isLoading) return <UserItemSkeleton />;

  if (!user) return null;

  return (
    <div className="flex items-center gap-2 rounded px-4 py-2">
      <NextImage
        src={user.avatar}
        alt="avatar"
        width={40}
        height={40}
        className="rounded-full"
      />
      <h3 className="grow">{user.name}</h3>
      <button className="hover:bg-background-higher cursor-pointer rounded px-2 py-1 hover:border">
        Logout
      </button>
    </div>
  );
}
