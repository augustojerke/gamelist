import axios, { AxiosInstance } from "axios";

const apiIgdb: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_IGDB_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'text/plain', 
    "Client-ID": "5bdscsiy0xzjdzdud6f7wbs76siaxi",
    "Authorization": "Bearer " + process.env.API_IGDB_TOKEN,
  },
  timeout: 10000,
});

export default apiIgdb;
