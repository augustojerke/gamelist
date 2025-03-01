"use client";

import { Game } from "@/types/game";
import { CardGame } from "./card-game";
import { useQuery } from "@tanstack/react-query";
import { getGames } from "@/app/data/game";
import { LoadingSpinner } from "./loading-spinner";

export default function GamesTable() {
  const { data: games, isPending } = useQuery({
    queryFn: () => getGames(8, 0),
    queryKey: ["get-games"],
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
    <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 p-16">
      {games?.data.map((game: Game) => (
        <CardGame game={game} key={game.id} />
      ))}
    </div>
  );
}
