"use client";

import { Game } from "@/types/game";
import { useEffect, useState } from "react";
import { CardGame } from "./card-game";

export default function GamesTable(props: any) {
  const [games, setGames] = useState([]);
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetchGames();
  }, []);

  async function fetchGames() {
    const data = await fetch("/api/getGames", {
      method: "POST",
      body: JSON.stringify({ limit, offset }),
    });
    setGames(await data.json());
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 p-16">
      {games.map((game: Game) => (
        <CardGame game={game} key={game.id} />
      ))}
    </div>
  );
}
