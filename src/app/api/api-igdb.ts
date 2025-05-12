import { getIGDBToken } from "@/lib/tokenStore";
import axios, { AxiosInstance } from "axios";

const apiIgdb: AxiosInstance = axios.create({
  baseURL: "/api/igdb",
  headers: {
    Accept: "application/json",
    "Content-Type": "text/plain",
    "Client-ID": process.env.TWITCH_CLIENT_ID,
    Authorization: "Bearer " + (await getIGDBToken()),
  },
  timeout: 10000,
});

export default apiIgdb;
