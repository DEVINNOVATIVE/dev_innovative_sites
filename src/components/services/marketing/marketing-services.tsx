"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import RevealAnimation from "../../animation/RevealAnimation";

// Precise asset layers mapped from image_45dcdd.png folder configurations
import imgPresence from "@/assets/services/digital_marketing/01.png";
import imgExperts from "@/assets/services/digital_marketing/02.png";
import imgSolutions from "@/assets/services/digital_marketing/03.png";

const marketingCards = [
  {
    badgeNumber: "01",
    title: "Enhancing Online Presence",
    description: "We offer a range of digital marketing services, including search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, email marketing, and content marketing.",
    image: imgPresence,
  },
  {
    badgeNumber: "02",
    title: "Expert Digital Marketing Services",
    description: "Our team of digital marketing experts has years of experience and a deep understanding of the latest trends and best practices in digital marketing.",
    image: imgExperts,
  },
  {
    badgeNumber: "03",
    title: "Customized Digital Solutions",
    description: "Our digital marketing services are tailored to your unique business needs and goals, and we work closely with you to develop a strategy that delivers results.",
    image: imgSolutions,
  },
];

export function DigitalMarketingServices() {
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
    <section className="mx-auto w-full max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8 lg:py-24 bg-white text-slate-900 select-none">
      
      {/* ======================================================================
          HEADER BLOCK: TYPOGRAPHY LAYOUT AND INTRO TEXT
          ====================================================================== */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-20">
        {/* Desktop Animating Header Block */}
        <div className="hidden lg:block space-y-3">
          <ConditionalReveal direction="up" duration={0.8} delay={0.1} offset={20} animationType="from">
            <span className="text-sm sm:text-lg font-bold tracking-wider text-[#104cba]  block">
              Discover Our Range Of Services To Boost Your Business
            </span>
          </ConditionalReveal>
          <ConditionalReveal direction="up" duration={0.9} delay={0.16} offset={25} animationType="from">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#08112a]">
              Digital Marketing Services
            </h2>
          </ConditionalReveal>
          <ConditionalReveal direction="up" duration={1.0} delay={0.22} offset={20} animationType="from">
            <p className="text-sm sm:text-base leading-relaxed text-slate-400 font-normal max-w-2xl mx-auto">
              Our digital marketing services are designed to help businesses of all sizes increase their online visibility, attract more traffic to their website, and ultimately drive more conversions and revenue.
            </p>
          </ConditionalReveal>
        </div>

        {/* Mobile Static Fast Paint Header Block */}
        <div className="block lg:hidden space-y-2.5 px-2">
          <span className="text-base font-bold tracking-wider text-[#104cba]  block">
            Discover Our Range Of Services To Boost Your Business
          </span>
          <h2 className="text-xl font-bold tracking-tight text-[#08112a]">
            Digital Marketing Services
          </h2>
          <p className="text-base leading-relaxed text-slate-400 font-normal">
            Our digital marketing services are designed to help businesses of all sizes increase their online visibility, attract more traffic to their website, and ultimately drive more conversions and revenue.
          </p>
        </div>
      </div>

      {/* ======================================================================
          CARDS CONTAINER: 3-COLUMN SERVICE GRID
          ====================================================================== */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1240px] mx-auto items-stretch">
        {marketingCards.map((card, index) => (
          <React.Fragment key={card.badgeNumber}>
            
            {/* Desktop View Card System Layer (GSAP Trigger Enabled) */}
            <div className="hidden lg:block h-full relative">
              <ConditionalReveal 
                direction="up" 
                duration={0.9} 
                delay={0.15 + index * 0.12} 
                offset={35} 
                animationType="from"
              >
                <div className="group h-full bg-white rounded-3xl border border-slate-100/90 p-8 pb-14 text-center flex flex-col items-center justify-start transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_25px_60px_rgba(15,23,42,0.06)] hover:-translate-y-2 relative">
                  
                  {/* Centralized Illustrated Vector Workspace Box */}
                  <div className="relative w-full aspect-[1.4/1] mb-6 p-2 rounded-2xl bg-slate-50/40 group-hover:bg-white transition-colors duration-500">
                    <Image 
                      src={card.image} 
                      alt={`${card.title} feature workspace mockup platform map`} 
                      fill 
                      className="object-contain p-2 group-hover:scale-[1.03] transition-transform duration-500"
                      sizes="(max-width: 1200px) 33vw, 360px"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-[#08112a] mb-3 tracking-tight transition-colors duration-300 group-hover:text-[#104cba]">
                    {card.title}
                  </h3>

                  <p className="text-base leading-relaxed text-slate-400 font-normal transition-colors duration-300 group-hover:text-slate-500">
                    {card.description}
                  </p>

                  {/* Absolute Bottom Centered Target Orange Badge */}
                  <div className="absolute bottom-[-18px] left-1/2 -translate-x-1/2 h-9 w-9 rounded-full bg-gradient-to-br from-[#ff4722] to-[#ff6b35] text-white flex items-center justify-center font-bold text-xs shadow-md shadow-orange-500/20 group-hover:scale-110 transition-transform duration-300 select-none">
                    {card.badgeNumber}
                  </div>

                </div>
              </ConditionalReveal>
            </div>

            {/* Mobile View Card System Layer (Instant Hardware Paint Taps) */}
            <div className="block lg:hidden h-full pb-4">
              <div className="bg-white rounded-2xl border border-slate-100 p-6 pb-12 text-center flex flex-col items-center justify-start transition-all duration-200 ease-out active:scale-[0.98] shadow-sm relative">
                
                <div className="relative w-full aspect-[1.5/1] bg-slate-50/50 border border-slate-100 rounded-xl mb-4">
                  <Image 
                    src={card.image} 
                    alt={card.title} 
                    fill 
                    className="object-contain p-3"
                    sizes="(max-width: 768px) 85vw, 40vw"
                  />
                </div>

                <h3 className="text-base font-bold text-[#08112a] mb-2 tracking-tight">
                  {card.title}
                </h3>

                <p className="text-base leading-relaxed text-slate-400 font-normal">
                  {card.description}
                </p>

                <div className="absolute bottom-[-16px] left-1/2 -translate-x-1/2 h-8 w-8 rounded-full bg-gradient-to-r from-[#ff4722] to-[#ff6b35] text-white flex items-center justify-center font-bold text-[11px] shadow-sm">
                  {card.badgeNumber}
                </div>

              </div>
            </div>

          </React.Fragment>
        ))}
      </div>

    </section>
  );
}