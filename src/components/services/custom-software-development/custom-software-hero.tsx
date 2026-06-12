"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Code2, ArrowRight, ShieldCheck, Activity, Users } from "lucide-react";
import RevealAnimation from "../../animation/RevealAnimation";

export function CustomSoftwareHero() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const ConditionalReveal = ({ 
    children, 
    ...props 
  }: React.ComponentProps<typeof RevealAnimation> & { children: React.ReactNode }) => {
    if (!isLargeScreen) return <>{children}</>;
    return <RevealAnimation {...props}>{children}</RevealAnimation>;
  };

  return (
    <section className="relative w-full bg-white text-slate-900 py-14 md:py-18 px-6 sm:px-12 lg:px-16 overflow-hidden select-none border-b border-slate-100 flex items-center justify-center">
      {/* Precision Ambient Light Pools for Visual Spacing */}
      <div className="absolute top-0 left-1/2 w-[800px] h-[600px] bg-blue-500/[0.02] rounded-full blur-3xl pointer-events-none transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-1/2 w-[600px] h-[500px] bg-orange-500/[0.01] rounded-full blur-3xl pointer-events-none transform -translate-x-1/2 translate-y-1/3" />

      <div className="w-full max-w-[1240px] relative z-10 mx-auto text-center space-y-10 md:space-y-12 px-2 sm:px-4">
        
        {/* Centered Identity Tagline Badge */}
        <div className="flex justify-center">
          <ConditionalReveal direction="down" duration={0.8} delay={0.0} offset={15} animationType="from">
            <span className="text-xs font-bold uppercase tracking-widest text-[#104cba] bg-blue-50 border border-blue-100/60 px-5 py-2 rounded-full inline-flex items-center gap-2 shadow-2xs">
              <Code2 size={13} className="animate-pulse" /> Engineering Excellence
            </span>
          </ConditionalReveal>
        </div>

        {/* Deep Typography Scale Layout Block */}
        <div className="space-y-6 max-w-[1040px] mx-auto">
          <ConditionalReveal direction="down" duration={0.9} delay={0.05} offset={25} animationType="from">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#08112a] leading-[1.12]">
              Custom Software Development <br className="hidden sm:block" />
              Turning Visions into <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-[#104cba] bg-clip-text text-transparent">Scalable Realities</span>
            </h1>
          </ConditionalReveal>

          <div className="flex justify-center pt-1">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-400 border-x border-slate-200 px-6 sm:px-8">
              Tailored Ecosystems Engineered for Long-Term DNA Maintainability
            </p>
          </div>
        </div>

        {/* Spacious Reading Grid Context Paragraphs */}
        <ConditionalReveal direction="up" duration={0.9} delay={0.1} offset={15} animationType="from">
          <div className="space-y-6 text-base sm:text-lg md:text-[19px] leading-[1.75] text-slate-500 font-medium max-w-[880px] mx-auto tracking-wide">
            <p>
              At DevInnovative, we don’t just write static code—we construct intelligent, scalable, and future-proof software architectures tailored exclusively to your unique business DNA. 
            </p>
            <p className="text-[15px] sm:text-base leading-relaxed text-slate-400 max-w-[760px] mx-auto">
              Whether you are a disruptive startup looking to rapidly launch an asset MVP or an established global enterprise modernizing complex legacy systems, our elite engineering teams are here to bridge the gap between abstract imagination and structural execution.
            </p>
          </div>
        </ConditionalReveal>

        {/* Premium Badge Strip Row Formatted matching image_87f4b6.png specs */}
        <ConditionalReveal direction="up" duration={0.9} delay={0.12} offset={15} animationType="from">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-4 text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider">
            
            <div className="flex items-center gap-2 bg-slate-50/80 border border-slate-100 rounded-xl px-4 py-2 shadow-2xs hover:bg-white hover:border-slate-200 transition-all duration-200">
              <ShieldCheck size={14} className="text-emerald-500 shrink-0" />
              <span>Zero-Trust Security Baseline</span>
            </div>

            <span className="h-1.5 w-1.5 rounded-full bg-slate-300/70 hidden md:block shrink-0" />

            <div className="flex items-center gap-2 bg-slate-50/80 border border-slate-100 rounded-xl px-4 py-2 shadow-2xs hover:bg-white hover:border-slate-200 transition-all duration-200">
              <Activity size={14} className="text-blue-500 shrink-0" />
              <span>99.9% Uptime Redundancy</span>
            </div>

            <span className="h-1.5 w-1.5 rounded-full bg-slate-300/70 hidden md:block shrink-0" />

            <div className="flex items-center gap-2 bg-slate-50/80 border border-slate-100 rounded-xl px-4 py-2 shadow-2xs hover:bg-white hover:border-slate-200 transition-all duration-200">
              <Users size={14} className="text-amber-500 shrink-0" />
              <span>Agile Sprint Cycles</span>
            </div>

          </div>
        </ConditionalReveal>

        {/* Primary Call to Action Button Trigger */}
        <ConditionalReveal direction="up" duration={1.0} delay={0.15} offset={20} animationType="from">
          <div className="pt-6 flex justify-center">
            <Link
              href="/contact-us"
              className="group bg-gradient-to-r from-[#ff6b4a] to-[#ff3b2d] inline-flex items-center justify-center gap-2.5 font-bold text-white rounded-full px-9 py-4.5 text-xs uppercase tracking-wider transition-all duration-300 hover:bg-[#0c3da1] hover:shadow-lg active:scale-[0.98] cursor-pointer"
             
            >
              <span>Schedule a Free Strategy Session</span>
              <ArrowRight className="h-3.5 w-3.5 transform transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </ConditionalReveal>

      </div>
    </section>
  );
}