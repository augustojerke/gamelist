import Link from "next/link";
import GamelistTitle from "./gamelist-title";

export default function Header() {
  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container flex h-14 items-center px-14">
          <div className="mr-12">
            <GamelistTitle className="text-3xl" />
          </div>
          <nav className="flex gap-10">
            <Link href="/?">Games</Link>
            <Link href="/?">Played</Link>
            <Link href="/?">Save</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
