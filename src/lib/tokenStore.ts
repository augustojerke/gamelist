import { fetchIGDBToken } from "./fetchToken";

let token: string | null = null;
let expiresAt: number = 0;

export async function getIGDBToken() {
  const now = Date.now();
  if (!token || now >= expiresAt) {
    const tokenData = await fetchIGDBToken();
    token = tokenData.access_token;
    expiresAt = tokenData.fetched_at + tokenData.expires_in * 1000 - 60_000;
  }
  return token;
}
