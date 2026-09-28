import { InkBox } from "@/components/ink-box";
import { site } from "@/lib/site";

function StatStrip({
  stats,
}: {
  stats: readonly { value: string; label: string }[];
}) {
  return (
    <p className="text-sm tracking-wide">
      {stats.map((stat, index) => (
        <span key={stat.label}>
          {index > 0 ? " · " : null}
          <span className="font-semibold text-emerald">{stat.value}</span>{" "}
          {stat.label}
        </span>
      ))}
    </p>
  );
}

function TagLine({ tags }: { tags: readonly string[] }) {
  return (
    <p className="text-xs tracking-wide text-ivory/75">{tags.join(" · ")}</p>
  );
}

export function Experience() {
  const { kinectid, olive, cloudcustom } = site.experience;

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <InkBox className="flex flex-col gap-4 p-6 md:p-7">
          <h2 className="text-base leading-snug font-semibold md:text-lg">
            {kinectid.heading}
          </h2>
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
        <InkBox className="flex flex-col gap-4 p-6 md:p-7">
          <h2 className="text-base leading-snug font-semibold md:text-lg">
            {olive.heading}
          </h2>
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
      </div>
      <div className="flex justify-center">
        <InkBox className="flex w-full flex-col gap-4 p-6 md:w-[calc((100%-1rem)/2)] md:p-7">
          <h2 className="text-base leading-snug font-semibold md:text-lg">
            {cloudcustom.heading}
          </h2>
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
    </div>
  );
}
