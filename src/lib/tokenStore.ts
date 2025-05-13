let tokenCache: {
  token: string;
  expiresAt: number;
} | null = null;

export async function getIGDBToken(): Promise<string> {
  const now = Date.now();

  if (tokenCache && tokenCache.expiresAt > now + 60_000) {
    return tokenCache.token;
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/igdb/getToken`
  );

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Erro ao buscar token da rota interna: ${err}`);
  }

  const tokenData = await res.json();

  tokenCache = {
    token: tokenData.access_token,
    expiresAt: tokenData.fetched_at + tokenData.expires_in * 1000,
  };

  return tokenCache.token;
}
