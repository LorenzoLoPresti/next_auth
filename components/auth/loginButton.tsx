"use client";

import { PropsWithChildren } from "react";
import { useRouter } from "next/navigation";

type LoginButtonProps = PropsWithChildren<{
  mode?: "modal" | "redirect";
  asChild?: boolean;
}>;

export const LoginButton = ({
  mode = "redirect",
  asChild,
  children,
}: LoginButtonProps) => {
  const router = useRouter();

  function handleOnClick(): void {
    router.push("/auth/login");
  }

  if (mode === "modal") return <span>TO DO IMPLEMENT MODAL</span>;

  return <span onClick={handleOnClick}>{children}</span>;
};
