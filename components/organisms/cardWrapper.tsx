"use client";

import { PropsWithChildren } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Header } from "@/components/organisms/header";
import { Social } from "@/components/molecules/social";
import { BackButton } from "@/components/features/auth/backButton";

type CardWrapperProps = PropsWithChildren<{
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}>;

const CardWrapper = ({
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial = false,
  children,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};

export { CardWrapper };
