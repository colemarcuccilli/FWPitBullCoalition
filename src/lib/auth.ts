import { cookies } from "next/headers";

const COOKIE_NAME = "fwpbc_admin";
const MAX_AGE = 60 * 60 * 24 * 7; // 7 days

function getSecret(): string {
  return process.env.ADMIN_SECRET || "fwpbc-default-secret";
}

function getPassword(): string {
  return process.env.ADMIN_PASSWORD || "fwpbc2024";
}

/** Simple hash function that works identically in Node and Edge */
function simpleHash(str: string): string {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) - h + str.charCodeAt(i)) | 0;
  }
  return Math.abs(h).toString(36);
}

/** Create a signed token */
export function createToken(timestamp: number): string {
  const sig = simpleHash(`admin:${timestamp}:${getSecret()}`);
  // Use URL-safe characters only — no base64 needed
  return `admin.${timestamp}.${sig}`;
}

/** Verify a signed token */
export function verifyToken(token: string): boolean {
  const parts = token.split(".");
  if (parts.length !== 3) return false;
  const [role, ts, sig] = parts;
  if (role !== "admin") return false;
  const timestamp = parseInt(ts, 10);
  if (isNaN(timestamp)) return false;
  const now = Math.floor(Date.now() / 1000);
  if (now - timestamp >= MAX_AGE) return false;
  const expectedSig = simpleHash(`admin:${timestamp}:${getSecret()}`);
  return sig === expectedSig;
}

/** Check if the provided password is correct */
export function checkPassword(password: string): boolean {
  return password === getPassword();
}

/** Set the admin auth cookie */
export async function setAuthCookie(): Promise<void> {
  const timestamp = Math.floor(Date.now() / 1000);
  const token = createToken(timestamp);
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE,
  });
}

/** Clear the admin auth cookie */
export async function clearAuthCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

/** Check if the current request is authenticated */
export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return false;
  return verifyToken(token);
}
