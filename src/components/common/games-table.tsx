"use client";

import { Game } from "@/types/game";
import { CardGame } from "./card-game";
import { useQuery } from "@tanstack/react-query";
import { getGames } from "@/app/data/game";
import { LoadingSpinner } from "./loading-spinner";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GameTableFiltersInterface } from "@/types/game-table-filters";

interface GamesTableProps {
  searchGameName: string;
  filters: GameTableFiltersInterface;
}

export default function GamesTable(props: GamesTableProps) {
  const limit = 24;
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setOffset(0);
  }, [props.searchGameName]);

  const { data: games, isPending } = useQuery({
    queryFn: () => getGames(limit, offset, props.searchGameName, props.filters),
    queryKey: ["get-games", limit, offset, props.searchGameName, props.filters],
    retry: false,
  });

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-100px)]">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-5">
        {games?.data.map((game: Game) => (
          <CardGame game={game} key={game.id} />
        ))}
      </div>
      <div className="flex justify-between mt-6">
        <Button
          variant="main"
          size="icon"
          onClick={() => setOffset((prev) => Math.max(0, prev - limit))}
          disabled={offset === 0}
        >
          <ChevronLeft />
        </Button>
        <Button
          variant="main"
          size="icon"
          onClick={() => setOffset((prev) => prev + limit)}
          disabled={!games?.data || games.data.length < limit}
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
