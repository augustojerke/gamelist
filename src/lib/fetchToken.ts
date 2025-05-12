export async function fetchIGDBToken() {
  const res = await fetch("https://id.twitch.tv/oauth2/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID!,
      client_secret: process.env.NEXT_PUBLIC_TWITCH_CLIENT_SECRET!,
      grant_type: "client_credentials",
    }),
  });

  const data = await res.json();

  if (!res.ok) throw new Error(`Erro ao obter token: ${data.message}`);

  return {
    access_token: data.access_token,
    expires_in: data.expires_in,
    fetched_at: Date.now(),
  };
}
