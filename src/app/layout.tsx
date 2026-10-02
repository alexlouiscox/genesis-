import type { Metadata } from "next";
import { Lora } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Alexander Cox",
    template: "%s · Alexander Cox",
  },
  description: "Investment · Consulting · Finance",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: site.url,
    title: "Alexander Cox",
    description: "Investment · Consulting · Finance",
    siteName: "Alexander Cox",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${lora.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col overflow-x-hidden font-serif">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
