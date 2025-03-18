"use client";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit/react";

import { isServerSide } from "@/utils";

import { RootState } from "..";

interface IState {
  userId?: number;
}

const USER_ID_KEY = "userId" as const;

const initialState: IState = {
  userId:
    !isServerSide && localStorage.getItem(USER_ID_KEY)
      ? Number(localStorage.getItem(USER_ID_KEY))
      : undefined,
};

const slice = createSlice({
  name: "root",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<number>) => {
      state.userId = action.payload;
      localStorage.setItem(USER_ID_KEY, action.payload.toString());
    },
    logout: (state) => {
      state.userId = undefined;
      localStorage.removeItem(USER_ID_KEY);
    },
  },
});

export default slice.reducer;

export const { login, logout } = slice.actions;

export const selectUserId = (state: RootState) => state.root.userId;
