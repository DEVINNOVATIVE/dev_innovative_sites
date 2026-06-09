"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import NumberAnimation from "../../animation/NumberAnimation"; 
import RevealAnimation from "../../animation/RevealAnimation";

import numberBg from "@/assets/about/number_bg.png"; 

const metrics = [
  {
    number: 2531,
    rooms: 4,
    suffix: "",
    symbol: true, // Crucial for parsing thousand comma breaks cleanly
    label: "Project Finished",
  },
  {
    number: 15,
    rooms: 2,
    suffix: "+",
    symbol: false,
    label: "Years Experience",
  },
  {
    number: 280,
    rooms: 3,
    suffix: "",
    symbol: false,
    label: "Happy Clients",
  },
  {
    number: 3587,
    rooms: 4,
    suffix: "",
    symbol: true, // Crucial for parsing thousand comma breaks cleanly
    label: "Recognition",
  },
];

export function AboutNumbers() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative w-full py-12 md:py-16 mb-24 text-white overflow-hidden select-none">
      
      {/* Background Graphic Asset */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={numberBg}
          alt="Statistics background wave pattern blueprint asset"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Floating vector accents decorations */}
      <div 
        className="absolute bottom-6 left-[28%] z-10 text-orange-500 font-bold text-xl pointer-events-none transform-gpu"
        style={{ animation: "shapeFloatCircle 5s ease-in-out infinite" }}
      >
        〇
      </div>
      <div 
        className="absolute top-8 left-[53%] z-10 text-cyan-400 font-semibold text-lg opacity-90 pointer-events-none transform-gpu"
        style={{ animation: "shapeFloatTriangle 6s ease-in-out infinite" }}
      >
        ▻
      </div>

      {/* Main Content Numbers Metric Grid Wrapper */}
      <div className="relative z-20 mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-[1240px]">
        
        {/* ======================================================================
            1. DESKTOP VIEWPORT MATRIX PATH (GSAP STAGGER ACTIVE)
            ====================================================================== */}
        <div className="hidden lg:grid grid-cols-4 gap-x-6 text-center items-center">
          {metrics.map((item, index) => (
            <RevealAnimation 
              key={`desktop-${item.label}`}
              direction="up"
              duration={1.0}
              delay={index * 0.1}
              offset={30}
              animationType="from"
            >
              <div className="space-y-2 group transition-all duration-300 transform hover:scale-105">
                
                {/* Numbers container wrapping with extra character spacing properties */}
                <div className="text-4xl sm:text-5xl font-black tracking-tight text-white flex items-center justify-center min-h-[56px] gap-x-[1px]">
                  <NumberAnimation 
                    number={item.number} 
                    rooms={item.rooms} 
                    symbol={item.symbol}
                    speed={1200 + index * 100} 
                  />
                  {item.suffix && (
                    <span className="text-white font-black text-3xl sm:text-4xl self-center leading-none select-none ml-1 animate-pulse">
                      {item.suffix}
                    </span>
                  )}
                </div>

                <p className="text-sm sm:text-base font-semibold text-white/90 tracking-wide transition-colors group-hover:text-blue-200">
                  {item.label}
                </p>

              </div>
            </RevealAnimation>
          ))}
        </div>

        {/* ======================================================================
            2. MOBILE VIEWPORT MATRIX PATH (INSTANT STATIC INJECTION / TRANSITIONS)
            ====================================================================== */}
        <div className="block lg:hidden grid grid-cols-2 gap-y-10 gap-x-4 text-center items-center">
          {metrics.map((item) => (
            <div 
              key={`mobile-${item.label}`} 
              className="space-y-1.5 transition-transform duration-200 active:scale-[0.98]"
            >
              
              <div className="text-3xl sm:text-4xl font-black tracking-tight text-white flex items-center justify-center min-h-[48px] gap-x-[1px]">
                <NumberAnimation 
                  number={item.number} 
                  rooms={item.rooms} 
                  symbol={item.symbol}
                  speed={1000} 
                />
                {item.suffix && (
                  <span className="text-white font-black text-2xl sm:text-3xl self-center leading-none select-none ml-0.5">
                    {item.suffix}
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm font-bold text-white/85 tracking-wide">
                {item.label}
              </p>

            </div>
          ))}
        </div>

      </div>

      <style jsx global>{`
        @keyframes shapeFloatCircle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(15deg); }
        }
        @keyframes shapeFloatTriangle {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(10px) rotate(-8px); }
        }
      `}</style>
    </section>
  );
}