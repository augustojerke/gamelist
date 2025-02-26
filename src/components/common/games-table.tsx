'use client'

import { useEffect, useState } from "react";

export default function GamesTable(props: any) {

  const [games, setGames] = useState([]);
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetchGames()
  }, [])

  async function fetchGames(){
    const data = await fetch("/api/getGames", {
      method: "POST",
      body: JSON.stringify({ limit, offset })
    })
    setGames(await data.json())
  }
  
  return (
    <div>
      {games.map((item: any, i: number) => (        
        <h1 key={i}>{item.name}</h1>
      ))}
    </div>
  );
}
