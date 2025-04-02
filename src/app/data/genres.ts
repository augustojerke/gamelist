import { AxiosPromise } from "axios";
import apiIgdb from "../api/api-igdb";
import { Genre } from "@/types/genre";

export async function getGenres(): AxiosPromise<Genre[]> {
  let bodyParams = `fields checksum, name; limit 500;`;

  const response = await apiIgdb.post("/getGenres", bodyParams);
  return response;
}

export async function getGenresId(checksums: string[]) {
  let bodyParams = `
    fields checksum, name, id;
    limit 500;
  `;

  if (checksums.length > 0) {
    const checksumConditions = checksums
      .map((checksum) => `checksum = ("${checksum}")`)
      .join(" | ");
    bodyParams = `
      fields checksum, name, id;
      where ${checksumConditions};
      limit 500;
    `;
  }

  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/igdb/getGenres",
    {
      method: "POST",
      body: bodyParams,
    }
  );
  return response;
}

export async function getGenresIdReal(ids: number[]) {
  let bodyParams = `
    fields checksum, name, id;
    limit 500;
  `;

  if (ids.length > 0) {
    const idConditions = ids.map((id) => `id = ${id}`).join(" | ");
    bodyParams = `
      fields checksum, name, id;
      where ${idConditions};
      limit 500;
    `;
  }

  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/igdb/getGenres",
    {
      method: "POST",
      body: bodyParams,
    }
  );
  return response;
}
