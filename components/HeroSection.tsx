import React from "react";
import BGImage from "@/assets/herobg2.png";

interface HeroSectionProps {
  shloka?: string;
  tagline?: string;
  groomName?: string;
  brideName?: string;
  familyLine?: string;
  scrollPrompt?: string;
}

export default function HeroSection({
  shloka = "॥ श्री गणेशाय नमः ॥",
  tagline = "WE INVITE YOU TO CELEBRATE THE WEDDING OF",
  groomName = "Gourav",
  brideName = "Vanshika",
  familyLine = "Together with their families",
  scrollPrompt = "SCROLL TO CELEBRATE",
}: HeroSectionProps) {
  return (
    <section
      className="relative w-full h-screen bg-contain bg-top bg-no-repeat overflow-hidden flex flex-col justify-between items-center text-center select-none"
      style={{
        backgroundImage: `url(${BGImage.src})`,
      }}
    >
      {/* Subtle Ambient Vignette / Soft Warm Glow in Center */}
      <div className="absolute inset-0  pointer-events-none" />

      {/* Floating Rose Petals Animation for Royal Wedding Feel */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="petal petal-1">🌸</span>
        <span className="petal petal-2">🌸</span>
        <span className="petal petal-3">🌸</span>
        <span className="petal petal-4">🌸</span>
        <span className="petal petal-5">🌸</span>
      </div>

      {/* TOP INVOCATION (Inside the Mughal Arch) */}
      <div className="relative z-10 w-full pt-[17vh] sm:pt-[16vh] flex flex-col items-center">
        <div className="inline-flex items-center justify-center gap-2 px-3 py-1">
          <span className="w-3 h-[1px] bg-[#9a2b37]/40" />
          <p className="font-devanagari text-[#8a1c29] text-sm sm:text-base tracking-widest font-semibold drop-shadow-xs">
            {shloka}
          </p>
          <span className="w-3 h-[1px] bg-[#9a2b37]/40" />
        </div>
      </div>

      {/* MIDDLE CONTENT: Invitation + Couple Names + Family */}
      <div className="relative z-10 w-full px-6 flex flex-col items-center -mt-34 sm:-mt-4">
        {/* Invitation Line */}
        <p className="font-royal text-[10px] sm:text-[11px] tracking-[0.25em] text-[#6a4c38] font-semibold uppercase mb-3 sm:mb-4 max-w-[280px] leading-relaxed">
          {tagline}
        </p>

        {/* Groom Name */}
        <h1 className="font-script text-6xl sm:text-6xl gold-gradient-text gold-shimmer tracking-normal leading-[1.1] py-1">
          {brideName}
        </h1>

        {/* Ampersand & */}
        <div className="my-0.5 flex items-center justify-center">
          <span className="font-serif-body italic text-2xl sm:text-3xl text-[#996e2a] font-normal opacity-90">
            weds
          </span>
        </div>

        {/* Bride Name */}
        <h2 className="font-script text-6xl sm:text-6xl gold-gradient-text gold-shimmer tracking-normal leading-[1.1] py-1">
          {groomName}
        </h2>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-2.5 w-36 sm:w-44 my-3 opacity-80">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#b38634] to-[#c49b4c]" />
          <span className="text-[#a87d3a] text-xs">✦</span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#b38634] to-[#c49b4c]" />
        </div>

        {/* Family Line */}
        <p className="font-serif-body italic text-sm sm:text-base text-[#5c4033] tracking-wide font-medium">
          {familyLine}
        </p>
      </div>

      {/* BOTTOM CTA: Scroll to Celebrate */}
      <div className="relative z-10 w-full pb-[4vh] bottom-[15%] sm:pb-[5vh] flex flex-col items-center justify-center">
        <p className="font-royal text-[9px] sm:text-[10px] tracking-[0.28em] text-[#6b4c37] font-semibold uppercase mb-1">
          {scrollPrompt}
        </p>
        <div className="animate-gentle-bounce flex items-center justify-center">
          <svg
            className="w-4 h-4 text-[#8a6345]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
