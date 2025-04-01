import { getGamesById } from "@/app/data/game";
import { GameArtwork } from "@/components/common/game-artwork";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default async function Game({ params }: any) {
  const { id }: any = await params;
  const response = await getGamesById(id);
  let game = (await response.json())[0];
  console.log(game);

  return (
    <div className="relative items-start justify-center h-screen">
      <GameArtwork url={game.artworks[0]?.url} />

      <div className="relative z-10">
        <div className="w-full px-20 py-10">
          <Card className="bg-transparent/75">
            <CardHeader>
              <CardTitle className="text-2xl text-white">{game.name}</CardTitle>
              <p className="text-slate-300 text-justify">{game.summary}</p>
            </CardHeader>
            <CardContent>
              <div className="flex justify-start items-start gap-5">
                <Image
                  src={
                    game.cover?.url
                      ? "https:" + game.cover.url.replace("t_thumb", "t_1080p")
                      : "https://upload.wikimedia.org/wikipedia/commons/6/6b/Black_Question_Mark.png"
                  }
                  alt={game.name}
                  width={180}
                  height={220}
                  className="rounded"
                ></Image>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
