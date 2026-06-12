"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BrainCircuit, ArrowRight, Sparkles, ShieldCheck, Cpu } from "lucide-react";
import RevealAnimation from "../animation/RevealAnimation";

export function AiHero() {
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
    <section className="relative w-full bg-white text-slate-900 py-8 md:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden select-none border-b border-slate-100 text-center">
      {/* Precision Ambient Light Pools */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[500px] bg-blue-500/[0.03] rounded-full blur-3xl pointer-events-none transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-1/2 w-[400px] h-[400px] bg-orange-500/[0.015] rounded-full blur-3xl pointer-events-none transform -translate-x-1/2 translate-y-1/3" />

      <div className="mx-auto max-w-[840px] relative z-10 space-y-10">
        
        {/* Animated Meta Tag Layer */}
        <div className="flex justify-center">
          <ConditionalReveal direction="down" duration={0.8} delay={0.0} offset={15} animationType="from">
            <span className="text-xs font-bold uppercase tracking-widest text-[#104cba] bg-blue-50 border border-blue-100/60 px-4 py-1.5 rounded-full inline-flex items-center gap-2 shadow-2xs">
              <BrainCircuit size={13} className="animate-pulse" /> Cognitive Intelligence
            </span>
          </ConditionalReveal>
        </div>

        {/* Core Typographical Heading Block */}
        <div className="space-y-4">
          <ConditionalReveal direction="down" duration={0.9} delay={0.05} offset={25} animationType="from">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#08112a] leading-[1.12]">
              Artificial Intelligence & <br />
              <span className="text-[#104cba]">Machine Learning</span> Solutions
            </h1>
          </ConditionalReveal>

          <div className="flex justify-center pt-1">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-400 border-x border-slate-200 px-4">
              From Concept to Intelligence: Automate, Predict, and Scale
            </p>
          </div>
        </div>

        {/* Descriptive Body Core Paragraphs */}
        <ConditionalReveal direction="up" duration={0.9} delay={0.1} offset={15} animationType="from">
          <div className="space-y-4 text-base sm:text-lg leading-relaxed text-slate-500 font-medium max-w-3xl mx-auto">
            <p>
              Data is your most valuable asset, but only if you know how to leverage it. At DevInnovative, we build custom Artificial Intelligence (AI) and Machine Learning (ML) solutions that transform raw operational parameters into predictive, actionable intelligence.
            </p>
            <p className="text-[15px] sm:text-base text-slate-400">
              We don't just implement AI for the sake of the trend—we deploy practical, high-ROI cognitive frameworks that optimize your cross-border operations, hyper-personalize user experiences, and unlock entirely new digital revenue streams.
            </p>
          </div>
        </ConditionalReveal>

        {/* ================= MODERN PREMIUM BADGES STRIP (As updated from image_87f4b6.png) ================= */}
        <ConditionalReveal direction="up" duration={0.9} delay={0.12} offset={15} animationType="from">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2 text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider">
            
            {/* Badge 1: SOC2 Secure */}
            <div className="flex items-center gap-2 bg-slate-50/80 border border-slate-100 rounded-xl px-4 py-2 shadow-2xs hover:bg-white hover:border-slate-200 transition-all duration-200">
              <ShieldCheck size={14} className="text-emerald-500 shrink-0" />
              <span>SOC2 Secure</span>
            </div>

            {/* Separator Dot 1 */}
            <span className="h-1.5 w-1.5 rounded-full bg-slate-300/70 hidden md:block shrink-0" />

            {/* Badge 2: Private LLM Fine-Tuning */}
            <div className="flex items-center gap-2 bg-slate-50/80 border border-slate-100 rounded-xl px-4 py-2 shadow-2xs hover:bg-white hover:border-slate-200 transition-all duration-200">
              <Cpu size={14} className="text-blue-500 shrink-0" />
              <span>Private LLM Fine-Tuning</span>
            </div>

            {/* Separator Dot 2 */}
            <span className="h-1.5 w-1.5 rounded-full bg-slate-300/70 hidden md:block shrink-0" />

            {/* Badge 3: Expected Accuracy */}
            <div className="flex items-center gap-2 bg-slate-50/80 border border-slate-100 rounded-xl px-4 py-2 shadow-2xs hover:bg-white hover:border-slate-200 transition-all duration-200">
              <Sparkles size={14} className="text-amber-500 shrink-0" />
              <span>99.4% Expected Accuracy</span>
            </div>

          </div>
        </ConditionalReveal>

        {/* High-Converting Primary Conversion Callout Button */}
        <ConditionalReveal direction="up" duration={1.0} delay={0.15} offset={20} animationType="from">
          <div className="pt-4 flex justify-center">
            <Link
              href="/contact-us"
              className="group inline-flex bg-gradient-to-r from-[#ff6b4a] to-[#ff3b2d] items-center justify-center gap-2 font-bold text-white rounded-full px-8 py-4 text-xs uppercase tracking-wider transition-all duration-300 hover:bg-[#0c3da1] hover:shadow-md active:scale-[0.98] cursor-pointer"
             
            >
              <span>Request AI Readiness Assessment</span>
              <ArrowRight className="h-3.5 w-3.5 transform transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </ConditionalReveal>

      </div>
    </section>
  );
}