import { InkBox } from "@/components/ink-box";
import { site } from "@/lib/site";

export function Education() {
  return (
    <div className="flex flex-col gap-2">
      {site.education.map((item) => (
        <InkBox
          key={item.title}
          className="rounded-xl px-5 py-3.5 md:px-6 md:py-4"
        >
          <h2 className="text-sm font-semibold md:text-[0.95rem]">
            {item.title}
          </h2>
          <p className="mt-1 text-sm leading-snug text-ivory/90">{item.body}</p>
          <p className="mt-1.5 text-sm">
            <span aria-hidden="true">→ </span>
            <span className="font-semibold">{item.achievement}</span>
            {item.result ? (
              <>
                {" · "}
                {item.result}
              </>
            ) : null}
          </p>
        </InkBox>
      ))}
    </div>
  );
}
