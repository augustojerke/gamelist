"use client";

import GamesTable from "@/components/common/games-table";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export default function Games() {
  const [searchGameName, setSearchGameName] = useState("");

  return (
    <div className="px-10 py-6">
      <div className="flex justify-start items-center gap-2">
        <Input
          className="w-full xl:w-1/4"
          placeholder="Search Game..."
          onBlur={(e) => setSearchGameName(e.target.value)}
        />
      </div>
      <Separator className="mt-5" />
      <GamesTable searchGameName={searchGameName} />
    </div>
  );
}
