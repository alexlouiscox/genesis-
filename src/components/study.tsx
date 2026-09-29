import { InkBox } from "@/components/ink-box";
import { site } from "@/lib/site";

export function Study() {
  return (
    <InkBox className="flex flex-col gap-4 p-6 md:p-7">
      <p className="text-sm font-normal leading-relaxed md:text-[0.95rem]">
        {site.study.paragraph}
      </p>
      <ul className="list-disc space-y-3 pl-5 text-sm font-normal leading-relaxed md:text-[0.95rem]">
        {site.study.bullets.map((bullet) => (
          <li key={bullet} className="font-normal">
            {bullet}
          </li>
        ))}
      </ul>
    </InkBox>
  );
}
