"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import RevealAnimation from "../../animation/RevealAnimation";

// Core isometric asset layers mapped directly from your ecommerce repository listings
import imgCloudServices from "@/assets/services/ecommerce/home-ten-sec-img01-1.png";
import imgCustomizable from "@/assets/services/ecommerce/home-ten-img02-1.png";
import imgProductMgmt from "@/assets/services/ecommerce/home-ten-img03-1.png";

const strategyItems = [
  {
    title: "Cloud Services",
    description: "cloud migration, and cloud-based software development.",
    image: imgCloudServices,
    isLightCard: false,
  },
  {
    title: "Highly Customizable",
    description: "developing solutions that are customized to your needs.",
    image: imgCustomizable,
    isLightCard: true, // Replicates the highlighted center card accent from image_440309.png
  },
  {
    title: "Product Management",
    description: "improve customer satisfaction, and ultimately increase revenue.",
    image: imgProductMgmt,
    isLightCard: false,
  },
];

export function EcommerceWideStrategy() {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Check screen size on mount
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // 1024px matches Tailwind's 'lg' breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Helper component to conditionally wrap children with RevealAnimation
  const ConditionalReveal = ({ 
    children, 
    ...props 
  }: React.ComponentProps<typeof RevealAnimation> & { children: React.ReactNode }) => {
    if (!isLargeScreen) {
      return <>{children}</>;
    }
    return <RevealAnimation {...props}>{children}</RevealAnimation>;
  };


  return (
    <section className="relative w-full bg-[#071033] text-white overflow-hidden select-none px-4 sm:px-6 lg:px-8 py-8 lg:py-12 shadow-2xl">
      
      <div className="max-w-[1240px] mx-auto space-y-12 lg:space-y-16 relative z-10 w-full">
        
        {/* ======================================================================
            HEADER SECTION: STRATEGY TITLES & SUBTEXT
            ====================================================================== */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          {/* Desktop Animating Path */}
          <div className="hidden lg:block space-y-2">
            <ConditionalReveal direction="up" duration={0.8} delay={0.1} offset={20} animationType="from">
              <span className="text-xs sm:text-lg font-bold tracking-widest text-[#4e9cf7] uppercase block">
                What We Do
              </span>
            </ConditionalReveal>
            <ConditionalReveal direction="up" duration={0.9} delay={0.16} offset={25} animationType="from">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                We Offer A Wide Range Of Strategy
              </h2>
            </ConditionalReveal>
          </div>

          {/* Mobile Static Path */}
          <div className="block lg:hidden space-y-1.5 px-2">
            <span className="text-base font-bold text-[#4e9cf7] tracking-wider uppercase block">What We Do</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">We Offer A Wide Range Of Strategy</h2>
          </div>
        </div>

        {/* ======================================================================
            GRID AREA: 3-COLUMN INTEGRATED CARD DECK MATRIX
            ====================================================================== */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch max-w-md mx-auto md:max-w-4xl lg:max-w-none w-full">
          {strategyItems.map((item, index) => (
            <React.Fragment key={item.title}>
              
              {/* Desktop Dynamic Grid Block (Staggered Animation Entry) */}
              <div className="hidden lg:block h-full">
                <ConditionalReveal 
                  direction="up" 
                  duration={0.9} 
                  delay={0.15 + index * 0.12} 
                  offset={35} 
                  animationType="from"
                >
                  <div className={`group h-full rounded-3xl p-8 text-center flex flex-col items-center justify-start transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 relative ${
                    item.isLightCard 
                      ? "bg-white text-slate-900 shadow-[0_25px_60px_rgba(4,11,42,0.45)] scale-[1.03] border border-slate-100" 
                      : "bg-[#1d264f]/40 text-white border border-white/5 backdrop-blur-sm hover:bg-[#1d264f]/60"
                  }`}>
                    
                    {/* Floating Illustration Artwork Frame */}
                    <div className="relative w-full aspect-[1.35/1] mb-6 transform group-hover:scale-105 transition-transform duration-500" style={{ animation: `asymmetricFloat ${5 + index}s ease-in-out infinite` }}>
                      <Image 
                        src={item.image} 
                        alt={`${item.title} operational capability display configuration mockup`} 
                        fill 
                        className="object-contain p-2"
                        sizes="320px"
                      />
                    </div>

                    <div className="space-y-2 w-full mt-auto">
                      <h3 className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
                        item.isLightCard ? "text-[#08112a] group-hover:text-[#104cba]" : "text-white group-hover:text-cyan-200"
                      }`}>
                        {item.title}
                      </h3>
                      <p className={`text-base leading-relaxed font-normal transition-colors duration-300 ${
                        item.isLightCard ? "text-slate-400 group-hover:text-slate-500" : "text-slate-300/80 group-hover:text-white"
                      }`}>
                        {item.description}
                      </p>
                    </div>

                  </div>
                </ConditionalReveal>
              </div>

              {/* Mobile View Flat Grid Block (Instant Hardware Accent Rendering) */}
              <div className="block lg:hidden h-full">
                <div className={`rounded-2xl p-6 text-center flex flex-col items-center justify-start border transition-transform duration-200 active:scale-[0.98] shadow-md ${
                  item.isLightCard 
                    ? "bg-white text-slate-900 border-slate-100" 
                    : "bg-[#1d264f]/50 text-white border-white/5 backdrop-blur-sm"
                }`}>
                  
                  <div className="relative w-full aspect-[1.4/1] mb-4">
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      fill 
                      className="object-contain p-2"
                      sizes="280px"
                    />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-base font-bold tracking-tight">{item.title}</h3>
                    <p className={`text-xs leading-relaxed ${item.isLightCard ? "text-slate-400" : "text-slate-300/80"}`}>{item.description}</p>
                  </div>

                </div>
              </div>

            </React.Fragment>
          ))}
        </div>

      </div>

      {/* Hardware Accelerated Isometric Floating Tweens */}
      <style jsx global>{`
        @keyframes asymmetricFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-6px) scale(1.01); }
        }
      `}</style>
    </section>
  );
}