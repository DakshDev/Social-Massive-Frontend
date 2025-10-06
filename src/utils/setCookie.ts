export default async function setCookie(name: string, value: string) {
  if (typeof name !== "string" || typeof value !== "string") return null;
  return window.cookieStore.set(name, value);
}
