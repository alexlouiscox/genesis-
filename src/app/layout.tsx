import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex Cox",
  description: "Investment · Consulting · Finance",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${lora.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col overflow-x-hidden font-serif">
        {children}
      </body>
    </html>
  );
}
