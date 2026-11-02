"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import LightsDecor from "@/assets/lightsdecor.png";
import Rose from "@/assets/rose.png";
import Elephant from "@/assets/elephant.png";
import ScracthCard from "./ScracthCard";

function SaveTheDate() {
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
      className="relative min-h-screen bg-[#faf3ed] px-3 py-4 overflow-hidden"
    >
      {/* Outer Border */}
      <div className="relative min-h-[calc(100svh-2rem)] border border-[#b77a27]/20 rounded-full p-2">

        {/* Inner Border */}
        <div className="relative min-h-[calc(100svh-3rem)] border border-[#c69a50]/20 rounded-full overflow-hidden">

          {/* Hanging Lights with Scroll Slide-Down Animation */}
          <div className="absolute top-0 left-0 w-full flex justify-between px-[9%] items-start pointer-events-none z-10">

            <Image
              src={LightsDecor}
              alt="Hanging lamp"
              width={100}
              height={300}
              sizes="(max-width: 640px) 48px, 75px"
              className={`w-10 sm:w-16 h-auto object-contain mt-12 transition-all duration-1000 ease-out transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-full opacity-0"
              }`}
            />

            <Image
              src={LightsDecor}
              alt="Center hanging lamp"
              width={150}
              height={300}
              sizes="(max-width: 640px) 80px, 120px"
              className={`w-20 sm:w-28 h-auto object-contain transition-all duration-1000 delay-150 ease-out transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-full opacity-0"
              }`}
            />

            <Image
              src={LightsDecor}
              alt="Hanging lamp"
              width={100}
              height={300}
              sizes="(max-width: 640px) 48px, 75px"
              className={`w-10 sm:w-16 h-auto object-contain mt-8 transition-all duration-1000 delay-300 ease-out transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-full opacity-0"
              }`}
            />

          </div>

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center text-center pt-52 sm:pt-64 px-5">
            <ScracthCard />
          </div>

          {/* Rose Decoration */}
          <div className="absolute bottom-6 -left-5 w-[48%] max-w-[280px] pointer-events-none">
            <Image
              src={Rose}
              alt="Pink lotus flower decoration"
              width={500}
              height={600}
              sizes="(max-width: 640px) 48vw, 280px"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Elephant Decoration */}
          <div className="absolute bottom-8 right-3 w-[28%] max-w-[150px] pointer-events-none">
            <Image
              src={Elephant}
              alt="Elephant wedding decoration"
              width={300}
              height={300}
              sizes="(max-width: 640px) 28vw, 150px"
              className="w-full h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default SaveTheDate;
