
import { AxiosPromise } from "axios";
import apiIgdb from "../api/api-igdb";
import { Game } from "@/types/game";

export async function getGames(limit: number, offset: number) : AxiosPromise<Game[]>{
    let bodyParams = 
        `fields name, aggregated_rating, cover.url, first_release_date; 
        where version_parent = null & category = (0,1) & first_release_date != null;
        limit ${limit}; 
        offset ${offset};
        sort aggregated_rating desc;`
    const response = await apiIgdb.post("/getGames", bodyParams)    

    return response
}
