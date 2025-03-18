import { formateDateUnixToYear } from "@/lib/dateUtils";
import { Game } from "@/types/game";
import Image from "next/image";
import GameRating from "./game-rating";

interface CardGameProps {
  game: Game;
}

export function CardGame(props: CardGameProps) {
  return (
    <div className="flex border rounded-xl overflow-hidden border-border hover:border-primary bg-secondary transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="flex-shrink-0">
        <Image
          src={
            props.game.cover?.url
              ? "https:" + props.game.cover.url.replace("t_thumb", "t_1080p")
              : "https://upload.wikimedia.org/wikipedia/commons/6/6b/Black_Question_Mark.png"
          }
          alt={props.game.name}
          width={70}
          height={80}
          className="h-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between p-3 text-left bg-card h-full shadow-xl overflow-hidden">
        <div>
          <h1 className="font-bold text-sm truncate" title={props.game.name}>
            {props.game.name}
          </h1>
          <h2 className="text-slate-400 text-xs font-semibold">
            {formateDateUnixToYear(Number(props.game.first_release_date))}
          </h2>
        </div>
        <div className="flex justify-between items-center gap-5">
          <h1
            className="mt-3 text-xs truncate max-w-[calc(100%-60px)] overflow-hidden text-slate-400"
            title={
              props.game.genres
                ? props.game.genres.map((genre) => genre.name).join(", ")
                : ""
            }
          >
            {props.game.genres
              ? props.game.genres.map((genre) => genre.name).join(", ")
              : ""}
          </h1>
          <GameRating rating={props.game.total_rating} />
        </div>
      </div>
    </div>
  );
}
