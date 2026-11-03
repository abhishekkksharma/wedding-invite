"use client";

import React, { useEffect, useRef, useState } from "react";
import Frame2 from "@/assets/frame2.png";
import { MapPin } from "lucide-react";

export default function GoldenMoments() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentEl = sectionRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, []);

  const schedule = [
    {
      date: "Sunday, 22nd November, 2026",
      events: [
        { name: "Haldi", time: "11:00 a.m." },
        { name: "Mehendi", time: "7:00 p.m." },
      ],
    },
    {
      date: "Monday, 23rd November, 2026",
      events: [
        { name: "Mandha Poojan", time: "10:00 a.m." },
        { name: "Ladies Sangeet", time: "8:00 p.m." },
      ],
    },
    {
      date: "Tuesday, 24th November, 2026",
      events: [
        { name: "Reception of Barat", time: "7:00 p.m." },
        { name: "Dinner", time: "8:00 p.m." },
      ],
    },
    {
      date: "Wednesday, 25th November, 2026",
      events: [
        { name: "Doli", time: "Taron Ki Chhaon Mein" },
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#faf4ef] py-10 flex flex-col items-center select-none overflow-hidden"
    >
      {/* 1. ITINERARY CARD (Within the Ornate Peacock Frame) */}
      <div
        className={`relative w-full max-w-[400px] aspect-[1024/1536] bg-contain bg-top bg-no-repeat flex flex-col justify-start select-none px-6 pt-10 sm:pt-12 pb-32 sm:pb-36 transition-all duration-1000 ease-out transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
        style={{
          backgroundImage: `url(${Frame2.src})`,
        }}
      >
        {/* Title & Divider */}
        <div className="flex flex-col items-center text-center mb-3">
          <h2 className="font-script text-3xl sm:text-4xl text-[#872341] gold-shimmer font-bold leading-tight">
            Golden Moments
          </h2>
          <div className="flex items-center justify-center gap-2 mt-1 w-full opacity-80">
            <span className="h-[1px] bg-gradient-to-r from-transparent to-[#872341] flex-1 max-w-12" />
            <span className="text-[#872341] text-xs">❦</span>
            <span className="h-[1px] bg-gradient-to-l from-transparent to-[#872341] flex-1 max-w-12" />
          </div>
        </div>

        {/* Schedule List (Carefully spaced to stay completely above the bottom peacocks) */}
        <div className="flex flex-col gap-2.5 sm:gap-3 w-full px-1 pt-4">
          {schedule.map((day, index) => (
            <div key={index} className="w-full flex flex-col">
              {/* Day Date Header */}
              <p className="font-serif-body italic text-[13px] sm:text-[14px] font-bold text-[#872341] text-center tracking-wide mb-0.5">
                {day.date}
              </p>

              {/* Day Events */}
              <div className="flex flex-col gap-1 w-full pt-2">
                {day.events.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between text-[11px] sm:text-xs w-full px-8"
                  >
                    <span className="font-serif-body font-semibold text-[#52382c] whitespace-nowrap">
                      {item.name}
                    </span>

                    <span className="flex-1 mx-2 border-b border-dotted border-[#bfa268]/60 translate-y-[2px]" />

                    <span className="font-royal font-semibold text-[#8a5d24] whitespace-nowrap text-[10px] sm:text-[11px] tracking-wider">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. ROYAL VENUE & DESTINATION CARD */}
      <div
        className={`w-full max-w-[350px] mt-4 border border-[#c5a878]/50 rounded-2xl p-5 bg-gradient-to-b from-[#fffaf5] to-[#fbf5ee] shadow-sm flex flex-col items-center text-center transition-all duration-1000 delay-200 ease-out transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {/* Venue Icon */}
        <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#f6ecd8] text-[#9b6f3b] mb-1.5 border border-[#c5a878]/40 shadow-xs">
          <MapPin className="w-4.5 h-4.5" />
        </div>

        <p className="font-royal text-[10px] sm:text-[11px] tracking-[0.25em] text-[#9b6f3b] uppercase font-semibold">
          Wedding Venue
        </p>

        <h3 className="font-script text-3xl sm:text-4xl text-[#872341] gold-shimmer font-bold mt-1 mb-1">
          De&apos;vansh Resort
        </h3>

        <p className="font-serif-body text-xs sm:text-[13px] text-[#6a4c38] leading-relaxed max-w-[270px]">
          Khuda, Jagadhri Road, Ambala Cantt.
        </p>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-2.5 w-28 my-3 opacity-75">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#c5a878]" />
          <span className="text-[#b18a51] text-xs">✥</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#c5a878]" />
        </div>

        {/* Google Maps Directions Button */}
        <a
          href="https://www.google.com/maps/search/?api=1&query=Devansh+Resort+Khuda+Jagadhri+Road+Ambala+Cantt"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#872341] via-[#9e2d4d] to-[#872341] text-[#fff8f0] text-[11px] font-royal tracking-widest uppercase shadow-md active:scale-95 hover:shadow-lg transition-all cursor-pointer"
        >
          <MapPin className="w-3.5 h-3.5" />
          <span>Get Directions</span>
        </a>
      </div>
    </section>
  );
}
