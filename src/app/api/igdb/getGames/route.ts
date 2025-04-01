import { NextResponse } from "next/server";
import axios from "axios";

const API_URL = "https://api.igdb.com/v4/games";
const AUTH_TOKEN = process.env.API_IGDB_TOKEN;

export async function POST(req: Request) {
  try {
    const response = await axios.post(API_URL, await req.text(), {
      headers: {
        Accept: "application/json",
        "Content-Type": "text/plain",
        "Client-ID": "5bdscsiy0xzjdzdud6f7wbs76siaxi",
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
    });
    return NextResponse.json(response.data);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: error.response?.status || 500 }
    );
  }
}
