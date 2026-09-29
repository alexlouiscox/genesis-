import type { Metadata } from "next";
import { BlockHeading } from "@/components/block-heading";
import { InkBox } from "@/components/ink-box";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Downloads · Alex Cox",
  description: "University work from Alex Cox — report, essay and dissertation.",
};

export default function DownloadsPage() {
  return (
    <main className="flex flex-1 flex-col bg-ivory">
      <div className="mx-auto w-full max-w-5xl px-5 pt-12 pb-4 sm:px-8 sm:pt-16 md:px-10">
        <p className="mb-10 text-sm text-copper">
          <a href="/" className="underline-offset-4 hover:underline">
            ← Home
          </a>
        </p>
        <section
          className="flex flex-col gap-6"
          aria-labelledby="downloads-heading"
        >
          <BlockHeading id="downloads-heading">Downloads</BlockHeading>
          <div className="flex flex-col gap-2">
            {site.downloads.map((item) => (
              <a
                key={item.href}
                href={item.href}
                download={item.fileName}
                className="block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper"
              >
                <InkBox className="rounded-xl px-5 py-3.5 transition-opacity hover:opacity-90 md:px-6 md:py-4">
                  <h3 className="text-sm font-semibold md:text-[0.95rem]">
                    {item.label}
                  </h3>
                  <p className="mt-1 text-sm text-ivory/90">Download PDF</p>
                </InkBox>
              </a>
            ))}
          </div>
        </section>
        <SiteFooter />
      </div>
    </main>
  );
}
