"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PhoneCall } from "lucide-react";
import RevealAnimation from "../../animation/RevealAnimation";

// Core asset layers precisely mapped from image_5dce43.png
import phoneScreen from "@/assets/services/application_developement/home-18-2x-01-min.png";
import paymentCard from "@/assets/services/application_developement/home-18-2x-02-min.png";
import bgShapeBlue from "@/assets/services/application_developement/Shape-1-copy-6.png";
import bgShapeOrange from "@/assets/services/application_developement/Shape-1-copy-7.png";
import dotPattern from "@/assets/services/application_developement/dot-18.png";
import Link from "next/link";

export function AppDevelopmentHero() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <section className="mx-auto w-full max-w-[1400px] px-4 py-6 sm:px-6 lg:px-8 lg:py-12 bg-white text-slate-900 select-none relative overflow-hidden">
      
      {/* Absolute Decorative Background Dots */}
      <div className="absolute top-10 left-10 w-24 h-24 opacity-40 pointer-events-none hidden lg:block">
        <Image src={dotPattern} alt="Background dot matrix texture" fill className="object-contain" />
      </div>

      {/* ======================================================================
          1. DESKTOP SYSTEM LAYER (GSAP ACTIVE ABOVE 1024PX BREAKPOINT)
          ====================================================================== */}
      <div className="hidden lg:grid items-center gap-12 grid-cols-2 lg:gap-16 relative z-10">
        
        {/* Left Side: Copywriting Content Blocks */}
        <div className="max-w-[560px] space-y-6 text-left">
          <ConditionalReveal direction="left" duration={0.9} delay={0.1} offset={30} animationType="from">
            <span className="text-lg font-bold tracking-wider text-[#104cba]  block">
              Innovative Solutions For Business Transformation
            </span>
          </ConditionalReveal>

          <ConditionalReveal direction="left" duration={1.0} delay={0.18} offset={35} animationType="from">
            <h1 className="text-3xl font-bold tracking-tight text-[#08112a] sm:text-5xl lg:text-6xl leading-[1.1]">
              Mobile App <br /> Development
            </h1>
          </ConditionalReveal>

          <ConditionalReveal direction="left" duration={1.1} delay={0.25} offset={25} animationType="from">
            <p className="text-[15px] sm:text-base leading-relaxed text-slate-500 font-normal">
              Transform your vision into an astounding mobile application today. From concept design to expert application development services with user-centric functionality built inside high-performance native ecosystems.
            </p>
          </ConditionalReveal>

          {/* Call-to-Actions Row */}
          <ConditionalReveal direction="up" duration={1.0} delay={0.4} offset={20} animationType="from">
            <div className="flex items-center gap-6 pt-2">
              <Link
                href="/contact-us"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-[#ff5c3d] hover:bg-[#e84c2e] px-8 text-[15px] font-bold text-white shadow-lg shadow-orange-500/10 active:scale-[0.98] transition-all duration-200"
              >
                Get A Free Quote
              </Link>
              <div className="flex items-center gap-3 text-left group">
                <div className="h-10 w-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#104cba] transition-transform duration-300 group-hover:scale-105">
                  <PhoneCall className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Call us: +923070761555</p>
                  <a href="tel:+923070761555" className="text-sm font-bold text-[#08112a] hover:text-[#104cba] transition-colors">
                    For any questions
                  </a>
                </div>
              </div>
            </div>
          </ConditionalReveal>
        </div>

        {/* Right Side: Composited Canvas Artwork matching image_5dcede.png layout properties */}
        <div className="flex justify-center lg:justify-end relative h-[520px] w-full">
          
          {/* Background Blue Rounded Triangle Geometry Layer */}
          <div className="absolute top-[8%] right-[32%] w-60 h-60 opacity-90 pointer-events-none" style={{ animation: "slowFloatBlue 8s ease-in-out infinite" }}>
            <Image src={bgShapeBlue} alt="Abstract layout composition geometric object blue" fill className="object-contain" />
          </div>

          {/* Background Orange Sharp Vector Triangle Geometry Layer */}
          <div className="absolute bottom-[20%] right-[2%] w-56 h-56 opacity-95 pointer-events-none" style={{ animation: "slowFloatOrange 9s ease-in-out infinite" }}>
            <Image src={bgShapeOrange} alt="Abstract layout composition geometric object orange" fill className="object-contain" />
          </div>

          {/* Main Mobile App UI Wallet Prototype Device Layer */}
          <div className="absolute bottom-0 right-[12%] w-[290px] h-[480px] z-20 drop-shadow-[0_25px_50px_rgba(8,17,42,0.18)]" style={{ animation: "deviceMainFloat 6s ease-in-out infinite" }}>
            <Image
              src={phoneScreen}
              alt="Mobile Wallet application user interface view dashboard layout"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Floating Secure Payment Micro-Card Interaction Layer */}
          <div className="absolute top-[28%] left-[12%] w-[200px] h-[70px] z-30 drop-shadow-[0_12px_30px_rgba(0,0,0,0.06)]" style={{ animation: "popInCardFloat 5s ease-in-out infinite" }}>
            <Image
              src={paymentCard}
              alt="Secure Payment validation confirmation pop-up micro dialog frame"
              fill
              className="object-contain"
            />
          </div>

          {/* Tiny Floating Context Element Accents */}
          <div className="absolute top-[20%] right-[10%] w-2.5 h-2.5 bg-amber-400 rounded-full animate-ping duration-1000" />
          <div className="absolute bottom-[35%] left-[20%] w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />

        </div>

      </div>

      {/* ======================================================================
          2. MOBILE LAYER SYSTEM (BUILT-IN TAILWIND HARDWARE-ACCELERATED ANIMATIONS)
          ====================================================================== */}
      <div className="block lg:hidden w-full space-y-10 text-center relative z-10">
        
        {/* Texts Header Flow */}
        <div className="max-w-xl mx-auto space-y-4">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-[#104cba]  block">
            Innovative Solutions For Business Transformation
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#08112a] leading-tight">
            Mobile App <br /> Development
          </h1>
          <p className="text-[14px] sm:text-base leading-relaxed text-slate-500 font-normal px-2">
            Transform your vision into an astounding mobile application today. From concept design to expert application development services with user-centric functionality built inside high-performance native ecosystems.
          </p>
          
          {/* Action Interface Buttons Row using hardware-accelerated transitions & touch states */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
            <Link
              href="/contact-us"
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-xl bg-[#ff5c3d] px-8 text-[15px] font-bold text-white shadow-md transition-transform duration-200 ease-out active:scale-[0.97]"
            >
              Get A Free Quote
            </Link>
            <a  
              href="tel:+923070761555" 
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-xl border border-slate-200 bg-white text-sm font-bold text-[#08112a] gap-2 shadow-sm transition-transform duration-200 ease-out active:scale-[0.97]"
            >
              {/* Added animate-pulse tool to provide clean visual depth directly onto phone viewports */}
              <PhoneCall className="h-4 w-4 text-[#104cba] animate-pulse" />
              Call us for any questions
            </a>
          </div>
        </div>

        {/* Composited Fluid Artwork Frame Layer using build-in floating animations */}
        <div className="flex justify-center items-center w-full min-h-[380px] pt-4 relative">
          
          {/* Subtle floating background decoration shapes using built-in matrix pulses */}
          <div className="absolute top-[15%] left-[12%] w-36 h-36 opacity-30 animate-pulse">
            <Image src={bgShapeBlue} alt="deco backdrop link layout" fill className="object-contain" />
          </div>
          <div className="absolute bottom-[15%] right-[10%] w-36 h-36 opacity-30 animate-pulse [animation-delay:1s]">
            <Image src={bgShapeOrange} alt="deco backdrop link layout" fill className="object-contain" />
          </div>

          {/* Core App Display Layout Blueprint Device Wrapper */}
          <div className="relative w-[65vw] sm:w-[240px] aspect-[0.62/1] z-10 drop-shadow-xl animate-[deviceMainFloat_7s_ease-in-out_infinite]">
            <Image
              src={phoneScreen}
              alt="Mobile Wallet interface layout overview"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Secure validation badge overlay offset */}
          <div className="absolute top-[35%] left-[5%] w-[140px] h-[55px] z-20 drop-shadow-md animate-[popInCardFloat_5s_ease-in-out_infinite]">
            <Image
              src={paymentCard}
              alt="Secure payment modal badge"
              fill
              className="object-contain"
            />
          </div>
          
        </div>

      </div>

      {/* Hardware Accelerated Keyframes Smooth Matrix Rotations */}
      <style jsx global>{`
        @keyframes deviceMainFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes popInCardFloat {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-5px) translateX(3px); }
        }
        @keyframes slowFloatBlue {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-10px) rotate(2deg) scale(1.02); }
        }
        @keyframes slowFloatOrange {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(8px) rotate(-3deg) scale(0.98); }
        }
      `}</style>
    </section>
  );
}