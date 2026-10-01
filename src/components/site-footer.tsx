import { EmailMenu } from "@/components/email-menu";
import { site } from "@/lib/site";

const linkClassName =
  "underline-offset-4 transition-colors hover:text-ivory/80 hover:underline";

export function SiteFooter() {
  return (
    <footer id="contact" className="mt-16 w-full bg-forest text-ivory md:mt-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-5 py-8 sm:px-8 md:px-10 md:py-10">
        <h2 className="text-lg font-semibold tracking-tight">Contact</h2>
        <div className="flex flex-col gap-2 text-sm leading-relaxed">
          <p>{site.displayName}</p>
          <p className="flex flex-wrap items-baseline gap-x-1.5">
            <span>Email:</span>
            <EmailMenu tone="onNavy" />
          </p>
          <p>
            Phone:{" "}
            <a href={site.phoneHref} className={linkClassName}>
              {site.phone}
            </a>
          </p>
        </div>
        <nav
          aria-label="Contact links"
          className="flex flex-wrap items-center gap-x-3 pt-2 text-sm"
        >
          <a
            href={site.linkedin}
            className={linkClassName}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href={site.downloadsHref} className={linkClassName}>
            Downloads
          </a>
        </nav>
      </div>
    </footer>
  );
}
