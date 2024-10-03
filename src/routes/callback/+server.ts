// src/routes/callback/+server.ts
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, REDIRECT_URI } from '$env/static/private';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
  const code = url.searchParams.get('code');

  if (!code) {
    return new Response('Authorization code not found', { status: 400 });
  }

  const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    body: new URLSearchParams({
      code,
      client_id: GOOGLE_CLIENT_ID,
      client_secret: GOOGLE_CLIENT_SECRET,
      redirect_uri: REDIRECT_URI,
      grant_type: 'authorization_code',
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  if (!tokenResponse.ok) {
    const errorText = await tokenResponse.text();
    return new Response(`Token request failed: ${errorText}`, { status: 500 });
  }

  const tokenData = await tokenResponse.json();

  const body = `
    <h1>Google OAuth Token</h1>
    <pre>${JSON.stringify(tokenData, null, 2)}</pre>
  `;

  return new Response(body, {
    headers: { 'Content-Type': 'text/html' },
  });
};
