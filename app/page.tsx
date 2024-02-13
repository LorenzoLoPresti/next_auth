import { LoginButton } from "@/components/features/auth/loginButton";
import TextBlock from "@/components/molecules/textBlock";
import LayoutBody from "@/components/templates/layoutBody";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <LayoutBody>
      <div className="space-y-6 text-center">
        <TextBlock headingAs="h1" headingText="🔐 Auth" paragraphAs="p">
          A simple authentication service
        </TextBlock>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </LayoutBody>
  );
}
