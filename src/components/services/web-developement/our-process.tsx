"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import RevealAnimation from "../../animation/RevealAnimation";

// --- IMPORTS MATCHING YOUR WORKSPACE PATH STRUCTURE AS SHOWN IN image_cd3cd1.png ---
import sideRocketIllustration from "@/assets/services/web_developement/side.png";
import blueCircleTick from "@/assets/services/web_developement/tick.png";

const processSteps = [
  {
    title: "Discovery",
    description: "We begin by conducting a thorough discovery phase to understand our clients' business goals, target audience, and specific requirements for the project.",
  },
  {
    title: "Strategy",
    description: "Based on our discovery findings, we develop a customized strategy that outlines the project scope, timeline, and budget.",
  },
  {
    title: "Quality Assurance",
    description: "We conduct thorough testing and quality assurance to ensure that the solution is bug-free, performs optimally, and meets our clients' specific requirements.",
  },
];

export function OurProcess() {
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
    <section className="relative w-full bg-white px-4 sm:px-8 lg:px-12 xl:px-16 pb-16 sm:pb-24 text-slate-900 select-none overflow-hidden">
      <div className="mx-auto max-w-[1240px]">
        
        {/* Main Grid Wrapper: Image layout switches order naturally via desktop responsive rules */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* ================= LEFT COLUMN: TITLE & CHRONOLOGICAL STEPS ================= */}
          <div className="w-full text-left space-y-8 order-last lg:order-first">
            
            {/* Header Text Stack */}
            <div className="space-y-3">
              <ConditionalReveal direction="up" duration={0.8} delay={0.1} offset={20} animationType="from">
                <span className="text-lg font-bold text-[#104cba] tracking-wide uppercase block">
                  Our Process
                </span>
              </ConditionalReveal>
              
              <ConditionalReveal direction="up" duration={0.9} delay={0.15} offset={25} animationType="from">
                <h2 className="text-2xl sm:text-4xl xl:text-[42px] font-bold tracking-tight text-[#08112a] leading-tight">
                  Generating New <br className="hidden sm:inline" /> Business Growth Plans
                </h2>
              </ConditionalReveal>

              <ConditionalReveal direction="up" duration={1.0} delay={0.2} offset={20} animationType="from">
                <p className="text-[14px] sm:text-[15px] xl:text-base leading-relaxed text-slate-400 font-normal pt-2">
                  We follow a comprehensive process to ensure that we deliver high-quality web and IT solutions that meet our clients' needs.
                </p>
              </ConditionalReveal>
            </div>

            {/* List Loop Section Wrapper */}
            <div className="space-y-6 w-full pt-2">
              {processSteps.map((step, idx) => (
                <ConditionalReveal 
                  key={step.title}
                  direction="up" 
                  duration={0.9} 
                  delay={0.2 + idx * 0.08} 
                  offset={20} 
                  animationType="from"
                >
                  <div className="w-full">
                    {/* ADDED: 'group' class triggers parent-hover states natively across internal children targets */}
                    <div className="flex items-start gap-4 w-full group cursor-pointer">
                      
                      {/* Blue Vector Checked Icon Asset Wrapper
                          ADDED: transition, duration, and scale parameters reacting to parent row hovers
                      */}
                      <div className="h-5 w-5 relative shrink-0 mt-1.5 transform transition-transform duration-300 cubic-bezier(0.16,1,0.3,1) group-hover:scale-125 group-hover:rotate-6">
                        <Image 
                          src={blueCircleTick} 
                          alt="Process tracking verification point tick" 
                          fill 
                          className="object-contain"
                        />
                      </div>

                      {/* Step Copy Breakdown */}
                      <div className="space-y-1">
                        {/* ADDED: Color transition shifts header text subtly on hover actions */}
                        <h3 className="text-[16px] sm:text-lg font-bold text-[#08112a] tracking-tight transition-colors duration-300 group-hover:text-[#104cba]">
                          {step.title}
                        </h3>
                        <p className="text-[13.5px] sm:text-base leading-relaxed text-slate-400 font-normal max-w-xl transition-colors duration-300 group-hover:text-slate-500">
                          {step.description}
                        </p>
                      </div>

                    </div>
                  </div>
                </ConditionalReveal>
              ))}
            </div>

          </div>

          {/* ================= RIGHT COLUMN: GRAPHICS ROCKET ILLUSTRATION ================= */}
          <div className="w-full flex justify-center items-center order-first lg:order-last">
            <ConditionalReveal direction="up" duration={1.1} delay={0.1} offset={35} animationType="from">
              <div className="w-full flex justify-center items-center">
                {/* ADDED: 'group' parent container to isolate rocket translation transitions on desktop frames */}
                <div className="group relative cursor-pointer">
                  
                  {/* Responsive Container Width adjustments built smoothly using only Tailwind hooks
                      ADDED: transition-all effects shifting position upward ('-translate-y-2') when user context hovers
                  */}
                  <div className="relative w-[85vw] sm:w-[450px] lg:w-[500px] xl:w-[560px] aspect-[1.14/1] transform transition-transform duration-700 ease-out group-hover:-translate-y-3 group-hover:scale-[1.01]">
                    <Image
                      src={sideRocketIllustration}
                      alt="Business expansion milestone launch rocket vehicle artwork"
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 85vw, (max-width: 1280px) 500px, 560px"
                      priority
                    />
                  </div>
                  
                </div>
              </div>
            </ConditionalReveal>
          </div>

        </div>

      </div>
    </section>
  );
}