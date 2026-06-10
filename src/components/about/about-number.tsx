"use client";

import Image from "next/image";
import NumberAnimation from "../animation/NumberAnimation"; 
import RevealAnimation from "../animation/RevealAnimation";

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
  return (
    <section className="relative w-full py-12 md:py-12  text-white overflow-hidden select-none">
      
      {/* Background Graphic Asset */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={numberBg}
          alt="Statistics background wave pattern"
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

      {/* Main Content Numbers Metric Grid */}
      <div className="relative z-20 mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-[1240px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 text-center items-center">
          
          {metrics.map((item, index) => (
            <RevealAnimation 
              key={item.label}
              direction="up"
              duration={1.0}
              delay={index * 0.1}
              offset={30}
              animationType="from"
            >
              <div className="space-y-2">
                
                {/* Numbers container wrapping with extra character spacing properties */}
                <div className="text-4xl sm:text-5xl font-black tracking-tight text-white flex items-center justify-center min-h-[56px] gap-x-[1px]">
                  <NumberAnimation 
                    number={item.number} 
                    rooms={item.rooms} 
                    symbol={item.symbol}
                    speed={1200 + index * 100} 
                  />
                  {item.suffix && (
                    <span className="text-white font-black text-3xl sm:text-4xl self-center leading-none select-none ml-1">
                      {item.suffix}
                    </span>
                  )}
                </div>

                <p className="text-sm sm:text-base font-semibold text-white/95 tracking-wide">
                  {item.label}
                </p>

              </div>
            </RevealAnimation>
          ))}

        </div>
      </div>

      <style jsx>{`
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