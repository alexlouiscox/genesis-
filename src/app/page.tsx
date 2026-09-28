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
      <h1 className="sr-only">{site.name}</h1>
      <Hero />
      <div className="mx-auto w-full max-w-5xl px-5 pt-12 pb-4 sm:px-8 sm:pt-16 md:px-10">
        <div className="flex flex-col gap-12 md:gap-16">
          <Intro />
          <Experience />
          <Education />
          <Study />
        </div>
        <SiteFooter />
      </div>
    </main>
  );
}
