"use client";

import { useRef, type PropsWithChildren } from "react";
import { type AppStore, makeStore } from ".";
import { Provider } from "react-redux";

export const StoreProvider = ({ children }: PropsWithChildren) => {
  const storeRef = useRef<AppStore>(undefined);
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};
