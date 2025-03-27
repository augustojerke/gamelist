import { AxiosPromise } from "axios";
import apiIgdb from "../api/api-igdb";
import { Genre } from "@/types/genre";

export async function getGenres(): AxiosPromise<Genre[]> {
  let bodyParams = `fields checksum, name; limit 500;`;

  const response = await apiIgdb.post("/getGenres", bodyParams);
  return response;
}

export async function getGenresId(checksums: string[]): AxiosPromise<Genre[]> {
  // Se o array de checksums estiver vazio, não adiciona a cláusula "where"
  let bodyParams = `
    fields checksum, name, id;
    limit 500;
  `;

  if (checksums.length > 0) {
    const checksumConditions = checksums
      .map((checksum) => `checksum = "${checksum}"`)
      .join(" | ");  // Usando " | " para combinar os checksums
    bodyParams = `
      fields checksum, name, id;
      where ${checksumConditions};
      limit 500;
    `;
  }

  console.log(bodyParams);  // Para depuração

  // Fazer a requisição para a IGDB API
  const response = await apiIgdb.post("/getGenres", bodyParams);
  return response.data;
}

