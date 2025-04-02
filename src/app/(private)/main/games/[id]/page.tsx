import { getCompaniesById } from "@/app/data/company";
import { getGamesById } from "@/app/data/game";
import { getGenresIdReal } from "@/app/data/genres";
import { GameArtwork } from "@/components/common/game-artwork";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formateDateUnix } from "@/lib/dateUtils";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default async function Game({ params }: any) {
  const { id }: any = await params;
  const response = await getGamesById(id);
  let game = (await response.json())[0];
  let genres: any = await getGenresIdReal(game.genres);
  genres = await genres.json();
  let companies: any = await getCompaniesById(game.involved_companies);
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
              <Separator className="w-full mb-7" />
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
                <div className="flex-col justify-start items-start">
                  <h2 className="flex gap-2 mb-2">
                    <b>Release Date:</b>
                    <p className="text-slate-300">
                      {formateDateUnix(game.first_release_date)}
                    </p>
                  </h2>
                  <h2 className="flex gap-2 mb-2">
                    <b>Genres:</b>
                    <p className="text-slate-300">
                      {genres.map((genre: any) => genre.name).join(", ")}
                    </p>
                  </h2>
                  <h2 className="flex gap-2 mb-2">
                    <b>Involved Companies:</b>
                    <p className="text-slate-300">
                      {companies.map((company: any) => company.name).join(", ")}
                    </p>
                  </h2>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
