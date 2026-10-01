import { AboutIntro } from "@/components/about-intro";
import { BlockHeading } from "@/components/block-heading";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { SiteFooter } from "@/components/site-footer";
import { Study } from "@/components/study";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-ivory">
      <Hero />
      <div className="mx-auto w-full max-w-5xl px-5 pt-8 pb-4 sm:px-8 sm:pt-10 md:px-10">
        <div className="flex flex-col gap-12 md:gap-16">
          <section
            className="flex flex-col gap-5"
            aria-labelledby="intro-heading"
          >
            <AboutIntro />
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
