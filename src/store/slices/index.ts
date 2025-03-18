import { createSlice, type PayloadAction } from "@reduxjs/toolkit/react";

import { RootState } from "..";

interface IState {
  userId?: number;
}

const initialState: IState = {};

const slice = createSlice({
  name: "root",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<number>) => {
      state.userId = action.payload;
    },
    logout: (state) => {
      state.userId = undefined;
    },
  },
});

export default slice.reducer;

export const { login, logout } = slice.actions;

export const selectUserId = (state: RootState) => state.root.userId;
