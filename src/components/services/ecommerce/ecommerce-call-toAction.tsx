"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PhoneCall } from "lucide-react";
import RevealAnimation from "../../animation/RevealAnimation";

// Precise asset layers mapped directly from your ecommerce image registry list
import imgCtaIllustration from "@/assets/services/ecommerce/MicrosoftTeams-image.png"; 
import Link from "next/link";

export function EcommerceCallToAction() {
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
    <section className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-white text-slate-900 select-none overflow-hidden relative">
      
      {/* Pure CSS Dynamic Radial Glow Background Layer (Replaces map1.png) */}
      <div className="absolute left-[-5%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl z-0 pointer-events-none hidden sm:block" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-[1140px] mx-auto relative z-10 w-full">
        
        {/* ======================================================================
            LEFT COLUMN: TYPOGRAPHY COPY & DIRECT CONTACT LINKS (6/12 Grid Columns)
            ====================================================================== */}
        <div className="lg:col-span-6 space-y-6 text-center max-w-[520px] mx-auto lg:mx-0">
          
          {/* Desktop Intercept Entry Paths */}
          <div className="hidden lg:block space-y-5">
            {/* Pulsing Phone Circle Icon Accent */}
            <ConditionalReveal direction="up" duration={0.8} delay={0.1} offset={15} animationType="from">
              <div className="mx-auto h-12 w-12 rounded-full bg-red-50 text-[#ff5c3d] flex items-center justify-center border border-red-100 shadow-sm animate-pulse">
                <PhoneCall className="h-8 w-8" />
              </div>
            </ConditionalReveal>

            <ConditionalReveal direction="up" duration={0.9} delay={0.18} offset={25} animationType="from">
              <h2 className="text-3xl xl:text-[34px] font-bold tracking-tight text-[#08112a] leading-tight">
                Are Your Ready To Build <br /> Ecommerce Web & App <br /> Today ?
              </h2>
            </ConditionalReveal>
            
            <div className="space-y-1 pt-1">
              <ConditionalReveal direction="up" duration={1.0} delay={0.24} offset={15} animationType="from">
                <span className="text-[11px] font-bold tracking-widest text-slate-400 uppercase block">
                  Contact Us For More Details !
                </span>
              </ConditionalReveal>
              
              <ConditionalReveal direction="up" duration={1.0} delay={0.3} offset={20} animationType="from">
                <span
                
                  className="text-2xl xl:text-3xl font-black tracking-tight text-[#08112a] hover:text-[#104cba] transition-colors duration-300 block"
                >
                  +923070761555
                </span>
              </ConditionalReveal>
            </div>

            <ConditionalReveal direction="up" duration={0.9} delay={0.4} offset={15} animationType="from">
              <div className="pt-4 flex justify-center">
                <Link
                  href="/contact-us" 
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-[#ff5c3d] hover:bg-[#e84c2e] px-10 text-sm font-bold text-white shadow-lg shadow-orange-500/20 active:scale-[0.98] transition-all duration-200"
                >
                  Contact Us Today
                </Link>
              </div>
            </ConditionalReveal>
          </div>

          {/* Mobile Safe Zero Flash Fallback Structure */}
          <div className="block lg:hidden space-y-4">
            <div className="mx-auto h-11 w-11 rounded-full bg-red-50 text-[#ff5c3d] flex items-center justify-center border border-red-100 shadow-sm">
              <PhoneCall className="h-4 w-4" />
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold text-[#08112a] tracking-tight leading-tight">
              Are Your Ready To Build Ecommerce Web & App Today ?
            </h2>
            
            <div className="space-y-0.5 pt-1">
              <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase block">Contact Us For More Details !</span>
              <span  className="text-xl sm:text-2xl font-black text-[#08112a] hover:text-[#104cba] transition-colors">+923070761555</span>
            </div>

            <div className="pt-3">
              <Link
                href="/contact-us" 
                className="inline-flex h-11 w-full sm:w-auto items-center justify-center rounded-xl bg-[#ff5c3d] px-8 text-xs sm:text-sm font-bold text-white shadow-md active:scale-[0.98] transition-transform"
              >
                Contact Us Today
              </Link>
            </div>
          </div>

        </div>

        {/* ======================================================================
            RIGHT COLUMN: ISOMETRIC STRATEGY APP DEVELOPMENT ARTWORK (6/12 Grid Columns)
            ====================================================================== */}
        <div className="lg:col-span-6 flex justify-center items-center relative w-full h-[300px] sm:h-[400px]">
          {/* Hardware Accelerated Floating Core Product Wireframe Illustration Layer */}
          <div 
            className="relative w-[85vw] sm:w-[380px] lg:w-full aspect-[1.15/1] z-10" 
            style={{ animation: "asymmetricFloatCTA 6s ease-in-out infinite" }}
          >
            <Image 
              src={imgCtaIllustration} 
              alt="Team members designing high conversion ecommerce system application layout blueprint verbatim in file image_43fbc4.png" 
              fill 
              className="object-contain"
              sizes="(max-width: 1024px) 85vw, 540px"
              priority
            />
          </div>
        </div>

      </div>

      {/* Hardware Accelerated Isometric Floating Accent Tweens */}
      <style jsx global>{`
        @keyframes asymmetricFloatCTA {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-7px) scale(1.005); }
        }
      `}</style>
    </section>
  );
}