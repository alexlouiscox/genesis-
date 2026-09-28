import { cn } from "@/lib/utils";

type InkBoxProps = {
  children: React.ReactNode;
  className?: string;
};

export function InkBox({ children, className }: InkBoxProps) {
  return (
    <article
      className={cn(
        "rounded-2xl bg-ink text-ivory",
        className,
      )}
    >
      {children}
    </article>
  );
}
