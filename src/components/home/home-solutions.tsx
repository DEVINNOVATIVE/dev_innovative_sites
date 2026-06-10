

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import RevealAnimation from '../animation/RevealAnimation';

import chart from "@/assets/chart.svg";
import dollar from "@/assets/price.svg";
import ourSolutionImage from "@/assets/our_solution.png";

const features = [
  {
    title: "Dedicated Developers",
    description:
      "Hire a remote web developer with the required skillset and proven record to work alongside your existing in-house team or as a stand-alone unit. Save time on hiring and cut additional costs.",
    Icon: chart,
  },
  {
    title: "Affordable Prices",
    description:
      "Our pricing is transparent and competitive, and we always strive to offer flexible pricing models that can be customized to meet the unique needs of each client. We understand that every project and client is different, which is why we work closely with each client to develop a pricing plan that fits their specific requirements and budget.",
    Icon: dollar,
  },
];

export function HomeSolutions() {

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
    <section className="mx-auto w-full px-4 sm:px-8 lg:px-10 py-20 bg-white select-none overflow-hidden" style={{ maxWidth: '1400px' }}>
      
      {/* ======================================================================
          1. DESKTOP LAYER: RICH ANIMATIONS VIA GSAP SCROLLTRIGGER
          ====================================================================== */}
      <div className="hidden lg:grid grid-cols-[minmax(360px,1.2fr)_minmax(420px,1fr)] gap-16 items-center">
        
        {/* Left Column Text Content */}
        <div className="w-full max-w-3xl">
          <ConditionalReveal direction="left" duration={1.0} delay={0.1} offset={40} animationType="from">
            <div className="space-y-6">
              <p className="text-base font-bold tracking-wider text-[#104cba] uppercase block">
                Our Solutions
              </p>
              <h2 className="text-5xl font-bold tracking-tight text-[#08112a] leading-tight">
                Web & Software
              </h2>
              <p className="text-base leading-8 text-[#7f8081] font-normal">
                We are an agile custom web development company with expertise in building transformative web and mobile applications, unique software, and customized tools.
              </p>

              {/* Animated Feature Box Loops */}
              <div className="grid gap-6 pt-4 w-full">
                {features.map(({ title, description, Icon }, index) => (
                  <ConditionalReveal 
                    key={title}
                    direction="up" 
                    duration={0.9} 
                    delay={0.25 + index * 0.15} 
                    offset={30} 
                    animationType="from"
                  >
                    <div className="group flex gap-5 bg-slate-50/60 hover:bg-white rounded-xl p-6 border border-slate-100/80 hover:border-blue-500/20 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_35px_rgba(15,23,42,0.05)] transition-all duration-500 ease-out">
                      <div className="h-16 w-16 shrink-0 relative bg-white rounded-xl p-2 shadow-sm border border-slate-100 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                        <Image src={Icon} alt={title} fill className="object-contain p-2.5" />
                      </div>
                      <div className="space-y-1.5 flex-1">
                        <h3 className="text-[17px] font-bold text-[#08112a] transition-colors duration-300 group-hover:text-[#104cba] tracking-tight">
                          {title}
                        </h3>
                        <p className="text-[14px] leading-6 text-[#7f8081] font-normal">
                          {description}
                        </p>
                      </div>
                    </div>
                  </ConditionalReveal>
                ))}
              </div>
            </div>
          </ConditionalReveal>
        </div>

        {/* Right Column Artwork Canvas */}
        <div className="w-full flex justify-center items-center">
          <ConditionalReveal direction="right" duration={1.0} delay={0.2} offset={40} animationType="from">
            <div className="relative w-[480px] aspect-[9/10] overflow-hidden rounded-2xl bg-gradient-to-tr from-slate-50 via-slate-50/50 to-blue-50/20 p-4">
              <div className="relative w-full h-full">
                <Image
                  src={ourSolutionImage}
                  alt="Web and software custom strategy illustration"
                  fill
                  className="object-contain"
                  style={{
                    transform: 'scale(1.06)',
                    animation: 'waterFluidMotion 6s ease-in-out infinite',
                  }}
                  sizes="480px"
                />
              </div>
            </div>
          </ConditionalReveal>
        </div>

      </div>

      {/* ======================================================================
          2. MOBILE LAYER: INSTANT STATIC PAINT WITH ZERO FLASHING
          ====================================================================== */}
      <div className="block lg:hidden w-full space-y-12">
        
        {/* Top Text Content Block */}
        <div className="w-full max-w-3xl mx-auto space-y-5 text-center sm:text-left">
          <p className="text-sm sm:text-base font-bold tracking-wider text-[#104cba] uppercase block">
            Our Solutions
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#08112a] leading-tight">
            Web & Software
          </h2>
          <p className="text-[14.5px] sm:text-base leading-relaxed text-[#7f8081] font-normal">
            We are an agile custom web development company with expertise in building transformative web and mobile applications, unique software, and customized tools.
          </p>

          {/* Instant Render Feature Cards Container */}
          <div className="grid gap-5 pt-2 w-full text-left">
            {features.map(({ title, description, Icon }) => (
              <div key={title} className="flex flex-col sm:flex-row gap-4 bg-slate-50/60 rounded-xl p-5 border border-slate-100 shadow-sm">
                <div className="h-14 w-14 shrink-0 relative bg-white rounded-xl p-2 border border-slate-100 flex items-center justify-center">
                  <Image src={Icon} alt={title} fill className="object-contain p-2" />
                </div>
                <div className="space-y-1 flex-1">
                  <h3 className="text-[16px] sm:text-[17px] font-bold text-[#08112a] tracking-tight">
                    {title}
                  </h3>
                  <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-[#7f8081] font-normal">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Static Artwork Frame */}
        <div className="w-full flex justify-center items-center">
          <div className="relative w-[85vw] sm:w-[400px] aspect-[9/10] overflow-hidden rounded-2xl bg-gradient-to-tr from-slate-50 to-blue-50/10 p-2">
            <div className="relative w-full h-full">
              <Image
                src={ourSolutionImage}
                alt="Web and software custom strategy illustration mobile context"
                fill
                className="object-contain"
                style={{
                  transform: 'scale(1.04)',
                  animation: 'waterFluidMotion 8s ease-in-out infinite',
                }}
                sizes="(max-width: 640px) 85vw, 400px"
                priority
              />
            </div>
          </div>
        </div>

      </div>

      {/* Fluid Floating Global Transforms */}
      <style jsx global>{`
        @keyframes waterFluidMotion {
          0%, 100% { transform: scale(1.04) translateY(0px) translateX(0px); }
          33% { transform: scale(1.06) translateY(-5px) translateX(3px); }
          66% { transform: scale(1.04) translateY(3px) translateX(-3px); }
        }
      `}</style>
    </section>
  );
}