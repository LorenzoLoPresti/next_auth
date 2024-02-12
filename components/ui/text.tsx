import { cn } from "@/lib/utils";
import React, { ComponentProps } from "react";

import { Poppins } from "next/font/google";

const fontH1 = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export type TextTags = "h1" | "p";

type TextProps = {
  as?: TextTags;
  styledAs?: TextTags;
} & ComponentProps<TextTags>;

const generalStyle = "text-white";

const styled: Record<TextTags, string> = {
  h1: cn("text-6xl font-semibold drop-shadow-md", fontH1.className),
  p: "text-lg",
};

export const Text = ({
  as = "p",
  styledAs = as,
  children,
  className,
  ...attr
}: TextProps) => {
  const El = as;

  const classNames = cn(generalStyle, styled[styledAs], className);

  return (
    <El {...attr} className={classNames}>
      {children}
    </El>
  );
};
