"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import RevealAnimation from "../../animation/RevealAnimation";

// Precise asset layers mapped from your digital marketing directory templates
import marketingHeroIllustration from "@/assets/services/digital_marketing/Ser05.jpg";

const marketingBenefits = [
  {
    title: "Reach A Larger Audience",
    description: "With digital marketing, you can reach a global audience at a much lower cost than traditional marketing methods.",
    bulletColor: "bg-[#104cba]",
  },
  {
    title: "Increase Brand Awareness",
    description: "Digital marketing helps to build brand awareness and recognition through various channels such as social media, email marketing, and PPC advertising.",
    bulletColor: "bg-[#ff5c3d]",
  },
  {
    title: "Boost Website Traffic",
    description: "A well-executed digital marketing strategy can drive more traffic to your website, leading to increased sales and revenue.",
    bulletColor: "bg-[#ff5c3d]",
  },
];

export function WhyDigitalMarketing() {
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
    <section className="mx-auto w-full max-w-[1400px] px-4 py-8 sm:px-6 lg:px-8 lg:py-14 bg-white text-slate-900 select-none overflow-hidden">
      
      {/* ======================================================================
          1. DESKTOP SYSTEM LAYER (GSAP ACTIVE ABOVE 1024PX BREAKPOINT)
          ====================================================================== */}
      <div className="hidden lg:grid items-center gap-12 grid-cols-12 lg:gap-16 max-w-[1240px] mx-auto relative z-10">
        
        {/* Left Side Column: Copywriting Blocks and Styled Bullets (7/12 Grid) */}
        <div className="col-span-7 space-y-6 text-left max-w-[620px]">
          <div className="space-y-4">
            <RevealAnimation direction="left" duration={0.9} delay={0.1} offset={25} animationType="from">
              <span className="text-xs sm:text-lg font-bold tracking-wider text-[#104cba]  block">
                Why You Need Digital Marketing !
              </span>
            </RevealAnimation>
            
            <RevealAnimation direction="left" duration={1.0} delay={0.18} offset={30} animationType="from">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#08112a] leading-tight">
                Why Digital Marketing Is <br /> Crucial For Your Business
              </h2>
            </RevealAnimation>
            
            <RevealAnimation direction="left" duration={1.1} delay={0.25} offset={20} animationType="from">
              <p className="text-base leading-relaxed text-slate-500 font-normal">
                In today's fast-paced digital world, mobile applications have become an essential tool for businesses of all sizes. Here are some reasons why mobile applications are crucial for your business:
              </p>
            </RevealAnimation>
          </div>

          {/* Staggered Row Service Point Bullets */}
          <div className="space-y-5 pt-4 border-t border-slate-100">
            {marketingBenefits.map((benefit, index) => (
              <RevealAnimation 
                key={benefit.title} 
                direction="up" 
                duration={0.8} 
                delay={0.3 + index * 0.1} 
                offset={15} 
                animationType="from"
              >
                <div className="flex gap-4 items-start group">
                  <div className={`h-2.5 w-2.5 rounded-full shrink-0 mt-1.5 transition-transform duration-300 group-hover:scale-125 ${benefit.bulletColor}`} />
                  <div className="space-y-1">
                    <h4 className="text-base font-semibold text-[#08112a] tracking-tight transition-colors duration-300 group-hover:text-[#104cba]">
                      {benefit.title}
                    </h4>
                    <p className="text-base leading-relaxed text-slate-400 font-normal">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>

        {/* Right Side Column: Isometric App Ecosystem Vector (5/12 Grid) */}
        <div className="col-span-5 flex justify-end w-full relative">
          <RevealAnimation direction="right" duration={1.1} delay={0.2} offset={45} animationType="from">
            <div className="relative w-full max-w-[440px] aspect-[1.1/1]" style={{ animation: "marketingIllustrationFloat 6s ease-in-out infinite" }}>
              <Image 
                src={marketingHeroIllustration} 
                alt="Digital marketing ecosystem interaction channels illustration layout" 
                fill 
                className="object-contain" 
                sizes="440px"
              />
            </div>
          </RevealAnimation>
        </div>

      </div>

      {/* ======================================================================
          2. MOBILE LAYER SYSTEM (INSTANT STATIC RE-ALIGNMENT / ZERO FLASH)
          ====================================================================== */}
      <div className="block lg:hidden w-full space-y-10 text-center sm:text-left">
        
        {/* Mobile Header Flow */}
        <div className="max-w-xl mx-auto space-y-3.5">
          <span className="text-xs font-bold text-[#104cba] tracking-wider  block">
            Why You Need Digital Marketing !
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#08112a] tracking-tight leading-tight">
            Why Digital Marketing Is <br /> Crucial For Your Business
          </h2>
          <p className="text-base leading-relaxed text-slate-500 font-normal">
            In today's fast-paced digital world, mobile applications have become an essential tool for businesses of all sizes.
          </p>
        </div>

        {/* Central Static Artwork Layer preview for responsive touch screens */}
        <div className="flex justify-center w-full">
          <div className="relative w-[85vw] sm:w-[360px] aspect-[1.1/1]">
            <Image 
              src={marketingHeroIllustration} 
              alt="Digital marketing viewport overview" 
              fill 
              className="object-contain" 
              sizes="(max-width: 640px) 85vw, 360px"
              priority
            />
          </div>
        </div>

        {/* Mobile items listing grid cards mapping device boundaries safely */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto pt-2 text-left">
          {marketingBenefits.map((benefit) => (
            <div key={benefit.title} className="bg-slate-50/60 border border-slate-100 p-5 rounded-2xl transition-all duration-200 ease-out active:scale-[0.98] flex gap-3.5 items-start">
              <div className={`h-2.5 w-2.5 rounded-full shrink-0 mt-1.5 ${benefit.bulletColor}`} />
              <div className="space-y-1">
                <h4 className="text-sm sm:text-base font-bold text-[#08112a]">{benefit.title}</h4>
                <p className="text-[12.5px] sm:text-[13px] leading-relaxed text-slate-400 font-normal">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Hardware Accelerated Floating Context Keyframes */}
      <style jsx global>{`
        @keyframes marketingIllustrationFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
      `}</style>
    </section>
  );
}