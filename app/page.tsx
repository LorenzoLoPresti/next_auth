import { LoginButton } from "@/components/auth/loginButton";
import TextBlock from "@/components/molecules/textBlock";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
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
    </main>
  );
}
