import axios, { AxiosInstance } from "axios";

const apiIgdb: AxiosInstance = axios.create({
  baseURL: "/api/igdb",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'text/plain', 
    "Client-ID": process.env.API_IGDB_CLIENTID,
    "Authorization": "Bearer " + process.env.API_IGDB_TOKEN,
  },
  timeout: 10000,
});

export default apiIgdb;
