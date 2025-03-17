"use client";

import { type PropsWithChildren } from "react";
import { store } from ".";
import { Provider } from "react-redux";

export const StoreProvider = ({ children }: PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>;
};
