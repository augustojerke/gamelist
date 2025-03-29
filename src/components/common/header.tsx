"use client";
import { useState } from "react";
import Link from "next/link";
import GamelistTitle from "./gamelist-title";
import { ModeToggle } from "./dark-mode-toggle";
import { Menu, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";
import { AvatarDropdown } from "./avatar-dropdown";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();

  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex justify-between items-center px-10 py-4">
        <div className="flex items-center gap-10">
          <GamelistTitle className="text-3xl" />
          <nav className="hidden md:flex gap-10">
            <Link href="/?" className="text-md">
              Games
            </Link>
            <Link href="/?" className="text-md">
              Played
            </Link>
            <Link href="/?" className="text-md">
              Save
            </Link>
          </nav>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-3">
            <AvatarDropdown name={session?.user.username}>
              <Avatar>
                <AvatarImage src="/avatar.png" alt="Avatar" />
                <AvatarFallback>
                  {session?.user.username.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </AvatarDropdown>
          </div>
          <ModeToggle />
        </div>
        <div className="flex items-center gap-4 md:hidden">
          <ModeToggle />
          <AvatarDropdown name={session?.user.username}>
            <Avatar>
              <AvatarImage src="/avatar.png" alt="Avatar" />
              <AvatarFallback>
                {session?.user.username.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </AvatarDropdown>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            <Menu size={24} className="hover:text-slate-400" />
          </button>
        </div>
      </div>
      <div
        className={`backdrop-brightness-50 backdrop-blur-sm fixed inset-y-0 left-0 w-64 bg-background/95 shadow-2xl transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden flex flex-col p-6 h-screen border-r border-black`}
      >
        <button onClick={() => setIsOpen(false)} className="self-end p-2">
          <X size={24} />
        </button>
        <nav className="flex flex-col gap-6">
          <Link
            href="/?"
            className="text-lg px-4 py-2 hover:text-stone-500 transition"
            onClick={() => setIsOpen(false)}
          >
            Games
          </Link>
          <Link
            href="/?"
            className="text-lg px-4 py-2 hover:text-stone-500 transition"
            onClick={() => setIsOpen(false)}
          >
            Played
          </Link>
          <Link
            href="/?"
            className="text-lg px-4 py-2 hover:text-stone-500 transition"
            onClick={() => setIsOpen(false)}
          >
            Save
          </Link>
        </nav>
      </div>
    </header>
  );
}
