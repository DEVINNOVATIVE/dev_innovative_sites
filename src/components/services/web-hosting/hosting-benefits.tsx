"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import RevealAnimation from "../../animation/RevealAnimation";

// Asset import mapping from image_5e5582.png
import infoIllustration from "@/assets/services/web_hosting/demo15-img4.png";

export function HostingBenefits() {
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
    <section className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-8 lg:px-10 bg-white select-none overflow-hidden">
      
      {/* ======================================================================
          1. DESKTOP LAYER (GSAP ACTIVE ABOVE 1024PX BREAKPOINT)
          ====================================================================== */}
      <div className="hidden lg:grid grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Copywriting & Numbered Lists */}
        <div className="space-y-6 text-left max-w-[540px]">
          <RevealAnimation direction="left" duration={0.9} delay={0.1} offset={30} animationType="from">
            <span className="text-lg font-bold text-[#104cba] tracking-wider uppercase block">
              Why Choose our web hosting?
            </span>
          </RevealAnimation>

          <RevealAnimation direction="left" duration={1.0} delay={0.18} offset={35} animationType="from">
            <h2 className="text-4xl font-bold text-[#08112a] tracking-tight leading-tight">
              Best Reliable Web Hosting Services
            </h2>
          </RevealAnimation>

          <RevealAnimation direction="left" duration={1.1} delay={0.25} offset={25} animationType="from">
            <p className="text-[15px] leading-relaxed text-slate-500 font-normal">
              We provide easy-to-use and reliable hosting solutions for custom sites as well as blogs. Our platform is built on modern infrastructure layouts that allow you to focus on creating your website, online store, or blog, without worrying about the technical aspects of hosting.
            </p>
          </RevealAnimation>
          
          {/* Detailed Points Container */}
          <div className="space-y-6 pt-4 border-t border-slate-100">
            {/* Point 01 */}
            <RevealAnimation direction="up" duration={0.85} delay={0.4} offset={20} animationType="from">
              <div className="flex gap-4 items-start group">
                <div className="h-10 w-10 shrink-0 rounded-full bg-red-50 text-[#ff5c3d] flex items-center justify-center font-bold text-sm transition-transform duration-300 group-hover:scale-105">
                  01
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-base font-bold text-[#08112a] tracking-tight transition-colors group-hover:text-[#104cba]">
                    High Performance Servers
                  </h4>
                  <p className="text-[13.5px] leading-relaxed text-slate-400 font-normal">
                    We use state-of-the-art hardware and software to ensure that your website runs smoothly and loads quickly.
                  </p>
                </div>
              </div>
            </RevealAnimation>

            {/* Point 02 */}
            <RevealAnimation direction="up" duration={0.85} delay={0.5} offset={20} animationType="from">
              <div className="flex gap-4 items-start group">
                <div className="h-10 w-10 shrink-0 rounded-full bg-red-50 text-[#ff5c3d] flex items-center justify-center font-bold text-sm transition-transform duration-300 group-hover:scale-105">
                  02
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-base font-bold text-[#08112a] tracking-tight transition-colors group-hover:text-[#104cba]">
                    Security And Backups
                  </h4>
                  <p className="text-[13.5px] leading-relaxed text-slate-400 font-normal">
                    Website security is key, and we offer automated backups and SSL certificates to keep your website safe.
                  </p>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>

        {/* Right Column: Animated Illustration Canvas */}
        <div className="flex justify-center w-full">
          <RevealAnimation direction="right" duration={1.1} delay={0.2} offset={40} animationType="from">
            <div className="relative w-full max-w-[480px] aspect-[1.12/1]">
              <Image 
                src={infoIllustration} 
                alt="Reliable web hosting analytics discussion vector artwork panel" 
                fill 
                className="object-contain" 
                sizes="480px"
              />
            </div>
          </RevealAnimation>
        </div>

      </div>

      {/* ======================================================================
          2. MOBILE LAYER SYSTEM (INSTANT STATIC RE-ALIGNMENT / ZERO FLASH)
          ====================================================================== */}
      <div className="block lg:hidden w-full space-y-10 text-center sm:text-left">
        
        {/* Texts Header Flow */}
        <div className="max-w-xl mx-auto lg:mx-0 space-y-4">
          <span className="text-xs sm:text-sm font-bold text-[#104cba] uppercase block tracking-wider">
            Why Choose our web hosting?
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#08112a] tracking-tight leading-tight">
            Best Reliable Web Hosting Services
          </h2>
          <p className="text-[14px] sm:text-base leading-relaxed text-slate-500 font-normal">
            We provide easy-to-use and reliable hosting solutions for custom sites as well as blogs. Our platform is built on modern infrastructure layouts that allow you to focus on creating your website, online store, or blog, without worrying about the technical aspects of hosting.
          </p>
        </div>

        {/* Flat Static Illustration Preview Container */}
        <div className="flex justify-center w-full">
          <div className="relative w-[85vw] sm:w-[380px] aspect-[1.12/1]">
            <Image 
              src={infoIllustration} 
              alt="Reliable web hosting analytics mobile preview layout" 
              fill 
              className="object-contain" 
              sizes="(max-width: 640px) 85vw, 380px"
              priority
            />
          </div>
        </div>

        {/* Fluid Native Points Stack Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto pt-4 text-left">
          <div className="flex gap-3.5 items-start bg-slate-50/50 border border-slate-100 p-4 rounded-xl shadow-sm">
            <div className="h-9 h-9 shrink-0 rounded-full bg-red-50 text-[#ff5c3d] flex items-center justify-center font-bold text-xs">01</div>
            <div className="space-y-1">
              <h4 className="text-sm sm:text-base font-bold text-[#08112a]">High Performance Servers</h4>
              <p className="text-[12.5px] sm:text-[13px] leading-relaxed text-slate-400 font-normal">We use state-of-the-art hardware and software to ensure that your website runs smoothly and loads quickly.</p>
            </div>
          </div>
          
          <div className="flex gap-3.5 items-start bg-slate-50/50 border border-slate-100 p-4 rounded-xl shadow-sm">
            <div className="h-9 h-9 shrink-0 rounded-full bg-red-50 text-[#ff5c3d] flex items-center justify-center font-bold text-xs">02</div>
            <div className="space-y-1">
              <h4 className="text-sm sm:text-base font-bold text-[#08112a]">Security And Backups</h4>
              <p className="text-[12.5px] sm:text-[13px] leading-relaxed text-slate-400 font-normal">Website security is key, and we offer automated backups and SSL certificates to keep your website safe.</p>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}