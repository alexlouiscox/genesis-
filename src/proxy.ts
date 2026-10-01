import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  apexHost,
  canonicalHost,
  hstsHeaderValue,
} from "@/lib/canonical";

function hostnameOf(request: NextRequest): string {
  return request.headers.get("host")?.split(":")[0]?.toLowerCase() ?? "";
}

function isLocalOrPreviewHost(host: string): boolean {
  return (
    host === "localhost" ||
    host === "127.0.0.1" ||
    host.endsWith(".localhost") ||
    host.endsWith(".vercel.app")
  );
}

/**
 * Send apex (and stray HTTP www) visitors to https://www.alexandercox.site.
 * HSTS with includeSubDomains is attached on HTTPS responses so the apex 308
 * can qualify for preload if this code runs on that host.
 */
export function proxy(request: NextRequest) {
  const host = hostnameOf(request);
  if (!host || isLocalOrPreviewHost(host)) {
    return NextResponse.next();
  }

  const forwardedProto = request.headers.get("x-forwarded-proto");
  const isHttp = forwardedProto === "http";
  const isApex = host === apexHost;
  const isCanonicalHttp = host === canonicalHost && isHttp;

  if (!isApex && !isCanonicalHttp) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.protocol = "https:";
  url.hostname = canonicalHost;
  url.port = "";

  const response = NextResponse.redirect(url, 308);
  if (!isHttp) {
    response.headers.set("Strict-Transport-Security", hstsHeaderValue);
  }
  return response;
}
