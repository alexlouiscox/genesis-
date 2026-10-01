"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

const FIRST = site.intro[0];
const PIN = "My degree in Accounting";
const CIRCLE_PX = 72;

export function AboutIntro() {
  const pinRef = useRef<HTMLSpanElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useLayoutEffect(() => {
    function place() {
      const word = pinRef.current;
      const row = rowRef.current;
      if (!word || !row) return;
      const wordBox = word.getBoundingClientRect();
      const rowBox = row.getBoundingClientRect();
      const wordMid = wordBox.top + wordBox.height / 2;
      setOffset(wordMid - rowBox.top - CIRCLE_PX / 2);
    }
    place();
    const fonts = document.fonts?.ready;
    void fonts?.then(place);
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, []);

  const markAt = FIRST.indexOf(PIN);
  const before = FIRST.slice(0, markAt + "My degree ".length);
  const after = FIRST.slice(markAt + "My degree in".length);

  return (
    <>
      <div>
        <h2
          id="intro-heading"
          className="text-[1.75rem] leading-tight font-semibold tracking-tight text-copper md:text-3xl"
        >
          {site.headings.intro}
        </h2>
        <span className="mt-2 block h-0.5 w-10 bg-copper" aria-hidden="true" />
      </div>
      <div ref={rowRef} className="flex items-start gap-10 md:gap-14">
        <div className="min-w-0 flex-1 space-y-6 text-[1.05rem] leading-relaxed text-forest md:text-lg md:leading-8">
          <p>
            {before}
            <span ref={pinRef}>in</span>
            {after}
          </p>
          {site.intro.slice(1).map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
        <div
          className="relative size-[72px] shrink-0 overflow-hidden rounded-full border-2 border-forest"
          style={{ marginTop: Math.max(0, offset) }}
          data-about-portrait=""
        >
          <img
            src="/alex-cox.jpg"
            alt="Alexander Cox"
            className="absolute left-1/2 h-[170%] w-[170%] max-w-none object-cover"
            style={{
              objectPosition: "50% 32%",
              top: "50%",
              transform: "translate(-50%, -48%)",
            }}
          />
        </div>
      </div>
    </>
  );
}
