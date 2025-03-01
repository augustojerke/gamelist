import { formateDateUnix } from "@/lib/dateUtils";
import { Game } from "@/types/game";
import Image from "next/image";

interface CardGameProps {
  game: Game;
}

export function CardGame(props: CardGameProps) {
  return (
    <div className="flex bg-secondary border border-border rounded-xl overflow-hidden">
      <div className="flex-shrink-0">
        <Image
          src={"https:" + props.game.cover.url.replace("t_thumb", "t_1080p")}
          alt={props.game.name}
          width={70}
          height={80}
          className="h-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between p-3 text-left bg-card h-full shadow-xl overflow-hidden">
        <div>
          <h1 className="font-bold text-xs truncate" title={props.game.name}>
            {props.game.name}
          </h1>
          <h2 className="text-slate-600 text-xs font-semibold">
            {formateDateUnix(Number(props.game.first_release_date))}
          </h2>
        </div>
        <div className="text-right">
          <h1 className="text-xs">{props.game.aggregated_rating}</h1>
        </div>
      </div>
    </div>
  );
}
