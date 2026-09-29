import { site } from "@/lib/site";

export function Intro() {
  return (
    <div className="max-w-3xl space-y-6 text-[1.05rem] leading-relaxed text-forest md:text-lg md:leading-8">
      {site.intro.map((paragraph) => (
        <p key={paragraph.slice(0, 32)}>{paragraph}</p>
      ))}
    </div>
  );
}
