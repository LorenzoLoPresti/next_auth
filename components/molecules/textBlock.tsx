import { FC, PropsWithChildren } from "react";
import { Text, TextTags } from "@/components/ui/text";

type TextBlockProps = PropsWithChildren<{
  headingAs: TextTags;
  paragraphAs: TextTags;
  headingStyledAs?: TextTags;
  paragraphStyledAs?: TextTags;
  headingText: string;
}>;

const TextBlock = ({
  headingAs,
  paragraphAs,
  headingStyledAs = headingAs,
  paragraphStyledAs = paragraphAs,
  headingText,
  children,
}: TextBlockProps) => {
  return (
    <>
      <Text as={headingAs} styledAs={headingStyledAs}>
        {headingText}
      </Text>
      <Text as={paragraphAs} styledAs={paragraphStyledAs}>
        {children}
      </Text>
    </>
  );
};

export default TextBlock;
