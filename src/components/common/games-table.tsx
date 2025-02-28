"use client";

import { Game } from "@/types/game";
import { CardGame } from "./card-game";
import { useQuery } from "@tanstack/react-query";
import { getGames } from "@/app/data/game";

export default function GamesTable() {

  const { data: games } = useQuery({
    queryFn: () => getGames(8, 0),
    queryKey: ['get-games'],
    retry: false
  })

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 p-16">
      {games?.data.map((game: Game) => (
        <CardGame game={game} key={game.id} />
      ))}
    </div>
  );
}


