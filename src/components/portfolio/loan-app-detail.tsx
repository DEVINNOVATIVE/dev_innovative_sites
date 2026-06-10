"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Integrated Next.js Link component for client-side routing
import { ArrowLeft, ArrowRight } from "lucide-react";
import RevealAnimation from "../animation/RevealAnimation";

// --- IMAGES PATH MAPPING ---
import main1 from "@/assets/loan_app/main1.webp"; 
import main2 from "@/assets/loan_app/main2.png";
import heroimg from "@/assets/loan_app/heroimg.jpeg"; 
import initial from "@/assets/loan_app/initial.png";
import deava from "@/assets/loan_app/deava.png";

export function LoanAppDetail() {
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
        
        {/* ================= 1. HEADER DOUBLE DEVICE SHOWCASE DECK ================= */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 items-center">
          <ConditionalReveal direction="left" duration={1.1} delay={0.0} offset={40} animationType="from">
            <div className="relative w-full aspect-[1.4/1] transform transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src={main1}
                alt="Fido App Development multi device interface overview display mockup"
                fill
                className="object-contain"
                priority
              />
            </div>
          </ConditionalReveal>

          <ConditionalReveal direction="right" duration={1.1} delay={0.15} offset={40} animationType="from">
            <div className="relative w-full aspect-[1.4/1] transform transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src={main2}
                alt="Fido App UI user journey onboarding view card showcase"
                fill
                className="object-contain"
                priority
              />
            </div>
          </ConditionalReveal>
        </div>


        {/* ================= 2. ANALYSIS CORE INFORMATION GRID BLOCK ================= */}
        <div className="grid gap-12 lg:grid-cols-12 items-start pt-6">
          
          {/* LEFT CONTENT SHELL COLUMN */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Context Narrative Card Block 1 */}
            <div className="space-y-4">
              <ConditionalReveal direction="down" duration={0.9} delay={0.1} offset={20} animationType="from">
                <h2 className="text-3xl font-black tracking-tight text-[#08112a] sm:text-4xl">
                  Fido App Development
                </h2>
              </ConditionalReveal>
              
              <ConditionalReveal direction="up" duration={1.0} delay={0.2} offset={30} animationType="from">
                <div className="space-y-3">
                  <p className="text-sm leading-7 text-slate-400 font-normal">
                    Like many fast-growing fintech startups out there, Fido Solutions Inc. has reached a point where it surpassed the capabilities of its IT infrastructure. To account for the increasing number of clients and its global expansion, Fido needed to make a leap from the legacy system to the new one that would be capable of handling the company's growing needs.
                  </p>
                  <p className="text-sm leading-7 text-slate-400 font-normal">
                    This case study describes how Dev iNN developed a mobile lending app for Fido clients to ultimately increase customer satisfaction and make the whole process of loan lending much more convenient and transparent.
                  </p>
                </div>
              </ConditionalReveal>
            </div>

            {/* Context Narrative Card Block 2 */}
            <div className="space-y-4 pt-2">
              <ConditionalReveal direction="down" duration={0.9} delay={0.25} offset={20} animationType="from">
                <h3 className="text-2xl font-black tracking-tight text-[#08112a]">
                  Product
                </h3>
              </ConditionalReveal>
              
              <ConditionalReveal direction="up" duration={1.0} delay={0.35} offset={30} animationType="from">
                <div className="space-y-4">
                  <p className="text-sm leading-7 text-slate-400 font-normal">
                    Fido Money Lending is an instant loan app developed in partnership with Dev iNN that allows users to get money fast straight from their Android and iOS devices.
                  </p>
                  
                  <div className="pt-4 space-y-3">
                    <span className="text-xs font-bold text-slate-500 tracking-widest uppercase block mb-1">Key Features:</span>
                    {[
                      "Straightforward loan request form",
                      "Customer history tracking and analysis",
                      "Build-in interest rate calculator",
                      "Comfortable payback interface"
                    ].map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3 text-sm text-slate-400 font-medium pl-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#ff3333]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ConditionalReveal>
            </div>

          </div>

          {/* RIGHT MARKETING BANNER GRAPHIC COLUMN */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center w-full space-y-6">
            <ConditionalReveal direction="right" duration={1.1} delay={0.3} offset={45} animationType="from">
              <div 
                className="relative w-full max-w-[400px] aspect-square rounded-2xl overflow-hidden shadow-2xl border border-slate-100 transform-gpu"
                style={{ animation: "loanAppBannerFloat 6s ease-in-out infinite" }}
              >
                <Image
                  src={heroimg}
                  alt="Fido Money lending app download card link get an instant loan badge asset"
                  fill
                  className="object-cover"
                />
              </div>
            </ConditionalReveal>
          </div>

        </div>


        {/* ================= 3. BASELINE BILATERAL NEXT/PREV ROUTER DOCKS ================= */}
        <div className="pt-10 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Previous Portfolio Router Link Container */}
          <ConditionalReveal direction="left" duration={1.0} delay={0.45} offset={25} animationType="from">
            <Link 
              href="/portfolio/initial-coin" 
              className="group flex items-center gap-5 p-4 rounded-xl border border-slate-100/70 bg-[#fafbfc]/40 hover:bg-white hover:shadow-[0_15px_35px_rgba(0,0,0,0.03)] w-full sm:w-[360px] transition-all duration-300 block"
            >
              <div className="relative w-16 h-14 bg-slate-50 rounded overflow-hidden shrink-0">
                <Image
                  src={initial}
                  alt="Initial Coin Offering preview snapshot thumbnail asset"
                  fill
                  className="object-contain p-1 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-0.5">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                  <ArrowLeft className="h-3 w-3" /> Previous Portfolio
                </span>
                <h4 className="text-sm font-extrabold text-[#08112a] tracking-tight group-hover:text-blue-600 transition-colors">
                  Initial Coin Offering
                </h4>
              </div>
            </Link>
          </ConditionalReveal>

          {/* Next Portfolio Router Link Container */}
          <ConditionalReveal direction="right" duration={1.0} delay={0.45} offset={25} animationType="from">
            <Link 
              href="/portfolio/deana-ai" 
              className="group flex items-center justify-between p-4 rounded-xl border border-slate-100/70 bg-[#fafbfc]/40 hover:bg-white hover:shadow-[0_15px_35px_rgba(0,0,0,0.03)] w-full sm:w-[360px] transition-all duration-300 block text-right"
            >
              <div className="space-y-0.5 order-1 sm:order-none text-left sm:text-right pl-4 sm:pl-0">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center sm:justify-end gap-1">
                  Next Portfolio <ArrowRight className="h-3 w-3" />
                </span>
                <h4 className="text-sm font-extrabold text-[#08112a] tracking-tight group-hover:text-blue-600 transition-colors">
                  Deana AI Technology
                </h4>
              </div>
              <div className="relative w-16 h-14 bg-slate-50 rounded overflow-hidden shrink-0">
                <Image
                  src={deava}
                  alt="Deana AI Technology automated modular configuration display thumb"
                  fill
                  className="object-contain p-1 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </Link>
          </ConditionalReveal>

        </div>

      </div>

      <style jsx global>{`
        @keyframes loanAppBannerFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
}