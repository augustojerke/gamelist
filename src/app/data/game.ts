import { AxiosPromise } from "axios";
import apiIgdb from "../api/api-igdb";
import { Game } from "@/types/game";

export async function getGames(
  limit: number,
  offset: number,
  searchGameName: string
): AxiosPromise<Game[]> {
  let bodyParams = `fields name, aggregated_rating, cover.url, first_release_date, genres.name; 
    where version_parent = null & category = (0,1,8,9) & first_release_date != null`;

  if (searchGameName.trim() !== "") {
    bodyParams += ` & name ~ *"${searchGameName}"*`;
  }

  bodyParams += `
    ;limit ${limit}; 
    offset ${offset};
    sort aggregated_rating desc;`;

  const response = await apiIgdb.post("/getGames", bodyParams);
  return response;
}
