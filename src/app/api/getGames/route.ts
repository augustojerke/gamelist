import { NextResponse } from "next/server";
import apiIgdb from "../api-igdb";

export async function POST(req: Request) {
  try {
    const { limit, offset } = await req.json();
    let bodyParams = `fields name, aggregated_rating; where version_parent = null & category = (0,1) & first_release_date != null; limit ${limit}; offset ${offset};`
    const response = await apiIgdb.post("/games", bodyParams)
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
