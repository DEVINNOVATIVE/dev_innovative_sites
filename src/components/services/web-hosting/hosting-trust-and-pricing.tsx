"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import RevealAnimation from "../../animation/RevealAnimation";

// Asset imports mapping precisely to the thumbnails in image_5e4e9e.jpg
import decoBackdrop from "@/assets/services/web_hosting/demo15-img5.png";
import cardImgSupport from "@/assets/services/web_hosting/demo15-img11.png";
import cardImgTech from "@/assets/services/web_hosting/demo15-img12.png";
import cardImgMigration from "@/assets/services/web_hosting/demo15-img13.png";

const trustedCards = [
  { title: "24/7 Live Support", image: cardImgSupport },
  { title: "Advanced Technologies", image: cardImgTech },
  { title: "Website Migration", image: cardImgMigration },
];

export function HostingTrustAndPricing() {
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
    <div className="w-full bg-white text-slate-900 select-none">
      
      {/* ======================================================================
          PART 1: COMPETITIVE PRICING LEAD GENERATION (Top of image_5e4e9e.jpg)
          ====================================================================== */}
      <section className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8 relative z-10">
        
        {/* Desktop Animated Version */}
        <div className="hidden lg:block">
          <RevealAnimation direction="up" duration={1.0} delay={0.1} offset={35} animationType="from">
            <div className="relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-100 p-12 text-center max-w-[1240px] mx-auto">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
                <Image src={decoBackdrop} alt="Decorative geometry mesh" fill className="object-contain" />
              </div>
              
              <div className="relative z-10 max-w-3xl mx-auto space-y-4">
                <span className="text-sm font-bold text-[#104cba] tracking-wider uppercase block">
                  Affordable pricing hosting !
                </span>
                <h2 className="text-4xl font-bold text-[#08112a] tracking-tight leading-tight">
                  We Offer Competitive Pricing Plans That Fit <br /> Any Budget !
                </h2>
                <p className="text-[14px] text-slate-400 max-w-xl mx-auto font-normal">
                  Our user-friendly platforms allow you to focus on building your business web apps, online stores, or blogs effortlessly.
                </p>
                
                <form onSubmit={(e) => e.preventDefault()} className="pt-4 flex gap-3 max-w-xl mx-auto">
                  <input type="text" placeholder="Your Full Name" className="flex-1 px-4 h-12 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#104cba] bg-white text-slate-800 shadow-sm" />
                  <input type="email" placeholder="Your Email Address" className="flex-1 px-4 h-12 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#104cba] bg-white text-slate-800 shadow-sm" />
                  <button type="submit" className="px-7 h-12 text-sm font-bold text-white bg-[#ff5c3d] hover:bg-[#e84c2e] rounded-xl shadow-md transition-colors shrink-0">
                    Contact Us
                  </button>
                </form>
              </div>
            </div>
          </RevealAnimation>
        </div>

        {/* Mobile / Tablet Instant Flat Version */}
        <div className="block lg:hidden w-full">
          <div className="rounded-2xl bg-slate-50 border border-slate-100 p-6 sm:p-8 text-center max-w-xl mx-auto">
            <div className="space-y-3">
              <span className="text-xs sm:text-sm font-bold text-[#104cba] uppercase block tracking-wider">
                Affordable pricing hosting !
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#08112a] tracking-tight">
                We Offer Competitive Pricing Plans That Fit Any Budget !
              </h2>
              <p className="text-[13px] sm:text-sm text-slate-400 font-normal">
                Our user-friendly platforms allow you to focus on building your business web apps, online stores, or blogs effortlessly.
              </p>
            </div>
            
            <form onSubmit={(e) => e.preventDefault()} className="pt-5 flex flex-col gap-3">
              <input type="text" placeholder="Your Full Name" className="w-full px-4 h-11 text-sm rounded-xl border border-slate-200 bg-white text-slate-800" />
              <input type="email" placeholder="Your Email Address" className="w-full px-4 h-11 text-sm rounded-xl border border-slate-200 bg-white text-slate-800" />
              <button type="submit" className="w-full h-11 text-sm font-bold text-white bg-[#ff5c3d] rounded-xl shadow-sm">
                Contact Us
              </button>
            </form>
          </div>
        </div>

      </section>

      {/* ======================================================================
          PART 2: WEBSITE HOSTING TRUSTED BY THOUSANDS (Bottom of image_5e4e9e.jpg)
          ====================================================================== */}
      {/* 
        The layout uses negative margins and forced padding metrics to overlap the sections 
        with proper stacking dimensions exactly as seen in your blueprint image asset.
      */}
      <section className="bg-[#0a0f24] text-white pt-24 pb-2 lg:pb-2 -mb-6 relative z-0 mt-8">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          {/* Header Typography Group */}
          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="text-xs sm:text-sm font-bold text-blue-500 uppercase tracking-widest block">
              Data Centers All Around The World
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
              Website Hosting Trusted By Thousands
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto font-normal leading-relaxed">
              We offer server locations in Texas, United Kingdom, France, India, Singapore, Brazil, Lithuania, and the Netherlands.
            </p>
          </div>

          {/* ================= DESKTOP VIEW CARDS GRID MATRIX ================= */}
          <div className="hidden lg:grid gap-8 lg:grid-cols-3 text-slate-950">
            {trustedCards.map((card, index) => (
              <RevealAnimation 
                key={card.title} 
                direction="up" 
                duration={0.9} 
                delay={0.15 + index * 0.12} 
                offset={30} 
                animationType="from"
              >
                <div className="group bg-white rounded-2xl p-5 border border-white/[0.04] shadow-[0_15px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-2 flex flex-col items-center">
                  <div className="relative w-full h-44 bg-slate-50 rounded-xl mb-4 p-4 overflow-hidden">
                    <Image 
                      src={card.image} 
                      alt={card.title} 
                      fill 
                      className="object-contain p-2.5 transition-transform duration-500 group-hover:scale-105" 
                      sizes="33vw"
                    />
                  </div>
                  <h4 className="text-[17px] font-bold text-[#08112a] tracking-tight mb-1 transition-colors duration-300 group-hover:text-[#104cba]">
                    {card.title}
                  </h4>
                </div>
              </RevealAnimation>
            ))}
          </div>

          {/* ================= MOBILE VIEW CARDS GRID MATRIX ================= */}
          <div className="block lg:hidden grid gap-6 grid-cols-1 sm:grid-cols-2 text-slate-950 max-w-2xl mx-auto">
            {trustedCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-4 border border-slate-100 shadow-md flex flex-col items-center">
                <div className="relative w-full h-36 bg-slate-50 rounded-xl mb-3.5">
                  <Image 
                    src={card.image} 
                    alt={card.title} 
                    fill 
                    className="object-contain p-4" 
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <h4 className="text-base font-bold text-[#08112a] tracking-tight">
                  {card.title}
                </h4>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}