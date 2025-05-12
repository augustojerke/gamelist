import { NextResponse } from "next/server";
import axios from "axios";
import { getIGDBToken } from "@/lib/tokenStore";

const API_URL = "https://api.igdb.com/v4/involved_companies";
const AUTH_TOKEN = await getIGDBToken();

export async function POST(req: Request) {
  try {
    const response = await axios.post(API_URL, await req.text(), {
      headers: {
        Accept: "application/json",
        "Content-Type": "text/plain",
        "Client-ID": process.env.API_IGDB_CLIENTID,
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
