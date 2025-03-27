import { AxiosPromise } from "axios";
import apiIgdb from "../api/api-igdb";
import { Game } from "@/types/game";
import { GameTableFiltersInterface } from "@/types/game-table-filters";
import { getGenresId } from "./genres";

export async function getGames(
  limit: number,
  offset: number,
  searchGameName: string,
  filters: GameTableFiltersInterface
): AxiosPromise<Game[]> {
  let bodyParams = `fields name, total_rating, cover.url, first_release_date, genres.name; 
    where version_parent = null & category = (0,1,8,9) & first_release_date != null`;

  if (searchGameName.trim() !== "") {
    bodyParams += ` & name ~ *"${searchGameName}"*`;
  }

  console.log(await getGenresId(filters.genres));

  bodyParams += `
    ;limit ${limit}; 
    offset ${offset};
    sort total_rating ${filters.order};`;

  console.log(bodyParams)

  const response = await apiIgdb.post("/getGames", bodyParams);
  return response;
}
