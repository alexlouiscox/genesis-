type BlockHeadingProps = {
  id: string;
  children: React.ReactNode;
};

export function BlockHeading({ id, children }: BlockHeadingProps) {
  return (
    <h2
      id={id}
      className="text-[1.75rem] leading-tight font-semibold tracking-tight text-ink md:text-3xl"
    >
      {children}
      <span className="mt-2 block h-0.5 w-10 bg-emerald" aria-hidden="true" />
    </h2>
  );
}
