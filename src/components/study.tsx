import { InkBox } from "@/components/ink-box";
import { site } from "@/lib/site";

export function Study() {
  const { study, readingList } = site;

  return (
    <div className="flex flex-col gap-4">
      <InkBox className="flex flex-col gap-4 p-6 md:p-7">
        <p className="text-sm leading-relaxed md:text-[0.95rem]">
          {study.paragraph}
        </p>
        <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed md:text-[0.95rem]">
          {study.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </InkBox>
      <InkBox className="px-6 py-5 md:px-7">
        <p className="text-sm font-medium text-emerald">{readingList.label}</p>
        <ul className="mt-3 space-y-1 text-sm italic leading-relaxed md:text-[0.95rem]">
          {readingList.titles.map((title) => (
            <li key={title}>{title}</li>
          ))}
        </ul>
      </InkBox>
    </div>
  );
}
