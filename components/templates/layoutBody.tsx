import { cn } from "@/lib/utils";
import React, { ComponentProps } from "react";

const LayoutBody = ({
  children,
  className,
  ...attr
}: ComponentProps<"main">) => {
  const classNames = cn(
    "h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800",
    className
  );

  return (
    <main {...attr} className={classNames}>
      {children}
    </main>
  );
};

export default LayoutBody;
