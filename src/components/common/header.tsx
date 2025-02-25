import Link from "next/link";
import GamelistTitle from "./gamelist-title";
import { ModeToggle } from "./dark-mode-toggle";

export default function Header() {
  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex justify-between items-center px-16">
        <div className="flex h-14 items-center">
          <div className="mr-12">
            <GamelistTitle className="text-3xl" />
          </div>
          <nav className="flex gap-10">
            <Link href="/?">Games</Link>
            <Link href="/?">Played</Link>
            <Link href="/?">Save</Link>
          </nav>
        </div>
        <ModeToggle />
      </div>
    </header>
  );
}
