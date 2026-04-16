/**
 * Signed gate cookie (HMAC-SHA256) — works in Edge middleware and Node server code.
 * Set PORTFOLIO_GATE_SECRET to a long random string (e.g. `openssl rand -hex 32`).
 */

const encoder = new TextEncoder()

function bytesToBase64Url(bytes: Uint8Array): string {
  let bin = ''
  for (let i = 0; i < bytes.byteLength; i++) bin += String.fromCharCode(bytes[i]!)
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function base64UrlToBytes(b64url: string): Uint8Array {
  const padded = b64url.replace(/-/g, '+').replace(/_/g, '/')
  const pad = padded.length % 4 === 0 ? '' : '='.repeat(4 - (padded.length % 4))
  const bin = atob(padded + pad)
  const out = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i)
  return out
}

async function importHmacKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify'],
  )
}

export type GateTokenPayload = { exp: number }

export async function createGateToken(secret: string, ttlMs: number): Promise<string> {
  const exp = Date.now() + ttlMs
  const payload = JSON.stringify({ exp } satisfies GateTokenPayload)
  const key = await importHmacKey(secret)
  const sig = await crypto.subtle.sign('HMAC', key, encoder.encode(payload))
  return `${bytesToBase64Url(encoder.encode(payload))}.${bytesToBase64Url(new Uint8Array(sig))}`
}

export async function verifyGateCookie(token: string, secret: string): Promise<boolean> {
  const parts = token.split('.')
  if (parts.length !== 2) return false
  const [payloadB64, sigB64] = parts as [string, string]
  let payloadBytes: Uint8Array
  let sigBytes: Uint8Array
  try {
    payloadBytes = base64UrlToBytes(payloadB64)
    sigBytes = base64UrlToBytes(sigB64)
  } catch {
    return false
  }
  const payload = new TextDecoder().decode(payloadBytes)
  let parsed: GateTokenPayload
  try {
    parsed = JSON.parse(payload) as GateTokenPayload
  } catch {
    return false
  }
  if (typeof parsed.exp !== 'number' || !Number.isFinite(parsed.exp) || Date.now() > parsed.exp) {
    return false
  }
  const key = await importHmacKey(secret)
  const ok = await crypto.subtle.verify(
    'HMAC',
    key,
    new Uint8Array(sigBytes) as BufferSource,
    new Uint8Array(payloadBytes) as BufferSource,
  )
  return ok
}
