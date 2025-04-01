import { getGamesById } from "@/app/data/game";

export default async function Game({ params }: any) {
  const { id }: any = await params;
  console.log(await getGamesById(id));
  return <h1>{id}</h1>;
}
