import NextLink from "next/link";
import type { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 container mx-auto py-4">
        <NextLink href="/" className="group cursor-pointer">
          <span className="material-symbols-outlined">menu</span>
        </NextLink>
      </nav>
      {children}
    </>
  );
}
