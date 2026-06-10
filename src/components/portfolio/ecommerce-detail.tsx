"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import RevealAnimation from "../animation/RevealAnimation";

// --- EXPLICIT PATH IMPORTS MATCHING YOUR ASSETS SCHEME (image_b61e63.png) ---
import mainHero from "@/assets/ecommerce/main.png";
import sideDisplay from "@/assets/ecommerce/side.png";
import appAsset from "@/assets/ecommerce/app.png";
import financeAsset from "@/assets/ecommerce/finance.jpeg"; // Note the explicit .jpeg file extension

export function EcommerceDetail() {
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

                {/* ================= 1. LARGE WEB DESKTOP HERO SHOWCASE ================= */}
                <div className="w-full">
                    <ConditionalReveal direction="down" duration={1.1} delay={0.0} offset={40} animationType="from">
                        <div className="relative w-full aspect-[1.38/1] rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 shadow-sm">
                            <Image
                                src={mainHero}
                                alt="Web desktop platform user experience catalog layout visualization asset"
                                fill
                                className="object-contain p-2"
                                priority
                            />
                        </div>
                    </ConditionalReveal>
                </div>

                {/* ================= 2. ANALYSIS CORE TEXT & MOBILE MOCKUP GRID ================= */}
                <div className="grid gap-12 lg:grid-cols-12 items-start pt-4">

                    {/* LEFT SUB-COLUMN: DETAILED TEXT ANALYSIS SECTION */}
                    <div className="lg:col-span-7 space-y-8">
                        <ConditionalReveal direction="left" duration={1.0} delay={0.15} offset={30} animationType="from">
                            <p className="text-base leading-7 text-slate-400 font-normal">
                                Our company has a diverse portfolio of successful ecommerce website and app development projects. We have extensive experience in developing custom solutions for businesses of all sizes, from small startups to large enterprises.
                            </p>
                        </ConditionalReveal>

                        {/* Block 1: Fashion and Apparel E-commerce */}
                        <div className="space-y-3">
                            <ConditionalReveal direction="down" duration={0.9} delay={0.2} offset={20} animationType="from">
                                <h3 className="text-lg font-bold tracking-tight text-[#08112a]">
                                    Fashion and Apparel E-commerce
                                </h3>
                            </ConditionalReveal>

                            <ConditionalReveal direction="up" duration={1.0} delay={0.3} offset={25} animationType="from">
                                <p className="text-base leading-7 text-slate-400 font-normal">
                                    We developed a modern and user-friendly e-commerce website for a fashion and apparel brand. The website features easy navigation, secure payment processing, and a clean design that showcases the brand's products.
                                </p>
                            </ConditionalReveal>
                        </div>

                        {/* Block 2: B2B Ecommerce Platform */}
                        <div className="space-y-3 pt-2">
                            <ConditionalReveal direction="down" duration={0.9} delay={0.25} offset={20} animationType="from">
                                <h3 className="text-lg font-bold tracking-tight text-[#08112a]">
                                    B2B Ecommerce Platform
                                </h3>
                            </ConditionalReveal>

                            <ConditionalReveal direction="up" duration={1.0} delay={0.35} offset={25} animationType="from">
                                <p className="text-base leading-7 text-slate-400 font-normal">
                                    Our team developed a custom B2B ecommerce platform for a business that sells industrial supplies. The platform includes features such as bulk ordering, customizable pricing, and a customer portal that allows clients to track their orders.
                                </p>
                            </ConditionalReveal>
                        </div>
                    </div>

                    {/* RIGHT SUB-COLUMN: SMARTPHONE LAYOUT SHOWCASE ARTWORK */}
                    <div className="lg:col-span-5 flex justify-center w-full">
                        <ConditionalReveal direction="right" duration={1.2} delay={0.2} offset={45} animationType="from">
                            <div
                                className="relative w-full max-w-[440px] aspect-[1.43/1] transform-gpu"
                                style={{ animation: "ecommerceSideFloat 6s ease-in-out infinite" }}
                            >
                                <Image
                                    src={sideDisplay}
                                    alt="Triple smartphone layout user interface onboarding preview application screens"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </ConditionalReveal>
                    </div>

                </div>

                {/* ================= 3. BASELINE BILATERAL NEXT/PREV ROUTER DOCKS ================= */}
                <div className="pt-10 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">

                    {/* Previous Case Study Link Container */}
                    <ConditionalReveal direction="left" duration={1.0} delay={0.45} offset={25} animationType="from">
                        <Link
                            href="/portfolio/crypto-app"
                            className="group flex items-center gap-5 p-4 rounded-xl border border-slate-100 bg-[#fafbfc]/40 hover:bg-white hover:shadow-[0_15px_35px_rgba(0,0,0,0.03)] w-full sm:w-[360px] transition-all duration-300 block"
                        >
                            <div className="relative w-16 h-14 bg-slate-50 rounded overflow-hidden shrink-0 flex items-center justify-center p-1">
                                <Image
                                    src={appAsset}
                                    alt="Crypto App Development showcase thumbnail preview element node"
                                    className="object-contain transform transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="space-y-0.5">
                                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                                    <ArrowLeft className="h-3 w-3" /> Previous Portfolio
                                </span>
                                <h4 className="text-sm font-extrabold text-[#08112a] tracking-tight group-hover:text-blue-600 transition-colors">
                                    Crypto App Development
                                </h4>
                            </div>
                        </Link>
                    </ConditionalReveal>

                    {/* Next Case Study Link Container */}
                    <ConditionalReveal direction="right" duration={1.0} delay={0.45} offset={25} animationType="from">
                        <Link
                            href="/portfolio/finance-website"
                            className="group flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-[#fafbfc]/40 hover:bg-white hover:shadow-[0_15px_35px_rgba(0,0,0,0.03)] w-full sm:w-[360px] transition-all duration-300 block text-right"
                        >

                            <div className="space-y-0.5 text-left order-1 sm:order-none pl-4 sm:pl-0">
                                <div className="relative w-16 h-14 bg-slate-50 rounded overflow-hidden shrink-0 flex items-center justify-center p-1">
                                    <Image
                                        src={financeAsset}
                                        alt="Finance Website multi platform preview asset snapshot sheet module"
                                        className="object-contain transform transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                                    Next Portfolio <ArrowRight className="h-3 w-3" />
                                </span>
                                <h4 className="text-sm font-extrabold text-[#08112a] tracking-tight group-hover:text-blue-600 transition-colors">
                                    Finance Website
                                </h4>
                            </div>

                        </Link>
                    </ConditionalReveal>

                </div>

            </div>

            {/* --- INLINE FLOATING KEYFRAMES LOOP --- */}
            <style jsx global>{`
        @keyframes ecommerceSideFloat {
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