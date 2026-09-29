import { site } from "@/lib/site";

function FooterItem({
  href,
  children,
}: {
  href?: string;
  children: React.ReactNode;
}) {
  if (!href) {
    return <span>{children}</span>;
  }

  const external = href.startsWith("http");

  return (
    <a
      href={href}
      className="underline-offset-4 transition-colors hover:text-copper/80 hover:underline"
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}

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
          <FooterItem href={site.emailHref}>Email</FooterItem>
          <Dot />
          <FooterItem href={site.linkedin}>LinkedIn</FooterItem>
          <Dot />
          <FooterItem href={site.downloadsHref}>Downloads</FooterItem>
        </nav>
      </div>
    </footer>
  );
}
