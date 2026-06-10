"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Imported Next.js Link component for proper routing
import { ArrowRight } from "lucide-react";
import RevealAnimation from "../animation/RevealAnimation";

// --- EXTRACTED ASSETS FROM YOUR DIRECTORY MAP ---
import mainBanner from "@/assets/crypto-app/main.png";
import cryptoHero from "@/assets/crypto-app/crypto_hero.png";
import phoneBody from "@/assets/crypto-app/phone_body.png"; 
import loanAppAsset from "@/assets/crypto-app/loan_app.png";

export function CryptoAppDetail() {
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
    <section className="relative bg-white text-slate-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      <div className="mx-auto max-w-[1140px] space-y-16">
        
        {/* ================= 1. TOP MAIN BRAND BANNER BLOCK ================= */}
        <div className="w-full">
          <ConditionalReveal direction="down" duration={1.1} delay={0.0} offset={30} animationType="from">
            <div className="relative w-full aspect-[2.6/1] rounded-2xl overflow-hidden bg-[#0d0e12] shadow-xl border border-slate-100">
              <Image
                src={mainBanner}
                alt="Cryptocurrency investments Blockchain solutions main banner header"
                fill
                className="object-cover"
                priority
              />
            </div>
          </ConditionalReveal>
        </div>

        {/* ================= 2. CORE BRIEF AND METRIC CONTENT GRID ================= */}
        <div className="grid gap-12 lg:grid-cols-12 items-start pt-4">
          
          {/* LEFT SUB-COLUMN: SYSTEM FEATURES AND EXPLANATION NARRATIVE */}
          <div className="lg:col-span-6 space-y-8">
            <ConditionalReveal direction="left" duration={1.0} delay={0.15} offset={30} animationType="from">
              <p className="text-sm leading-7 text-slate-400 font-normal">
                Dev iNN developed initial coin offering lnbg london coin which enables our clients lnbg london opportunity to invest in new real estate asset-pool fund & Premier league football, that will manage investment funds via blockchain tokens, offering the opportunity for immediate, tokenised exchange in an otherwise inherently highly-illiquid, long-term-only asset investment class.
              </p>
            </ConditionalReveal>

            {/* Feature Row Items Stack */}
            <div className="space-y-6">
              
              {/* Feature Item 1 */}
              <ConditionalReveal direction="up" duration={0.9} delay={0.25} offset={25} animationType="from">
                <div className="flex gap-4 items-start border-b border-slate-100 pb-5">
                  <div className="shrink-0 h-9 w-9 rounded-full bg-[#ff3b3b] flex items-center justify-center text-xs font-bold text-white">
                    01
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-[#08112a]">
                      Real Time Market Data
                    </h3>
                    <p className="text-xs leading-6 text-slate-400 font-normal">
                      Real time market data on various cryptocurrencies, including prices, trading volumes, and trends.
                    </p>
                  </div>
                </div>
              </ConditionalReveal>

              {/* Feature Item 2 */}
              <ConditionalReveal direction="up" duration={0.9} delay={0.35} offset={25} animationType="from">
                <div className="flex gap-4 items-start">
                  <div className="shrink-0 h-9 w-9 rounded-full bg-[#ff3b3b] flex items-center justify-center text-xs font-bold text-white">
                    02
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-[#08112a]">
                      Trading Tools
                    </h3>
                    <p className="text-xs leading-6 text-slate-400 font-normal">
                      The app should provide users with trading tools, such as limit orders, stop-loss orders, and more
                    </p>
                  </div>
                </div>
              </ConditionalReveal>

            </div>
          </div>

          {/* RIGHT SUB-COLUMN: APP VECTOR CONTEXT DESIGN GRAPHIC */}
          <div className="lg:col-span-6 flex justify-center w-full relative">
            <ConditionalReveal direction="right" duration={1.2} delay={0.2} offset={40} animationType="from">
              <div 
                className="relative w-full max-w-[440px] aspect-[1.15/1] transform-gpu"
                style={{ animation: "cryptoAppFloat 5s ease-in-out infinite" }}
              >
                <Image
                  src={cryptoHero}
                  alt="Crypto application telemetry tracking isometric display illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </ConditionalReveal>
          </div>

        </div>

        {/* ================= 3. BOTTOM RIGHT NEXT PORTFOLIO SPLIT DECK ================= */}
        <div className="flex justify-end w-full pt-6">
          <ConditionalReveal direction="up" duration={1.0} delay={0.5} offset={30} animationType="from">
            {/* Wrapped securely inside Next.js Link for instant routing */}
            <Link 
              href="/portfolio/loan-app" 
              className="group relative bg-[#fdfdfe] border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.06)] rounded-xl p-5 flex items-center justify-between gap-12 max-w-[380px] transition-all duration-300 hover:-translate-y-1 block cursor-pointer"
            >
              {/* Context Copy Details */}
              <div className="space-y-1 pl-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block">
                  Next Portfolio
                </span>
                <h4 className="text-md font-bold text-[#08112a] tracking-tight group-hover:text-blue-600 transition-colors">
                  Loan App Development
                </h4>
              </div>

              {/* Dynamic Stacked Device Assets */}
              <div className="relative w-24 h-20 shrink-0">
                <div className="absolute right-8 top-1 w-14 h-18 opacity-40 scale-90 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <Image
                    src={phoneBody}
                    alt="Phone body background graphic simulation container"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="absolute right-0 top-0 w-16 h-20 transform transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={loanAppAsset}
                    alt="Loan App preview mini mockup element asset node"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Little Floating Utility Next Arrow Indicator */}
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full bg-white border border-slate-100 shadow-md flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                <ArrowRight className="h-3.5 w-3.5 text-blue-600" />
              </div>
            </Link>
          </ConditionalReveal>
        </div>

      </div>

      {/* --- FLOATING ISOMETRIC OBJECT CONTROLS KEYFRAMES --- */}
      <style jsx global>{`
        @keyframes cryptoAppFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(0.5deg);
          }
        }
      `}</style>
    </section>
  );
}