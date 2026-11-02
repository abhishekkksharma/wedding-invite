"use client";

import React, { useEffect, useRef } from "react";

export interface ConfettiProps {
  trigger?: boolean;
  duration?: number; // Duration in milliseconds (default 3500ms)
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rotation: number;
  vRot: number;
  wobble: number;
  wobbleSpeed: number;
  opacity: number;
  shape: "rect" | "circle" | "petal";
}

const WEDDING_COLORS = [
  "#d4af37", // Royal Gold
  "#f3e5ab", // Champagne
  "#b8860b", // Dark Gold
  "#e87a90", // Rose Pink
  "#f4a7b9", // Sakura Pink
  "#a34f65", // Deep Burgundy
  "#fffaf0", // Pearl White
];

export function Confetti({ trigger = false, duration = 3500 }: ConfettiProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!trigger) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions to viewport
    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    // Create celebratory wedding petals and gold confetti
    const particleCount = 75;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 7 + 3;

      particles.push({
        // Burst from upper-middle of viewport
        x: width * 0.5 + (Math.random() - 0.5) * 80,
        y: height * 0.45 + (Math.random() - 0.5) * 60,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 4, // initial upward lift
        size: Math.random() * 7 + 5,
        color: WEDDING_COLORS[Math.floor(Math.random() * WEDDING_COLORS.length)],
        rotation: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 8,
        wobble: Math.random() * 10,
        wobbleSpeed: Math.random() * 0.1 + 0.05,
        opacity: 1,
        shape: i % 3 === 0 ? "petal" : i % 2 === 0 ? "rect" : "circle",
      });
    }

    const startTime = Date.now();

    const render = () => {
      const elapsed = Date.now() - startTime;
      const progress = elapsed / duration;

      if (progress >= 1) {
        ctx.clearRect(0, 0, width, height);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // Physics update
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.18; // gravity
        p.vx *= 0.98; // air resistance
        p.rotation += p.vRot;
        p.wobble += p.wobbleSpeed;

        // Fade out toward end of animation
        if (progress > 0.65) {
          p.opacity = Math.max(0, 1 - (progress - 0.65) / 0.35);
        }

        ctx.save();
        ctx.translate(p.x + Math.sin(p.wobble) * 4, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;

        if (p.shape === "petal") {
          // Delicate flower petal shape
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 0.6, p.size * 1.2, 0, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.shape === "rect") {
          // Gold foil ribbon / flake
          ctx.fillRect(-p.size / 2, -p.size / 3, p.size, p.size * 0.6);
        } else {
          // Circle sparkle
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameRef.current = requestAnimationFrame(render);
    };

    animationFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (ctx) {
        ctx.clearRect(0, 0, width, height);
      }
    };
  }, [trigger, duration]);

  if (!trigger) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 w-full h-full"
    />
  );
}

export default Confetti;
