"use client";
import { ModeToggle } from "@/components/common/dark-mode-toggle";
import GamelistTitle from "@/components/common/gamelist-title";
import { LoginForm } from "@/components/forms/login-form";

export default function Page() {
  return (
    <div className="relative min-h-svh w-full flex items-center justify-center p-6 md:p-10">
      <div className="absolute top-4 left-4">
        <GamelistTitle className="text-3xl" />
      </div>
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
