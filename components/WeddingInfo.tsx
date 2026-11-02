"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import FloralLine from "@/assets/image.png";
import Bow from "@/assets/bow.png";
import GaneshJi from "@/assets/ganeshji.png";

export default function WeddingInfo() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.15,
      }
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

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#faf4ef] px-4 pt-12 pb-10 flex flex-col items-center select-none overflow-hidden"
    >
      {/* Top Floral Garland Garland Decor (Draping smoothly across top) */}
      <div className="absolute -top-6 left-0 right-0 w-full pointer-events-none z-10 flex justify-center">
        <Image
          className="w-full h-auto max-w-[430px] object-contain opacity-95"
          src={FloralLine}
          alt="floral garland"
          priority
        />
      </div>

      {/* Arched Invitation Card Frame */}
      <div className="relative z-20 w-full max-w-[390px] border border-[#c5a878]/50 rounded-t-full mt-10 sm:mt-12 p-1.5 ">
        <div className="w-full border border-[#c5a878]/35 rounded-t-full px-4 pt-0 pb-8 flex flex-col items-center text-center">
          
          {/* Bow & Ganesh Ji Motif at the Apex of Arch with Slide-Down Animation */}
          <div
            className={`flex flex-col justify-center items-center -mt-7 sm:-mt-8 mb-2 relative z-30 transition-all duration-1000 ease-out transform ${
              isVisible
                ? "translate-y-0 opacity-100 scale-100"
                : "-translate-y-12 opacity-0 scale-90 pointer-events-none"
            }`}
          >
            <Image
              className="w-11 h-11 object-contain drop-shadow-xs"
              src={Bow}
              alt="bow"
              priority
            />
            <Image
              className="w-14 h-14 object-contain -mt-2 drop-shadow-xs"
              src={GaneshJi}
              alt="Ganesh Ji"
              priority
            />
          </div>

          {/* Sanskrit Shloka */}
          <div className="my-2 px-2">
            <p className="font-devanagari text-[#8b7040] text-xs sm:text-[13px] leading-relaxed tracking-wider font-semibold">
              वक्रतुण्ड महाकाय सूर्यकोटि समप्रभा।
              <br />
              निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
            </p>
          </div>

          {/* Invitation Intro */}
          <div className="mt-4 mb-3 max-w-[280px]">
            <p className="font-royal text-[#766b5e] text-[9.5px] sm:text-[10.5px] uppercase tracking-[0.2em] leading-relaxed font-semibold">
              Request the honour of your presence on the auspicious occasion of the Wedding of
            </p>
          </div>

          {/* Couple Names & Details */}
          <div className="w-full flex flex-col items-center py-2">
            {/* Bride */}
            <div className="flex flex-col items-center">
              <h2 className="font-script text-4xl sm:text-5xl text-[#a34f65] gold-shimmer tracking-normal leading-tight py-0.5">
                Vanshika
              </h2>
              <p className="font-serif-body text-[11px] sm:text-xs text-[#82776b] tracking-wide mt-0.5">
                D/o Smt. Sapna Yadav &amp; Sh. Devinder Yadav
              </p>
            </div>

            {/* Weds */}
            <div className="my-2 flex items-center justify-center">
              <span className="font-serif-body italic text-base sm:text-lg text-[#b18a51] font-medium">
                weds
              </span>
            </div>

            {/* Groom */}
            <div className="flex flex-col items-center">
              <h2 className="font-script text-4xl sm:text-5xl text-[#a34f65] gold-shimmer tracking-normal leading-tight py-0.5">
                Gourav
              </h2>
              <p className="font-serif-body text-[11px] sm:text-xs text-[#82776b] tracking-wide mt-0.5">
                S/o Smt. Mamta &amp; Sh. Ashok Chawla
              </p>
            </div>

            {/* Ornamental Divider */}
            <div className="flex items-center justify-center gap-3 w-36 sm:w-44 my-4 opacity-80">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#b38634] to-[#c49b4c]" />
              <span className="text-[#b18a51] text-xs">✥</span>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#b38634] to-[#c49b4c]" />
            </div>

            {/* Wedding Quote */}
            <p className="font-serif-body italic text-xs sm:text-[13px] text-[#766b5e] text-center leading-relaxed px-3 max-w-[280px]">
              &ldquo;With joyful hearts and the blessings of our elders, we invite you to celebrate the union of two families.&rdquo;
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
