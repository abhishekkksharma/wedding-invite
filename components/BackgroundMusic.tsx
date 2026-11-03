
"use client";

import React, { useEffect, useRef, useState } from "react";
import { Music2, VolumeX } from "lucide-react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  // Hide music button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY <= 50);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Attempt autoplay
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.3;

    audio.play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  }, []);

  // Toggle music
  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.warn("Unable to play music:", error);
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/bgmusic.mp3"
        loop
        preload="auto"
      />

      {/* Music Control - Only Visible At Top */}
      <button
  onClick={toggleMusic}
  aria-label={isPlaying ? "Mute music" : "Play music"}
  className={`
    fixed top-6 right-6 z-[999]
    flex items-center justify-center
    transition-all duration-500
    hover:scale-110
    active:scale-90
    ${
      isAtTop
        ? "opacity-100 translate-y-0 pointer-events-auto"
        : "opacity-0 -translate-y-5 pointer-events-none"
    }
  `}
>
  {isPlaying ? (
    <Music2
      size={23}
      strokeWidth={1.5}
      className="text-white/70 hover:text-white transition-colors"
    />
  ) : (
    <VolumeX
      size={23}
      strokeWidth={1.5}
      className="text-white/70 hover:text-white transition-colors"
    />
  )}
</button>
    </>
  );
}
