"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PhoneCall } from "lucide-react";
import RevealAnimation from "../../animation/RevealAnimation";

// Asset import matching image_5eb325.png
import heroIllustration from "@/assets/services/web_hosting/demo15-img2.png";
import Link from "next/link";

export function HostingHero() {
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
    <section className="mx-auto w-full max-w-[1400px] px-4 py-8 sm:px-6 lg:px-8 lg:pb-8 lg:pt-4 bg-white text-slate-900 select-none overflow-hidden">
      
      {/* ======================================================================
          1. DESKTOP SYSTEM LAYER (GSAP ACTIVE ABOVE 1024PX BREAKPOINT)
          ====================================================================== */}
      <div className="hidden lg:grid items-center gap-12 grid-cols-2 lg:gap-16">
        
        {/* Left Side: Animated Illustration with subtle float */}
        <div className="flex justify-center lg:justify-start">
          <ConditionalReveal direction="left" duration={1.1} delay={0.1} offset={40} animationType="from">
            <div className="relative w-full max-w-[550px] aspect-[1.15/1]">
              <Image
                src={heroIllustration}
                alt="Web hosting network integration configuration blueprint workspace"
                fill
                className="object-contain"
                style={{ animation: "subtleHeroFloat 6s ease-in-out infinite" }}
                sizes="550px"
                priority
              />
            </div>
          </ConditionalReveal>
        </div>

        {/* Right Side: Copywriting Text Blocks */}
        <div className="max-w-[560px] space-y-6 text-left">
          <ConditionalReveal direction="right" duration={0.9} delay={0.15} offset={30} animationType="from">
            <span className="text-[13px] sm:text-lg font-bold tracking-wider text-[#104cba] uppercase block">
              Cloud & web hosting Services
            </span>
          </ConditionalReveal>

          <ConditionalReveal direction="right" duration={1.0} delay={0.2} offset={35} animationType="from">
            <h1 className="text-3xl font-bold tracking-tight text-[#08112a] sm:text-5xl leading-[1.12]">
              Welcome to our <br /> web hosting services
            </h1>
          </ConditionalReveal>

          <ConditionalReveal direction="right" duration={1.1} delay={0.25} offset={25} animationType="from">
            <p className="text-[15px] sm:text-base leading-relaxed text-slate-500 font-normal">
              We provide reliable and secure web hosting solutions to ensure your website stays up and running 24/7. Our team of experts is committed to delivering exceptional results that drive performance.
            </p>
          </ConditionalReveal>

          {/* Action Row */}
          <ConditionalReveal direction="up" duration={1.0} delay={0.4} offset={20} animationType="from">
            <div className="flex items-center gap-6 pt-2">
              <Link
                href="/contact-us"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-[#ff5c3d] hover:bg-[#e84c2e] px-8 text-[15px] font-bold text-white shadow-lg shadow-orange-500/10 active:scale-[0.98] transition-all duration-200"
              >
                Contact Us
              </Link>
              <div className="flex items-center gap-3 text-left group">
                <div className="h-10 w-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#104cba] transition-transform duration-300 group-hover:scale-105">
                  <PhoneCall className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Call us: +1 (234) 567-890</p>
                  <a href="tel:+1234567890" className="text-sm font-bold text-[#08112a] hover:text-[#104cba] transition-colors">
                    For any question
                  </a>
                </div>
              </div>
            </div>
          </ConditionalReveal>
        </div>

      </div>

      {/* ======================================================================
          2. MOBILE LAYER SYSTEM (INSTANT STATIC RE-ALIGNMENT / ZERO FLASH)
          ====================================================================== */}
      <div className="block lg:hidden w-full space-y-8 text-center">
        
        {/* Texts Header Cluster */}
        <div className="max-w-xl mx-auto space-y-4">
          <span className="text-xs sm:text-lg font-bold tracking-wider text-[#104cba] uppercase block">
            Cloud & web hosting Services
          </span>
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#08112a] leading-tight">
            Welcome to our <br /> web hosting services
          </h1>
          <p className="text-[14px] sm:text-base leading-relaxed text-slate-500 font-normal px-2">
            We provide reliable and secure web hosting solutions to ensure your website stays up and running 24/7. Our team of experts is committed to delivering exceptional results that drive performance.
          </p>
          
          {/* Mobile Buttons Layout */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
            <Link
              href="/contact-us"
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-xl bg-[#ff5c3d] px-8 text-[15px] font-bold text-white shadow-md"
            >
              Contact Us
            </Link>
            <a 
              href="tel:+1234567890" 
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-xl border border-slate-200 bg-white text-sm font-bold text-[#08112a] gap-2 shadow-sm"
            >
              <PhoneCall className="h-4 w-4 text-[#104cba]" />
              Call us for any question
            </a>
          </div>
        </div>

        {/* Static Frame Illustration Container */}
        <div className="flex justify-center w-full">
          <div className="relative w-[88vw] sm:w-[400px] aspect-[1.15/1]">
            <Image
              src={heroIllustration}
              alt="Web hosting network integration framework illustration preview mobile view"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 88vw, 400px"
              priority
            />
          </div>
        </div>

      </div>

      {/* Hardware Accelerated Floating Animations */}
      <style jsx global>{`
        @keyframes subtleHeroFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-7px) rotate(0.5deg); }
        }
      `}</style>
    </section>
  );
}