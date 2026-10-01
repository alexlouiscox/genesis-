/** Production host and HSTS shared by next.config, proxy, and Vercel headers. */
export const apexHost = "alexandercox.site";
export const canonicalHost = "www.alexandercox.site";
export const canonicalOrigin = `https://${canonicalHost}`;
export const hstsHeaderValue =
  "max-age=63072000; includeSubDomains; preload";
