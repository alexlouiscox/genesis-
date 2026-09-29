import { InkBox } from "@/components/ink-box";
import { site } from "@/lib/site";

export function Downloads() {
  return (
    <InkBox className="flex flex-col gap-3 p-6 md:p-7">
      <ul className="space-y-2 text-sm md:text-[0.95rem]">
        {site.downloads.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="text-ivory underline-offset-4 transition-colors hover:text-copper hover:underline"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </InkBox>
  );
}
