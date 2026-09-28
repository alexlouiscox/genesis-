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

  return (
    <header className="relative h-48 w-full overflow-hidden bg-hero md:h-56 lg:h-60">
      <Image
        src={site.hero.posterSrc}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {!reducedMotion ? (
        <video
          ref={videoRef}
          className={
            showVideo
              ? "absolute inset-0 h-full w-full object-cover"
              : "absolute inset-0 h-full w-full object-cover opacity-0"
          }
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
      <div className="absolute inset-0 bg-hero/55" aria-hidden="true" />
      {showVideo ? (
        <div className="absolute bottom-4 left-4 z-10 sm:bottom-5 sm:left-6">
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
      <p className="absolute right-4 bottom-4 z-10 text-right text-sm font-medium tracking-wide text-emerald sm:right-8 sm:bottom-5 sm:text-base">
        {site.slogan}
      </p>
    </header>
  );
}
