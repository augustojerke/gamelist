"use client";

import GamesTable from "@/components/common/games-table";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ListFilter, Search } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { SelectOrder } from "@/components/common/select-order";
import { GameTableFilters } from "@/components/common/game-table-filters";

export default function Games() {
  const [searchGameName, setSearchGameName] = useState("");
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    setQuery(searchGameName);
  };

  return (
    <div className="px-10 py-6">
      <div className="flex justify-start items-center gap-2">
        <Input
          className="w-1/2 xl:w-1/4"
          placeholder="Search Game"
          value={searchGameName}
          onChange={(e) => setSearchGameName(e.target.value)}
        />
        <Button
          variant="outline"
          size="icon"
          className="h-9"
          onClick={handleSearch}
        >
          <Search />
        </Button>
        <GameTableFilters />
      </div>
      <Separator className="mt-5" />
      <GamesTable searchGameName={query} />
    </div>
  );
}
