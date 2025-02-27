import { Game } from "@/types/game";
import Image from "next/image";

interface CardGameProps {
  game: Game;
}

export function CardGame(props: CardGameProps) {
  return (
    <div className="flex-col justify-center items-center text-center bg-secondary border border-border rounded-xl">
      <div className="flex justify-between items-center">
        <Image
          src={"https:" + props.game.cover.url.replace("t_thumb", "t_1080p")}
          alt={props.game.name}
          width={120}
          height={120}
        />
        <h1>{props.game.name}</h1>
        <h1>{props.game.aggregated_rating}</h1>
      </div>
    </div>
  );
}
