import LayoutBody from "@/components/templates/layoutBody";
import React, { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return <LayoutBody>{children}</LayoutBody>;
};

export default AuthLayout;
