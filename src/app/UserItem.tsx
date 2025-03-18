"use client";

import NextImage from "next/image";
import { type ChangeEventHandler, useState } from "react";

import { UserItemSkeleton } from "@/components/skeletons";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useGetUserQuery } from "@/store/services";
import { login, logout, selectUserId } from "@/store/slices";

const UserLogin = ({ onLogin }: { onLogin: (userId: number) => void }) => {
  const [userId, setUserId] = useState<number | null>(null);

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!isNaN(Number(e.target.value))) {
      setUserId(Number(e.target.value));
    }
  };

  return (
    <>
      <input
        type="text"
        inputMode="numeric"
        placeholder="Enter user ID"
        value={userId ? userId : ""}
        onChange={handleOnChange}
        className="focus:outline-primary w-full rounded border p-2"
      />
      <button
        onClick={() => userId && onLogin(userId)}
        className="hover:bg-background-higher cursor-pointer rounded px-2 py-1 hover:border"
      >
        Login
      </button>
    </>
  );
};

export default function UserItem() {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(selectUserId);
  const { currentData: user, isLoading } = useGetUserQuery(userId!, {
    skip: !userId,
  });

  const handleLogin = (userId: number) => {
    if (userId) {
      dispatch(login(userId));
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  if (isLoading) return <UserItemSkeleton />;

  return (
    <div className="flex items-center gap-2 rounded px-4 py-2">
      {user ? (
        <>
          <NextImage
            src={user.avatar}
            alt="avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h3 className="grow">{user.name}</h3>
          <button
            className="hover:bg-background-higher cursor-pointer rounded px-2 py-1 hover:border"
            onClick={handleLogout}
          >
            Logout
          </button>
        </>
      ) : (
        <UserLogin onLogin={handleLogin} />
      )}
    </div>
  );
}
