import { FC, PropsWithChildren } from "react";
import { Text, TextTags } from "@/components/ui/text";
import { cn } from "@/lib/utils";

const headerStyles = {
  heading: "text-black",
  p: "text-muted-foreground text-sm",
};

type TextBlockProps = PropsWithChildren<{
  isHeader?: boolean;
  headingAs: TextTags;
  paragraphAs: TextTags;
  headingStyledAs?: TextTags;
  paragraphStyledAs?: TextTags;
  headingText: string;
}>;

const TextBlock = ({
  isHeader = false,
  headingAs,
  paragraphAs,
  headingStyledAs = headingAs,
  paragraphStyledAs = paragraphAs,
  headingText,
  children,
}: TextBlockProps) => {
  return (
    <>
      <Text
        as={headingAs}
        styledAs={headingStyledAs}
        className={cn(isHeader && headerStyles.heading)}
      >
        {headingText}
      </Text>
      <Text
        as={paragraphAs}
        styledAs={paragraphStyledAs}
        className={cn(isHeader && headerStyles.p)}
      >
        {children}
      </Text>
    </>
  );
};

export default TextBlock;
