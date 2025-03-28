import { ModeToggle } from "@/components/common/dark-mode-toggle";
import GamelistTitle from "@/components/common/gamelist-title";
import { SignUpForm } from "@/components/forms/signup-form";

export default function Page() {
  return (
    <div className="relative min-h-svh w-full flex items-center justify-center p-6 md:p-10">
      <div className="absolute top-6 left-6">
        <GamelistTitle className="text-3xl" />
      </div>
      <div className="absolute top-6 right-6">
        <ModeToggle />
      </div>
      <div className="w-full max-w-sm">
        <SignUpForm />
      </div>
    </div>
  );
}
