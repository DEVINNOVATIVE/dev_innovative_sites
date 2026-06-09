"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import RevealAnimation from "../../animation/RevealAnimation";

// Core asset layers precisely mapped from your files directory layout
import iconDesign from "@/assets/services/application_developement/side-icon-1.png";
import iconGateway from "@/assets/services/application_developement/side-icon-2.png";
import iconRevenue from "@/assets/services/application_developement/side-icon-3.png";
import iconUX from "@/assets/services/application_developement/side-icon-4.png";
import dotPattern from "@/assets/services/application_developement/dot-18.png";
import Link from "next/link";

const featureBlocks = [
  {
    title: "Innovative Design",
    description: "Transform Your App with Our Cutting-edge Layouts Stand Out with Unique Visual Aesthetics.",
    icon: iconDesign,
    glowColor: "group-hover:border-cyan-500/30",
    iconBg: "bg-cyan-50/50 text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white",
    mobileStyles: "border-cyan-100/40 bg-gradient-to-br from-white to-cyan-50/10"
  },
  {
    title: "Payment Gateway",
    description: "Seamless Payment Gateway Integration for Making Apps Operational and Transaction-safe Securely.",
    icon: iconGateway,
    glowColor: "group-hover:border-emerald-500/30",
    iconBg: "bg-emerald-50/50 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white",
    mobileStyles: "border-emerald-100/40 bg-gradient-to-br from-white to-emerald-50/10"
  },
  {
    title: "Increase Revenue",
    description: "Maximize Monetization Capabilities with a Customized App Solution Built for Enterprise Metrics.",
    icon: iconRevenue,
    glowColor: "group-hover:border-amber-500/30",
    iconBg: "bg-amber-50/50 text-amber-600 group-hover:bg-amber-500 group-hover:text-white",
    mobileStyles: "border-amber-100/40 bg-gradient-to-br from-white to-amber-50/10"
  },
  {
    title: "UI & UX Experience",
    description: "Delight Users and Retain Traffic with Exceptional Interface Architectures Engineered to Convert.",
    icon: iconUX,
    glowColor: "group-hover:border-rose-500/30",
    iconBg: "bg-rose-50/50 text-rose-600 group-hover:bg-rose-500 group-hover:text-white",
    mobileStyles: "border-rose-100/40 bg-gradient-to-br from-white to-rose-50/10"
  },
];

export function AppDevelopmentFeatures() {
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
    <section className="mx-auto w-full max-w-[1400px] px-4 py-2 sm:px-6 lg:px-4 lg:py-12 bg-white text-slate-900 select-none relative overflow-hidden">
      
      {/* Absolute Decorative Center Matrix Grid Dots */}
      <div className="absolute top-[35%] left-[30%] w-32 h-32 opacity-20 pointer-events-none hidden xl:block">
        <Image src={dotPattern} alt="Background graphic grid matrix element layout" fill className="object-contain" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-[1280px] mx-auto relative z-10">
        
        {/* ======================================================================
            LEFT COLUMN: SECTION HEADERS & CONTEXT TEXTS
            ====================================================================== */}
        <div className="lg:col-span-5 space-y-6 text-left max-w-[520px] mx-auto lg:mx-0">
          
          {/* Desktop Entrance Paths */}
          <div className="hidden lg:block space-y-5">
            <RevealAnimation direction="left" duration={0.9} delay={0.1} offset={25} animationType="from">
              <span className="text-lg font-bold tracking-wider text-[#104cba] uppercase block">
                Innovative App Developments
              </span>
            </RevealAnimation>
            <RevealAnimation direction="left" duration={1.0} delay={0.18} offset={30} animationType="from">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[#08112a] leading-[1.2]">
                Experience The Power Of <br /> Top-Tier App <br /> Development
              </h2>
            </RevealAnimation>
            <RevealAnimation direction="left" duration={1.1} delay={0.25} offset={25} animationType="from">
              <div className="space-y-4 text-[14.5px] leading-relaxed text-slate-500 font-normal">
                <p>In today's fast-paced digital world, mobile applications have become an essential tool for business productivity. More than ever, clients require customized software structures suited uniquely to their business scope.</p>
                <p>Our company specializes in constructing premier cross-platform apps using robust hybrid frames. Our developers work intimately with endpoints to realize unique features natively.</p>
              </div>
            </RevealAnimation>
            <RevealAnimation direction="up" duration={1.0} delay={0.4} offset={20} animationType="from">
              <div className="pt-2">
                <Link href="/contact-us" className="inline-flex h-12 items-center justify-center rounded-xl bg-[#ff5c3d] hover:bg-[#e84c2e] px-8 text-[15px] font-bold text-white shadow-lg shadow-orange-500/10 active:scale-[0.98] transition-all duration-200">
                  Get A Free Quote
                </Link>
              </div>
            </RevealAnimation>
          </div>

          {/* Mobile Text Output Configuration */}
          <div className="block lg:hidden text-center sm:text-left space-y-4">
            <span className="text-xs sm:text-md font-bold tracking-wider text-[#104cba] uppercase block">
              Innovative App Developments
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#08112a] leading-tight">
              Experience The Power Of <br /> Top-Tier App Development
            </h2>
            <div className="space-y-3 text-[14px] leading-relaxed text-slate-500 font-normal px-1">
              <p>In today's fast-paced digital world, mobile applications have become an essential tool for business productivity. More than ever, clients require customized software structures suited uniquely to their business scope.</p>
            </div>
            <div className="pt-2">
              <Link href="/contact-us" className="inline-flex h-11 w-full sm:w-auto items-center justify-center rounded-xl bg-[#ff5c3d] px-8 text-sm font-bold text-white shadow-md">
                Get A Free Quote
              </Link>
            </div>
          </div>

        </div>

        {/* ======================================================================
            RIGHT COLUMN: ENHANCED PREMIUM MATRIX CARDS
            ====================================================================== */}
        <div className="lg:col-span-7 w-full">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 w-full">
            {featureBlocks.map((feat, index) => (
              <React.Fragment key={feat.title}>
                
                {/* Desktop Grid Layout Blocks (Premium Hover Aesthetics) */}
                <div className="hidden lg:block h-full">
                  <RevealAnimation 
                    direction="up" 
                    duration={0.85} 
                    delay={0.2 + index * 0.12} 
                    offset={25} 
                    animationType="from"
                  >
                    <div className={`group h-full bg-gradient-to-br from-white to-slate-50/40 rounded-3xl border border-slate-100 p-7 shadow-[0_4px_30px_rgba(15,23,42,0.015)] hover:shadow-[0_22px_50px_rgba(15,23,42,0.06)] hover:bg-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 flex flex-col items-start text-left ${feat.glowColor}`}>
                      
                      {/* Smooth color inverted icon module */}
                      <div className={`h-14 h-14 w-14 relative rounded-2xl flex items-center justify-center border border-slate-100/50 mb-6 transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-md ${feat.iconBg}`}>
                        <Image src={feat.icon} alt={feat.title} fill className="object-contain p-3 transition-all duration-500 group-hover:brightness-0 group-hover:invert" />
                      </div>
                      
                      <h3 className="text-[18px] font-bold text-[#08112a] mb-2.5 tracking-tight transition-colors duration-300 group-hover:text-[#104cba]">
                        {feat.title}
                      </h3>
                      
                      <p className="text-[13.5px] leading-relaxed text-slate-400 font-normal transition-colors duration-300 group-hover:text-slate-500">
                        {feat.description}
                      </p>
                    </div>
                  </RevealAnimation>
                </div>

                {/* Mobile Framework Render (Tailwind Hardware Accelerated Tap Animation) */}
                <div className="block lg:hidden h-full">
                  <div className={`rounded-2xl border p-5 shadow-sm text-left flex flex-col items-start transition-all duration-200 ease-out active:scale-[0.98] ${feat.mobileStyles}`}>
                    <div className="h-12 w-12 relative rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 shadow-inner">
                      <Image src={feat.icon} alt={feat.title} fill className="object-contain p-2.5" />
                    </div>
                    <h3 className="text-base font-bold text-[#08112a] mb-1.5 tracking-tight">
                      {feat.title}
                    </h3>
                    <p className="text-[13px] sm:text-[13.5px] leading-relaxed text-slate-400 font-normal">
                      {feat.description}
                    </p>
                  </div>
                </div>

              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}