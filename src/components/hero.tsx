"use client";

import { Pause, Play } from "lucide-react";
import Image from "next/image";
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
    ? "absolute top-0 left-1/2 h-[128%] w-[128%] max-w-none -translate-x-1/2 object-cover object-top"
    : "absolute top-0 left-1/2 h-[128%] w-[128%] max-w-none -translate-x-1/2 object-cover object-top opacity-0";

  return (
    <section className="relative w-full overflow-x-hidden bg-hero" aria-label="Hero">
      <div className="relative mx-auto w-3/4 overflow-hidden">
        <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={site.hero.posterSrc}
          alt=""
          fill
          priority
          sizes="75vw"
          className="object-cover object-top"
          style={{
            height: "128%",
            width: "128%",
            maxWidth: "none",
            left: "50%",
            transform: "translateX(-50%)",
            top: 0,
          }}
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
      </div>
    </section>
  );
}
