import { CardWrapper } from "@/components/organisms/cardWrapper";
import React from "react";

const backButtonHref = "/auth/register";

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account"
      backButtonHref={backButtonHref}
      showSocial
    >
      <div>Login form</div>
    </CardWrapper>
  );
};
