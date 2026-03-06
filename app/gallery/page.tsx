"use client";
import { useState } from "react";
import Image from "next/image";

const images = [
  { id: 1, src: "/gallery1.jpg", title: "Morning Homa", tag: "Sacred Fire" },
  { id: 2, src: "/gallery1.jpg", title: "Veda Pathasala", tag: "Tradition" },
  { id: 3, src: "/gallery1.jpg", title: "Gau Samrakshana", tag: "Compassion" },
  { id: 4, src: "/gallery1.jpg", title: "Sandhya Vandanam", tag: "Ritual" },
];

export default function TempleBackgroundGallery() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <main className="relative min-h-screen pt-12 pb-24 px-6 overflow-hidden bg-[#1a1612]">
      {/* --- TEMPLE BACKGROUND LAYERS --- */}

      {/* 1. Stone Texture Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>

      {/* 2. Sacred Mandala Watermark (Large, Rotating slowly) */}
      <div className="absolute -top-20 -right-20 w-[60px] h-[60px] opacity-[0.03] pointer-events-none animate-[spin_120s_linear_infinite]">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          stroke="#d4af37"
          strokeWidth="0.5"
        >
          <circle cx="50" cy="50" r="45" strokeDasharray="2 2" />
          <path d="M50 5 L55 45 L95 50 L55 55 L50 95 L45 55 L5 50 L45 45 Z" />
          <circle cx="50" cy="50" r="20" />
        </svg>
      </div>

      {/* 3. The "Deepa" Glows (Flickering Amber Lights) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-900/40 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-10 bg-amber-900/30 rounded-full blur-[100px] animate-pulse delay-700"></div>

      {/* --- CONTENT --- */}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header with Gold Underline */}
        <div className="text-center mb-1">
          <h2 className="text-[10px] uppercase tracking-[0.6em] font-bold text-accent/80 mb-2">
            Darshan Gallery
          </h2>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white tracking-tighter">
            Sacred <span className="italic text-accent">Visions</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-6"></div>
        </div>

        {/* Carousel Stage */}
        <div className="relative flex items-center justify-center h-[500px] md:h-[650px]">
          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute left-0 md:-left-12 z-50 w-14 h-14 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white flex items-center justify-center hover:bg-accent transition-all"
          >
            <span className="text-2xl">←</span>
          </button>

          <button
            onClick={next}
            className="absolute right-0 md:-right-12 z-50 w-14 h-14 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white flex items-center justify-center hover:bg-accent transition-all"
          >
            <span className="text-2xl">→</span>
          </button>

          {/* Image Display */}
          <div className="relative w-full  flex items-center justify-center">
            {images.map((img, i) => {
              const isActive = i === index;
              const isPrev = i === (index - 1 + images.length) % images.length;
              const isNext = i === (index + 1) % images.length;

              let style = "opacity-0 scale-50 pointer-events-none";
              if (isActive)
                style =
                  "opacity-100 scale-100 z-30 shadow-[0_0_100px_rgba(212,175,55,0.15)]";
              if (isPrev)
                style = "opacity-20 scale-75 -translate-x-[60%] blur-sm";
              if (isNext)
                style = "opacity-20 scale-75 translate-x-[60%] blur-sm";

              return (
                <div
                  key={img.id}
                  className={`absolute w-full max-w-[320px] md:max-w-[850px] h-[450px] md:h-[550px] transition-all duration-1000 ease-[cubic-bezier(0.2,1,0.2,1)] ${style}`}
                >
                  {/* Internal Frame with Gold "Patti" Border */}
                  <div className="relative w-full h-[450px] rounded-[2.5rem] bg-[#2a241e] border-[1px] border-accent/30 p-4 md:p-6 shadow-2xl">
                    <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden bg-black">
                      <Image
                        src={img.src}
                        alt={img.title}
                        fill
                        className="object-contain"
                        priority={isActive}
                      />
                    </div>
                  </div>

                  {/* Caption with Gold Accent */}
                  <div
                    className={`mt-8 text-center transition-all duration-700 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  >
                    <span className="text-[10px] font-bold text-accent uppercase tracking-[0.5em]">
                      {img.tag}
                    </span>
                    <h3 className="text-3xl font-serif font-bold text-white mt-1">
                      {img.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
