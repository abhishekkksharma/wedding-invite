"use client";

import React, { useEffect, useRef, useState } from "react";
import { Home, MapPin, ArrowUpRight } from "lucide-react";

export default function HomeAdress() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    const directionsUrl =
        "https://maps.app.goo.gl/3Mqg331d4EmMjy5D6";


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

    return (
        <section
            ref={sectionRef}
            className="w-full px-4 py-4 flex flex-col items-center select-none "
        >
            {/* Compact & Minimal Residence Card */}
            <div
                className={`w-full max-w-[390px] rounded-2xl pb-20  p-4 flex flex-col items-center text-center transition-all duration-700 ease-out transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                    }`}
            >
                {/* Minimal Header */}
                <div className="flex items-center justify-center gap-1.5 mb-0.5">
                    <Home size={13} className="text-[#9b6f3b]" />
                    <p className="font-royal text-[9px] tracking-[0.25em] text-[#9b6f3b] uppercase font-semibold">
                        Residence
                    </p>
                </div>

                <h2 className="font-script text-2xl sm:text-3xl text-[#872341] gold-shimmer font-bold leading-tight">
                    Home Address
                </h2>

                {/* Address */}
                <p className="font-serif-body text-[13px] text-[#4a3429] font-semibold leading-tight mt-1">
                    #267, Sector 32, HUDA Urban Estate
                </p>
                <p className="font-serif-body text-[11px] text-[#7a5b46] font-medium">
                    Ambala Cantt, Haryana
                </p>

                {/* Black & White Compact Map */}
                <div className="w-full mt-3 overflow-hidden rounded-lg border border-stone-200/90 shadow-xs contrast-[1.08] opacity-90 hover:opacity-100 transition-opacity">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!4v1793716516937!6m8!1m7!1sbX0uxgtJNOKCGYgs_iGN3A!2m2!1d30.31599856279763!2d76.85075897091997!3f205.42!4f-10.760000000000005!5f0.7820865974627469"
                        width="100%"
                        height="160"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Home address location"
                        className="w-full block"
                    />
                </div>

                {/* Sleek Minimal Directions Button */}
                <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2.5 inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-lg bg-pink-900 hover:bg-pink-800 text-stone-100 text-[10.5px] font-royal tracking-widest uppercase transition-all active:scale-[0.99] shadow-xs cursor-pointer"
                >
                    <MapPin size={12} className="text-[#d4af37]" />
                    <span>Get Directions</span>
                    <ArrowUpRight size={12} className="opacity-70" />
                </a>

                


                <div className="mt-6  pt-4 text-center">
                    

                    <h3 className="font-serif text-2xl text-stone-900 mb-1">
                        R.S.V.P
                    </h3>

                    <p className="text-sm text-stone-800 mb-3">
                        All Yadav Family
                    </p>

                    <div className="flex flex-col items-center gap-2 text-xs text-zinc-900">
                        {["9416680177", "8950586623", "9817766293"].map((number) => (
                            <a
                                key={number}
                                href={`tel:${number}`}
                                className="hover:text-black transition-colors tracking-wider"
                            >
                                M. &nbsp; {number}
                            </a>
                        ))}
                    </div>

                    <p className="font-serif italic text-sm text-stone-400 mt-4">
                        Your presence would mean the world to us ♡
                    </p>
                </div>

            </div>
        </section>
    );
}
