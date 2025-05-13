import { NextResponse } from "next/server";

let tokenCache: {
  token: string;
  expiresAt: number;
} | null = null;

export async function GET() {
  const now = Date.now();

  if (tokenCache && tokenCache.expiresAt > now + 6000_000) {
    return NextResponse.json({ access_token: tokenCache.token });
  }

  const res = await fetch("https://id.twitch.tv/oauth2/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: process.env.TWITCH_CLIENT_ID!,
      client_secret: process.env.TWITCH_CLIENT_SECRET!,
      grant_type: "client_credentials",
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    return NextResponse.json({ error: data.message }, { status: 500 });
  }

  tokenCache = {
    token: data.access_token,
    expiresAt: now + data.expires_in * 1000,
  };

  return NextResponse.json({ access_token: data.access_token });
}
