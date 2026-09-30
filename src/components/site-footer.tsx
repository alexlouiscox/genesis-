import { site } from "@/lib/site";

const linkClassName =
  "underline-offset-4 transition-colors hover:text-copper/80 hover:underline";

function Dot() {
  return (
    <span aria-hidden="true" className="px-1.5">
      ·
    </span>
  );
}

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="mt-16 border-t border-ink/15 pt-5 pb-10 md:mt-20"
    >
      <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="font-medium text-ink">Contact</p>
        <nav
          aria-label="Contact"
          className="flex flex-wrap items-center gap-x-1 text-copper"
        >
          <a
            href={site.emailHref}
            className={linkClassName}
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
          <Dot />
          <a
            href={site.linkedin}
            className={linkClassName}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <Dot />
          <a href={site.downloadsHref} className={linkClassName}>
            Downloads
          </a>
        </nav>
      </div>
    </footer>
  );
}
