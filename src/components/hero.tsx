"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion) return;
    video.muted = true;
    video.defaultMuted = true;
    const tryPlay = () => {
      void video.play().catch(() => {
        /* Autoplay may still wait for canplay; onPlay updates state. */
      });
    };
    tryPlay();
    video.addEventListener("canplay", tryPlay);
    return () => video.removeEventListener("canplay", tryPlay);
  }, [reducedMotion]);

  const showVideo = !reducedMotion && videoReady;

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  }

  const mediaClassName = showVideo
    ? "absolute inset-0 h-full w-full object-cover object-top"
    : "absolute inset-0 h-full w-full object-cover object-top opacity-0";

  return (
    <section className="relative w-full overflow-x-hidden bg-hero" aria-label="Hero">
      <div
        className="relative w-full overflow-hidden"
        style={{ height: "min(71.1vh, 640px)" }}
      >
        <img
          src={site.hero.posterSrc}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        {!reducedMotion ? (
          <video
            ref={videoRef}
            className={mediaClassName}
            poster={site.hero.posterSrc}
            src={site.hero.videoSrc}
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
            onCanPlay={() => setVideoReady(true)}
            onLoadedData={() => setVideoReady(true)}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onError={() => {
              setVideoReady(false);
              setPlaying(false);
            }}
          />
        ) : null}
        <div className="pointer-events-none absolute top-3 left-4 z-10 flex items-center gap-2 text-lg font-semibold tracking-wide text-forest sm:top-4 sm:left-5 sm:gap-2.5 sm:text-xl">
          <p>kinectid</p>
          <img
            src={site.hero.logoMarkSrc}
            alt=""
            className="h-[1.28em] w-auto"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent"
          aria-hidden="true"
        />
        {showVideo ? (
          <div className="absolute bottom-3 left-3 z-10 sm:bottom-4 sm:left-5">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={togglePlayback}
              aria-label={playing ? "Pause hero video" : "Play hero video"}
              className="border-ivory/35 bg-hero/60 text-ivory hover:bg-hero/80 hover:text-ivory"
            >
              {playing ? (
                <Pause className="size-3.5" />
              ) : (
                <Play className="size-3.5" />
              )}
              {playing ? "Pause" : "Play"}
            </Button>
          </div>
        ) : null}
        <p className="absolute right-3 bottom-3 z-10 text-right text-sm font-medium tracking-wide text-ivory sm:right-6 sm:bottom-4 sm:text-base">
          {site.slogan}
        </p>
      </div>
    </section>
  );
}
