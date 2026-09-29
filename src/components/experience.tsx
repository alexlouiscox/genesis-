import { InkBox } from "@/components/ink-box";
import { site } from "@/lib/site";

function StatStrip({
  stats,
}: {
  stats: readonly { value: string; label: string }[];
}) {
  return (
    <p className="flex flex-wrap gap-x-4 gap-y-1 text-sm tracking-wide">
      {stats.map((stat) => (
        <span key={stat.label} className="whitespace-nowrap">
          <span className="font-semibold text-ivory">{stat.value}</span>{" "}
          {stat.label}
        </span>
      ))}
    </p>
  );
}

function TagLine({ tags }: { tags: readonly string[] }) {
  return (
    <p className="mt-auto text-xs tracking-wide text-ivory/75">{tags.join(" · ")}</p>
  );
}

export function Experience() {
  const { kinectid, olive, cloudcustom } = site.experience;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
      <InkBox className="flex h-full flex-col gap-4 p-6 md:col-span-2 md:p-7">
        <h3 className="text-base leading-snug font-semibold md:text-lg">
          {kinectid.heading}
        </h3>
        <StatStrip stats={kinectid.stats} />
        <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed md:text-[0.95rem]">
          {kinectid.bullets.map((bullet) => (
            <li key={bullet.label}>
              <span className="font-semibold">{bullet.label}</span>{" "}
              {bullet.text}
            </li>
          ))}
        </ul>
        <TagLine tags={kinectid.tags} />
      </InkBox>
      <InkBox className="flex h-full flex-col gap-4 p-6 md:col-span-2 md:p-7">
        <h3 className="text-base leading-snug font-semibold md:text-lg">
          {olive.heading}
        </h3>
        <StatStrip stats={olive.stats} />
        <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed md:text-[0.95rem]">
          {olive.bullets.map((bullet) => (
            <li key={bullet.label}>
              <span className="font-semibold">{bullet.label}</span>{" "}
              {bullet.text}
            </li>
          ))}
        </ul>
        <TagLine tags={olive.tags} />
      </InkBox>
      <InkBox className="flex flex-col gap-4 p-6 md:col-span-2 md:col-start-2 md:p-7">
        <h3 className="text-base leading-snug font-semibold md:text-lg">
          {cloudcustom.heading}
        </h3>
        <p className="text-sm leading-relaxed md:text-[0.95rem]">
          {cloudcustom.summary}
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed md:text-[0.95rem]">
          {cloudcustom.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </InkBox>
    </div>
  );
}
