import type { NextConfig } from "next";
import { canonicalOrigin, hstsHeaderValue } from "./src/lib/canonical";

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: hstsHeaderValue,
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "media-src 'self' blob:",
      "font-src 'self'",
      "connect-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const apexHost = { type: "host" as const, value: "alexandercox.site" };
const canonicalHost = { type: "host" as const, value: "www.alexandercox.site" };
const forwardedHttp = {
  type: "header" as const,
  key: "x-forwarded-proto",
  value: "http",
};

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/",
        has: [apexHost],
        destination: `${canonicalOrigin}/`,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [apexHost],
        destination: `${canonicalOrigin}/:path*`,
        permanent: true,
      },
      {
        source: "/",
        has: [canonicalHost, forwardedHttp],
        destination: `${canonicalOrigin}/`,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [canonicalHost, forwardedHttp],
        destination: `${canonicalOrigin}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
