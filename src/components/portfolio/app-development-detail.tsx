"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import RevealAnimation from "../animation/RevealAnimation";

// --- EXPANDED ASSET SCHEME MATCHING DIRECTORY PATHS (assets/app_developement/) ---
import mainHero from "@/assets/app_developement/main.png";
import sideDisplay from "@/assets/app_developement/side.png";
import dainaAi from "@/assets/app_developement/daina_ai.png";
import ecommerce from "@/assets/app_developement/ecommerce.png";

export function AppDevelopmentDetail() {
  return (
    <section className="relative bg-white text-slate-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      <div className="mx-auto max-w-[1140px] space-y-16">
        
        {/* ================= 1. LARGE HERO PRESENTATION DEVICE SHOWCASE ================= */}
        <div className="w-full">
          <RevealAnimation direction="down" duration={1.1} delay={0.0} offset={40} animationType="from">
            <div className="relative w-full aspect-[1.85/1] rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 shadow-sm">
              <Image
                src={mainHero}
                alt="Creed Coin crypto wallet and trading mobile application layout presentation template"
                fill
                className="object-contain p-2"
                priority
              />
            </div>
          </RevealAnimation>
        </div>

        {/* ================= 2. CORE SYSTEM METRIC ANALYSIS GRAPHICS GRID ================= */}
        <div className="grid gap-12 lg:grid-cols-12 items-center pt-4">
          
          {/* LEFT SUB-COLUMN: TEXT NARRATIVE & CORE POINTS */}
          <div className="lg:col-span-7 space-y-8">
            <RevealAnimation direction="left" duration={1.0} delay={0.15} offset={30} animationType="from">
              <p className="text-base leading-7 text-slate-400 font-normal">
                Our development company has successfully developed the Creed Coin crypto wallet and trading mobile app, utilizing cutting-edge technologies to create a secure and user-friendly platform for managing cryptocurrency transactions. Our team of experienced developers worked closely with the Creed Coin team to deliver a solution that meets their specific needs and exceeds industry standards. Contact us today to see how we can help you bring your ideas to life with innovative software development.
              </p>
            </RevealAnimation>

            {/* Feature Bullets Parameter List */}
            <div className="space-y-6">
              
              {/* Feature 01 */}
              <RevealAnimation direction="up" duration={0.9} delay={0.25} offset={25} animationType="from">
                <div className="flex gap-4 items-start border-b border-slate-100 pb-5">
                  <div className="shrink-0 h-9 w-9 rounded-full bg-[#ff3b3b] flex items-center justify-center text-xs font-bold text-white">
                    01
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-[#08112a]">
                      Real Time Market Data
                    </h3>
                    <p className="text-base leading-6 text-slate-400 font-normal">
                      Real time market data on various cryptocurrencies, including prices, trading volumes, and trends.
                    </p>
                  </div>
                </div>
              </RevealAnimation>

              {/* Feature 02 */}
              <RevealAnimation direction="up" duration={0.9} delay={0.35} offset={25} animationType="from">
                <div className="flex gap-4 items-start border-b border-slate-100 pb-5">
                  <div className="shrink-0 h-9 w-9 rounded-full bg-[#ff3b3b] flex items-center justify-center text-xs font-bold text-white">
                    02
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-[#08112a]">
                      High Security
                    </h3>
                    <p className="text-base leading-6 text-slate-400 font-normal">
                      Top notch security features to ensure that the user's funds and private information are kept safe and secure.
                    </p>
                  </div>
                </div>
              </RevealAnimation>

              {/* Feature 03 */}
              <RevealAnimation direction="up" duration={0.9} delay={0.45} offset={25} animationType="from">
                <div className="flex gap-4 items-start">
                  <div className="shrink-0 h-9 w-9 rounded-full bg-[#ff3b3b] flex items-center justify-center text-xs font-bold text-white">
                    03
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-[#08112a]">
                      Payment Options
                    </h3>
                    <p className="text-base leading-6 text-slate-400 font-normal">
                      The app should allow users to easily deposit and withdraw funds from their crypto wallet using various payment options.
                    </p>
                  </div>
                </div>
              </RevealAnimation>

            </div>
          </div>

          {/* RIGHT SUB-COLUMN: DETAILED SIDE APP DISPLAY ARTWORK */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <RevealAnimation direction="right" duration={1.2} delay={0.2} offset={45} animationType="from">
              <div 
                className="relative w-full max-w-[420px] aspect-square transform-gpu"
                style={{ animation: "appDetailFloat 6s ease-in-out infinite" }}
              >
                <Image
                  src={sideDisplay}
                  alt="Interactive Tap card link payment methods display preview mockup frame"
                  fill
                  className="object-contain"
                />
              </div>
            </RevealAnimation>
          </div>

        </div>

        {/* ================= 3. BASELINE BILATERAL FOOTER DOCKS ================= */}
        <div className="pt-10 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Previous Case Study Link */}
          <RevealAnimation direction="left" duration={1.0} delay={0.5} offset={25} animationType="from">
            <Link 
              href="/portfolio/deana-ai"
              className="group flex items-center gap-5 p-4 rounded-xl border border-slate-100 bg-[#fafbfc]/40 hover:bg-white hover:shadow-[0_15px_35px_rgba(0,0,0,0.03)] w-full sm:w-[360px] transition-all duration-300 block"
            >
              <div className="relative w-16 h-14 bg-slate-50 rounded overflow-hidden shrink-0 flex items-center justify-center p-1">
                <Image
                  src={dainaAi}
                  alt="Deana AI Technology showcase thumbnail asset"
                  className="object-contain transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-0.5">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                  <ArrowLeft className="h-3 w-3" /> Previous Portfolio
                </span>
                <h4 className="text-sm font-extrabold text-[#08112a] tracking-tight group-hover:text-blue-600 transition-colors">
                  Deana AI Technology
                </h4>
              </div>
            </Link>
          </RevealAnimation>

          {/* Next Case Study Link */}
          <RevealAnimation direction="right" duration={1.0} delay={0.5} offset={25} animationType="from">
            <Link 
              href="/portfolio/ecommerce-web-app"
              className="group flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-[#fafbfc]/40 hover:bg-white hover:shadow-[0_15px_35px_rgba(0,0,0,0.03)] w-full sm:w-[360px] transition-all duration-300 block"
            >
              <div className="space-y-0.5 text-left order-1 sm:order-none pl-4 sm:pl-0">
                   <div className="relative w-16 h-14 bg-slate-50 rounded overflow-hidden shrink-0 flex items-center justify-center p-1">
                <Image
                  src={ecommerce}
                  alt="E commerce platform web display preview asset module"
                  className="object-contain transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                  Next Portfolio <ArrowRight className="h-3 w-3" />
                </span>
                <h4 className="text-sm font-extrabold text-[#08112a] tracking-tight group-hover:text-blue-600 transition-colors">
                  E commerce Web App Development
                </h4>
              </div>
          
            </Link>
          </RevealAnimation>

        </div>

      </div>

      {/* --- INLINE FLOATING KEYFRAMES LOOP --- */}
      <style jsx global>{`
        @keyframes appDetailFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </section>
  );
}