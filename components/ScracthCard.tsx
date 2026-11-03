"use client";

import React, { useEffect, useRef, useState } from "react";
import Confetti from "./Confetti";

function ScratchCard() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawing = useRef(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [showFlowers, setShowFlowers] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown Timer
  useEffect(() => {
    const weddingDate = new Date(2026, 10, 24).getTime();

    const updateTimer = () => {
      const diff = Math.max(0, weddingDate - Date.now());

      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  // Initialize Scratch Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;

    ctx.scale(dpr, dpr);

    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "#d9bb79");
    gradient.addColorStop(0.5, "#f5e6bd");
    gradient.addColorStop(1, "#c39a52");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = "#765b30";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.font = "italic 16px Georgia";
    ctx.fillText("A little surprise awaits...", width / 2, height / 2 - 12);

    ctx.font = "11px Georgia";
    ctx.fillText("✧ Scratch to reveal ✧", width / 2, height / 2 + 14);
  }, []);

  // Scratch Function
  const scratch = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas || !isDrawing.current || isRevealed) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 18, 0, Math.PI * 2);
    ctx.fill();

    // Check scratched percentage
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    let transparent = 0;
    let total = 0;

    for (let i = 3; i < imageData.data.length; i += 32) {
      total++;
      if (imageData.data[i] < 128) transparent++;
    }

    if ((transparent / total) * 100 >= 45) {
      setIsRevealed(true);
      setShowFlowers(true);
    }
  };

  const startScratch = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDrawing.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    scratch(e);
  };

  const stopScratch = () => {
    isDrawing.current = false;
  };

  return (
    <section className="w-full flex flex-col items-center px-4">
      {/* Scratch Card - Always Stays Visible */}
      <div className="relative w-full max-w-[280px] h-[125px] rounded-lg overflow-hidden shadow-sm">
        {/* Hidden Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center rounded-lg border-2 border-[#b18a51] bg-[#fffaf2]">
          <p className="text-lg font-serif text-[#8b7040] text-center">
            Tuesday, 24th
            <br />
            November 2026
          </p>

          {/* <p className="text-[11px] text-[#a18461] mt-2 italic">
            Taron ki chhaon mein
          </p> */}
        </div>

        {/* Scratch Layer */}
        <canvas
          ref={canvasRef}
          onPointerDown={startScratch}
          onPointerMove={scratch}
          onPointerUp={stopScratch}
          onPointerCancel={stopScratch}
          className={`absolute inset-0 w-full h-full cursor-pointer touch-none transition-opacity duration-700 ${
            isRevealed ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        />
      </div>

      {/* Countdown - Appears BELOW Scratch Card */}
      <div
        className={`w-full max-w-[300px] flex flex-col items-center text-center mt-8 transition-all duration-1000 ${
          isRevealed
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5 pointer-events-none"
        }`}
      >
        <h2 className="font-serif text-xl text-[#956b43]">
          Counting Down To The Big Day
        </h2>

        <p className="text-xs italic text-[#9c8065] mt-2 mb-5">
          The wait is almost over...
        </p>

        {/* Timer */}
        <div className="grid grid-cols-4 gap-2 w-full">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item) => (
            <div
              key={item.label}
              className="border border-[#c9a66b]/60 bg-[#fffaf2] rounded-md py-3"
            >
              <p className="text-xl font-serif text-[#a34f65] tabular-nums">
                {String(item.value).padStart(2, "0")}
              </p>

              <p className="text-[9px] uppercase tracking-wider text-[#927b60] mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-5 text-[#a34f65] text-xl font-script italic">
          Save the Date ♡
        </p>
        <Confetti trigger={showFlowers} />
      </div>
    </section>
  );
}

export default ScratchCard;
