import Image from "next/image";
import { BlockHeading } from "@/components/block-heading";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Intro } from "@/components/intro";
import { SiteFooter } from "@/components/site-footer";
import { Study } from "@/components/study";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-ivory">
      <Hero />
      <div className="mx-auto w-full max-w-5xl px-5 pt-12 pb-4 sm:px-8 sm:pt-16 md:px-10">
        <div className="flex flex-col gap-12 md:gap-16">
          <section
            className="flex flex-col gap-6"
            aria-labelledby="intro-heading"
          >
            <div className="flex items-center gap-12 md:gap-16">
              <div>
                <h2
                  id="intro-heading"
                  className="text-[1.75rem] leading-tight font-semibold tracking-tight text-copper md:text-3xl"
                >
                  {site.headings.intro}
                </h2>
                <span
                  className="mt-2 block h-0.5 w-10 bg-copper"
                  aria-hidden="true"
                />
              </div>
              <div className="relative size-[180px] shrink-0 overflow-hidden rounded-full border-[3px] border-forest">
                <Image
                  src="/alex-cox.jpg"
                  alt="Alexander Cox"
                  fill
                  sizes="180px"
                  className="object-cover object-[50%_28%]"
                  priority
                />
              </div>
            </div>
            <Intro />
          </section>
          <section
            className="flex flex-col gap-6"
            aria-labelledby="experience-heading"
          >
            <BlockHeading id="experience-heading">
              {site.headings.experience}
            </BlockHeading>
            <Experience />
          </section>
          <section
            className="flex flex-col gap-6"
            aria-labelledby="education-heading"
          >
            <BlockHeading id="education-heading">
              {site.headings.education}
            </BlockHeading>
            <Education />
          </section>
          <section
            className="flex flex-col gap-6"
            aria-labelledby="study-heading"
          >
            <BlockHeading id="study-heading">{site.headings.study}</BlockHeading>
            <Study />
          </section>
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}
