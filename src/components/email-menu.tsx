"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { site } from "@/lib/site";

type EmailMenuProps = {
  tone?: "default" | "onNavy";
};

export function EmailMenu({ tone = "default" }: EmailMenuProps) {
  const triggerClassName =
    tone === "onNavy"
      ? "cursor-pointer bg-transparent p-0 text-left text-sm text-ivory underline-offset-4 transition-colors hover:text-ivory/80 hover:underline"
      : "cursor-pointer bg-transparent p-0 text-sm text-copper underline-offset-4 transition-colors hover:text-copper/80 hover:underline";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={triggerClassName}>
        Email
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        side="top"
        className="min-w-44 bg-ivory text-forest ring-ink/15"
      >
        {site.emailProviders.map((provider) => (
          <DropdownMenuItem
            key={provider.label}
            className="text-forest focus:bg-forest focus:text-ivory"
            render={
              <a
                href={provider.href}
                {...(provider.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              />
            }
          >
            {provider.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
