
"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import VanshuPhoto from "@/assets/Photos/vanshu.jpeg";
import RedRose from "@/assets/redrose.png";
import Photo2 from "@/assets/Photos/2.jpeg";
import Photo3 from "@/assets/Photos/3.jpeg";
import Photo4 from "@/assets/Photos/4.jpeg";

const photos = [VanshuPhoto, Photo2, Photo3, Photo4];

export default function PhotosMapped() {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center px-5 py-6">
      <div className="minimal-frame">

        <div className="minimal-inner">
          <Image
            key={currentPhoto}
            src={photos[currentPhoto]}
            alt="Our memories"
            fill
            sizes="(max-width: 500px) 75vw, 300px"
            className="minimal-photo"
          />

          {/* <div className="minimal-caption">
            <span className="caption-script">Forever</span>
            <span className="caption-names">V A N S H A</span>
          </div> */}
        </div>

        <div className="minimal-roses">
          {Array.from({ length: 5 }).map((_, i) => (
            <Image
              key={i}
              src={RedRose}
              alt="Rose"
              className="minimal-rose"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
