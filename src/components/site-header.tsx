import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="w-full bg-forest text-ivory">
      <div className="flex h-12 items-center justify-start px-4 sm:h-14 sm:px-5">
        <p className="text-left text-lg font-semibold tracking-wide sm:text-xl">
          {site.displayName}
        </p>
      </div>
    </header>
  );
}
