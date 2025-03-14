import { AxiosPromise } from "axios";
import apiIgdb from "../api/api-igdb";
import { Genre } from "@/types/genre";

export async function getGenres(): AxiosPromise<Genre[]> {
  let bodyParams = `fields checksum, name; limit 500;`;

  const response = await apiIgdb.post("/getGenres", bodyParams);
  return response;
}
