"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import RevealAnimation from "../../animation/RevealAnimation";

// Precise asset layers mapped directly from your ecommerce image registry list
import imgFloatingPhone from "@/assets/services/ecommerce/MicrosoftTeams-image-27-1.png";
import imgDashboardChart from "@/assets/services/ecommerce/MicrosoftTeams-image-28-1.png";
import Link from "next/link";

export function EcommerceHero() {
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
    <section className="relative w-full bg-[#071033] text-white overflow-hidden select-none flex items-center px-4 sm:px-6 lg:px-8 py-8 ">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center max-w-[1240px] mx-auto w-full relative z-10">
        
        {/* ======================================================================
            LEFT COLUMN: COPYWRITING TEXTS & CTA ACTIONS (6/12 Grid Columns)
            ====================================================================== */}
        <div className="lg:col-span-6 space-y-6 text-left max-w-[560px] mx-auto lg:mx-0">
          
          {/* Desktop Entrance Paths (GSAP Triggers) */}
          <div className="hidden lg:block space-y-4">
            <ConditionalReveal direction="left" duration={0.9} delay={0.1} offset={25} animationType="from">
              <span className="text-xs sm:text-lg font-bold tracking-widest text-[#4e9cf7] uppercase block">
                E-commerce Development & Solution Provider
              </span>
            </ConditionalReveal>
            
            <ConditionalReveal direction="left" duration={1.0} delay={0.18} offset={30} animationType="from">
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight text-white leading-[1.15]">
                Boost Your Sales Online with Our E-commerce Solutions
              </h1>
            </ConditionalReveal>
            
            <ConditionalReveal direction="left" duration={1.1} delay={0.25} offset={20} animationType="from">
              <p className="text-[14.5px] sm:text-base leading-relaxed text-white/80 font-normal">
                At our company, we specialize in delivering cutting-edge e-commerce platforms and solutions that help businesses unlock to match their full potential in the digital market world.
              </p>
            </ConditionalReveal>
            
            <ConditionalReveal direction="up" duration={0.9} delay={0.35} offset={15} animationType="from">
              <div className="pt-4">
                <Link href="/contact-us" className="inline-flex h-12 items-center justify-center rounded-xl bg-[#ff5c3d] hover:bg-[#e84c2e] px-8 text-sm font-bold text-white shadow-lg shadow-orange-500/20 active:scale-[0.98] transition-all duration-200">
                  Get A Free Quote
                </Link>
              </div>
            </ConditionalReveal>
          </div>

          {/* Mobile Safe Typography Flow (Built-In Zero Flash Styles) */}
          <div className="block lg:hidden text-center sm:text-left space-y-3.5">
            <span className="text-xs font-bold text-[#4e9cf7] tracking-wider uppercase block">
              E-commerce Development & Solution Provider
            </span>
            <h1 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Boost Your Sales Online with Our E-commerce Solutions
            </h1>
            <p className="text-[13.5px] sm:text-base leading-relaxed text-white/80 font-normal">
              At our company, we specialize in delivering cutting-edge e-commerce platforms and solutions that help businesses unlock their full potential in the digital market world.
            </p>
            <div className="pt-3">
              <Link href="/contact-us" className="inline-flex h-11 w-full sm:w-auto items-center justify-center rounded-xl bg-[#ff5c3d] px-8 text-xs sm:text-sm font-bold text-white shadow-md active:scale-[0.98] transition-transform">
                Get A Free Quote
              </Link>
            </div>
          </div>

        </div>

        {/* ======================================================================
            RIGHT COLUMN: LAYERED INTERACTIVE DASHBOARD BLUEPRINT (6/12 Grid Columns)
            ====================================================================== */}
        <div className="lg:col-span-6 flex justify-center items-center relative h-[300px] sm:h-[400px] lg:h-[450px] w-full mt-6 lg:mt-0">
          
          {/* Main Dashboard Metric Panel Viewport Layout (Backing Matrix Element) */}
          <div className="absolute right-[2%] sm:right-[5%] top-[10%] w-[80vw] sm:w-[380px] lg:w-[460px] aspect-[1.48/1] z-10 drop-shadow-[0_20px_50px_rgba(4,11,42,0.25)] transform lg:rotate-[-2deg] transition-transform duration-500 lg:hover:rotate-0">
            <Image 
              src={imgDashboardChart} 
              alt="E-commerce real-time store transaction dashboard statistics analysis blueprint chart mockup" 
              fill 
              className="object-contain" 
              priority 
              sizes="(max-width: 640px) 80vw, 460px"
            />
          </div>

          {/* Floating Mobile Order Confirmation UI Screen Layout (Foreground Accent Element) */}
          <div 
            className="absolute left-[2%] sm:left-[8%] bottom-[5%] w-[32vw] sm:w-[150px] lg:w-[180px] aspect-[0.52/1] z-20 drop-shadow-[0_25px_45px_rgba(4,11,42,0.35)] transform lg:rotate-[4deg] transition-transform duration-500 lg:hover:rotate-0"
            style={{ animation: "layeredPhoneFloat 5.5s ease-in-out infinite" }}
          >
            <Image 
              src={imgFloatingPhone} 
              alt="Mobile application shopping cart interface product layout viewport checkout review mockup" 
              fill 
              className="object-contain" 
              priority 
              sizes="(max-width: 640px) 32vw, 180px"
            />
          </div>

        </div>

      </div>

      {/* Hardware Accelerated Isometric Smooth Hover Keyframe Declarations */}
      <style jsx global>{`
        @keyframes layeredPhoneFloat {
          0%, 100% { transform: translateY(0px) rotate(4deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
        }
      `}</style>
    </section>
  );
}