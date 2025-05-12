import Image from "next/image";

interface GameArtworkProps {
  url: string | undefined;
}

export function GameArtwork(props: GameArtworkProps) {
  return (
    <div className="absolute inset-0 w-full h-2/3 overflow-hidden">
      <Image
        src={
          props.url
            ? "https:" + props.url.replace("t_thumb", "t_1080p")
            : "https://upload.wikimedia.org/wikipedia/commons/6/6b/Black_Question_Mark.png"
        }
        alt="Game Artwork"
        layout="fill"
        objectFit="cover"
        className="mask-fade blur-[3px] brightness-[0.65]"
      />
    </div>
  );
}
