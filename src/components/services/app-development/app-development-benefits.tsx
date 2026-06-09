"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CheckCircle2, Diamond } from "lucide-react";
import RevealAnimation from "../../animation/RevealAnimation";

// Core asset layers precisely mapped from your repository folder listings
import imgTeamGroup from "@/assets/services/application_developement/home-18-2x-03-min.png";
import imgProfileBadge from "@/assets/services/application_developement/home-18-2x-04-min.png";
import imgShapeBacking from "@/assets/services/application_developement/Img-14-18.png";
import Link from "next/link";

export function AppDevelopmentBenefits() {
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
    <div className="w-full bg-white text-slate-900 select-none overflow-hidden">
      
      {/* ======================================================================
          PART 1: WHY YOU NEED AN APP CONTENT BLOCK (Top of image_5d0047.jpg)
          ====================================================================== */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-[1240px] mx-auto">
          
          {/* Left Side: Composed Fluid Graphics & Layered Counter Cards */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start relative w-full pb-6 lg:pb-0">
            
            {/* Background Blob Backdrop Glow */}
            <div className="absolute top-[-5%] left-[-5%] w-[110%] h-[110%] opacity-40 pointer-events-none z-0">
              <Image src={imgShapeBacking} alt="Fluid background layout masking geometry" fill className="object-contain" />
            </div>

            {/* Main Fluid Shape Team Workplace Graphic Wrapper */}
            <div 
              className="relative w-[85vw] sm:w-[440px] aspect-[1.05/1] z-10 overflow-hidden"
              style={{ clipPath: "polygon(25% 0%, 100% 0%, 100% 80%, 75% 100%, 0% 100%, 0% 25%)", borderRadius: "40px" }}
            >
              <Image 
                src={imgTeamGroup} 
                alt="App engineering workspace layout group discussion" 
                fill 
                className="object-cover object-center" 
                priority
              />
            </div>

            {/* Floating Employee Review Badge Layer */}
            <div 
              className="absolute top-[20%] right-[5%] sm:right-[12%] z-20 w-[150px] sm:w-[170px] aspect-[2.2/1] bg-white rounded-2xl border border-slate-100 p-3 shadow-[0_15px_35px_rgba(0,0,0,0.06)] flex items-center gap-3 animate-[badgeFloat_5s_ease-in-out_infinite]"
            >
              <div className="relative h-10 w-10 rounded-full overflow-hidden shrink-0 border border-amber-500/20">
                <Image src={imgProfileBadge} alt="Ahmad Geidt project consultant branding display" fill className="object-cover" />
              </div>
              <div className="text-left min-w-0">
                <h4 className="text-[12px] font-black text-[#08112a] truncate leading-tight">Ahmad Geidt</h4>
                <p className="text-[10px] text-slate-400 font-medium truncate">Montreal, Canada</p>
              </div>
            </div>

            {/* Project Done Diamond Status Bar Block Layout */}
            <div className="mt-6 lg:mt-8 z-10 w-full max-w-[240px] sm:max-w-[260px] self-center lg:self-start lg:ml-6">
              <div className="bg-gradient-to-r from-[#ff4722] to-[#ff6b35] rounded-2xl p-4 flex items-center gap-4 text-white shadow-xl shadow-orange-500/10 transition-all duration-300 transform active:scale-[0.98] lg:hover:scale-[1.02]">
                <div className="h-11 w-11 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm shrink-0">
                  <Diamond className="h-5 w-5 text-white animate-pulse" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-black tracking-tight leading-none mb-0.5">3,589</div>
                  <div className="text-[11px] font-bold text-white/80 uppercase tracking-widest">Project Done</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Copywriting Texts & Features Accents */}
          <div className="lg:col-span-6 space-y-6 text-left max-w-[540px] mx-auto lg:mx-0">
            
            {/* Desktop Entrance Flow (GSAP Triggered Above Breakpoint) */}
            <div className="hidden lg:block space-y-5">
              <RevealAnimation direction="right" duration={0.9} delay={0.1} offset={25} animationType="from">
                <span className="text-lg font-bold tracking-wider text-[#104cba] uppercase block">
                  Why You Need An App !
                </span>
              </RevealAnimation>
              <RevealAnimation direction="right" duration={1.0} delay={0.18} offset={30} animationType="from">
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[#08112a] leading-tight">
                  Why Mobile Applications Are <br /> Crucial For Your Business ?
                </h2>
              </RevealAnimation>
              <RevealAnimation direction="right" duration={1.1} delay={0.25} offset={20} animationType="from">
                <p className="text-[14.5px] leading-relaxed text-slate-500 font-normal">
                  Mobile applications provide businesses with a direct way to engage with their customers and increase their brand visibility. They also offer features like push notifications and personalized content that can help increase customer engagement and brand loyalty.
                </p>
              </RevealAnimation>

              {/* Point Items Stacks */}
              <div className="space-y-5 pt-3 border-t border-slate-100">
                <RevealAnimation direction="up" duration={0.85} delay={0.35} offset={15} animationType="from">
                  <div className="flex gap-4 items-start group">
                    <CheckCircle2 className="h-5 w-5 text-[#ff5c3d] shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-[#08112a] tracking-tight transition-colors group-hover:text-[#104cba]">Increased Customer Engagement</h4>
                      <p className="text-[13.5px] leading-relaxed text-slate-400">Mobile applications allow businesses to interact with their customers in real-time, providing personalized, relevant content that enhances experience indices.</p>
                    </div>
                  </div>
                </RevealAnimation>

                <RevealAnimation direction="up" duration={0.85} delay={0.45} offset={15} animationType="from">
                  <div className="flex gap-4 items-start group">
                    <CheckCircle2 className="h-5 w-5 text-[#ff5c3d] shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-[#08112a] tracking-tight transition-colors group-hover:text-[#104cba]">Improved Brand Recognition</h4>
                      <p className="text-[13.5px] leading-relaxed text-slate-400">A mobile application can significantly enhance your brand visibility and recognition, allowing you to showcase products seamlessly anywhere.</p>
                    </div>
                  </div>
                </RevealAnimation>
              </div>

              <RevealAnimation direction="up" duration={0.9} delay={0.55} offset={15} animationType="from">
                <div className="pt-2">
                  <Link href="/contact-us" className="inline-flex h-11 items-center justify-center rounded-xl bg-[#ff5c3d] lg:hover:bg-[#e84c2e] px-8 text-sm font-bold text-white shadow-md active:scale-[0.98] transition-all">
                    Contact Us
                  </Link>
                </div>
              </RevealAnimation>
            </div>

            {/* Mobile Native Fluid Flow (Built-in Tailwind Animations / Zero Flash) */}
            <div className="block lg:hidden text-center sm:text-left space-y-4">
              <span className="text-xs sm:text-sm font-bold text-[#104cba] uppercase tracking-wider block">
                Why You Need An App !
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#08112a] tracking-tight leading-tight">
                Why Mobile Applications Are <br /> Crucial For Your Business ?
              </h2>
              <p className="text-[14px] leading-relaxed text-slate-500 font-normal">
                Mobile applications provide businesses with a direct way to engage with their customers and increase their brand visibility.
              </p>
              
              <div className="space-y-4 text-left pt-2">
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex gap-3.5 items-start transition-all duration-300 active:scale-[0.98]">
                  <CheckCircle2 className="h-5 w-5 text-[#ff5c3d] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-bold text-[#08112a]">Increased Customer Engagement</h4>
                    <p className="text-[13px] leading-relaxed text-slate-400">Mobile applications allow businesses to interact with their customers in real-time, providing personalized, relevant content.</p>
                  </div>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex gap-3.5 items-start transition-all duration-300 active:scale-[0.98]">
                  <CheckCircle2 className="h-5 w-5 text-[#ff5c3d] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-bold text-[#08112a]">Improved Brand Recognition</h4>
                    <p className="text-[13px] leading-relaxed text-slate-400">A mobile application can significantly enhance your brand visibility and recognition, allowing you to showcase products seamlessly.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link href="/contact-us" className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-xl bg-[#ff5c3d] text-[15px] font-bold text-white shadow-sm transition-transform active:scale-[0.97]">
                  Contact Us
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================================
          PART 2: HORIZONTAL CALL-TO-ACTION STRIP BANNER (Bottom of image_5d0047.jpg)
          ====================================================================== */}
      <section className="mx-auto max-w-[1400px] px-4 pb-12 sm:px-6 lg:px-8">
        
        {/* Desktop Version with GSAP Slide Entrance */}
        <div className="hidden lg:block max-w-[1240px] mx-auto">
          <RevealAnimation direction="up" duration={1.0} delay={0.1} offset={30} animationType="from">
            <div className="w-full rounded-2xl bg-[#0a0f24] text-white p-8 px-10 flex items-center justify-between gap-6 relative overflow-hidden shadow-xl">
              
              {/* Internal Accent Matrix Dots */}
              <div className="absolute top-[20%] left-[5%] w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping duration-1000" />
              <div className="absolute top-[60%] left-[8%] w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              
              <div className="space-y-1.5 text-left max-w-3xl">
                <h3 className="text-2xl font-bold tracking-tight text-white">
                  Let's Bring Your App Idea To Life!
                </h3>
                <p className="text-base text-slate-400 font-normal tracking-wide">
                  Transform your business parameters today. Connect uniquely with our expert team of application developers.
                </p>
              </div>

              <div className="shrink-0 relative z-10">
                <Link href="/contact-us" className="inline-flex h-11 items-center justify-center rounded-xl bg-[#ff5c3d] lg:hover:bg-[#e84c2e] px-6 text-xs font-bold text-white transition-all shadow-md shadow-orange-500/10 active:scale-[0.97]">
                  Get A Free Quote !
                </Link>
                
                {/* Micro Accents Under Buttons */}
                <div className="absolute right-[-40px] bottom-[-20px] w-0 h-0 border-l-[15px] border-l-transparent border-b-[15px] border-b-amber-400 border-r-[15px] border-r-transparent animate-bounce" />
              </div>

            </div>
          </RevealAnimation>
        </div>

        {/* Mobile Safe Layout Alternative Block with hardware transitions */}
        <div className="block lg:hidden w-full max-w-xl mx-auto">
          <div className="rounded-2xl bg-[#0a0f24] text-white p-6 text-center space-y-5 relative overflow-hidden shadow-lg">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white tracking-tight">
                Let's Bring Your App Idea To Life!
              </h3>
              <p className="text-[12px] text-slate-400 font-normal px-2">
                Transform your business parameters today. Connect uniquely with our expert team of application developers.
              </p>
            </div>
            <Link href="/contact-us" className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-[#ff5c3d] text-[15px] font-bold text-white shadow-sm transition-transform active:scale-[0.97]">
              Get A Free Quote !
            </Link>
          </div>
        </div>

      </section>

      {/* Hardware Accelerated Keyframes Layout Configuration */}
      <style jsx global>{`
        @keyframes badgeFloat {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-6px) translateX(-2px); }
        }
      `}</style>
    </div>
  );
}