"use client";

import GamesTable from "@/components/common/games-table";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Search } from "lucide-react";
import { GameTableFiltersInterface } from "@/types/game-table-filters";
import { GameTableFilters } from "@/components/common/game-table-filters";

export default function Games() {
  const [searchGameName, setSearchGameName] = useState("");
  const [query, setQuery] = useState("");
  const [filter, setFilters] = useState<GameTableFiltersInterface>({
    order: "desc",
  });

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
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <Button
          variant="outline"
          size="icon"
          className="h-9"
          onClick={handleSearch}
        >
          <Search />
        </Button>
        <GameTableFilters onChange={(e) => setFilters(e)} />
      </div>
      <Separator className="mt-5" />
      <GamesTable searchGameName={query} filters={filter} />
    </div>
  );
}
