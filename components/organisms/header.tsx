import TextBlock from "@/components/molecules/textBlock";

type HeaderProps = {
  label: string;
};

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <TextBlock isHeader headingAs="h3" headingText="🔐 Auth" paragraphAs="p">
        {label}
      </TextBlock>
    </div>
  );
};
