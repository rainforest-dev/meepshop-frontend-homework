"use client";

import { useGetUserQuery } from "@/store/services";
import { USER_ID } from "@/utils";
import NextImage from "next/image";

export default function UserItem() {
  const { data: user } = useGetUserQuery(USER_ID);

  if (!user) return null;

  return (
    <div className="flex gap-2 items-center px-4 py-2 rounded">
      <NextImage
        src={user.avatar}
        alt="avatar"
        width={40}
        height={40}
        className="rounded-full"
      />
      <h3 className="grow">{user.name}</h3>
      <button className="px-2 py-1 hover:bg-background-higher rounded cursor-pointer hover:border">
        Logout
      </button>
    </div>
  );
}
