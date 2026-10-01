import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="w-full bg-forest text-ivory">
      <div className="mx-auto flex h-11 max-w-5xl items-center px-5 sm:h-12 sm:px-8 md:px-10">
        <p className="text-sm font-semibold tracking-wide sm:text-base">
          {site.displayName}
        </p>
      </div>
    </header>
  );
}
