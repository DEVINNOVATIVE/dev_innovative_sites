"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import RevealAnimation from "../../animation/RevealAnimation";
import { ContactFormCard } from "../../contact-us";

// Precise asset layers mapped from image_5c7181.png directory structure
import imgWorkplaceTeam from "@/assets/services/block_chain/vec03.png";
import shapeTriangleRed from "@/assets/services/block_chain/Home5-15.png";

export function AppDevelopmentContact() {
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
    <section className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-white text-slate-900 select-none overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-[1240px] mx-auto">
        
        {/* ======================================================================
            LEFT COLUMN: FLUID ILLUSTRATION & BACKDROP ACCENTS (5/12 Columns)
            ====================================================================== */}
        <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center items-center relative w-full h-[320px] sm:h-[400px]">
          {/* Subtle floating background glow layout mesh */}
          <div className="absolute inset-0 m-auto w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Core Workplace Character Consultation Artwork Vector */}
          <div className="relative w-[85vw] sm:w-[380px] lg:w-full aspect-[1.15/1] z-10" style={{ animation: "subtleFloat 6s ease-in-out infinite" }}>
            <Image 
              src={imgWorkplaceTeam} 
              alt="Application development consultants brainstorming project timeline mock layout" 
              fill 
              className="object-contain"
              sizes="(max-width: 1024px) 85vw, 440px"
              priority
            />
          </div>
        </div>

        {/* ======================================================================
            RIGHT COLUMN: REUSED REVEAL-ANIMATED CONTACT FORM CARD (7/12 Columns)
            ====================================================================== */}
        <div className="lg:col-span-7 order-1 lg:order-2 w-full relative">
          
          {/* Absolute floating micro red triangle matching bottom arrow alignment in image_5203bd.png */}
          <div className="absolute bottom-[-15px] left-[35%] z-20 w-4 h-4 opacity-80 pointer-events-none animate-bounce">
            <Image src={shapeTriangleRed} alt="Visual decorative glyph tracking marker red" fill className="object-contain" />
          </div>

          {/* Desktop Responsive Split Execution Path */}
          <div className="hidden lg:block w-full text-left">
            <RevealAnimation direction="right" duration={1.0} delay={0.15} offset={35} animationType="from">
              <div className="w-full mx-auto max-w-xl lg:max-w-none">
                <ContactFormCard
                  badgeText="Get A Free Quote"
                  title="Let's Build Your Mobile App Together - Contact Us Today !"
                  showLiveIndicator={true}
                />
              </div>
            </RevealAnimation>
          </div>

          {/* Mobile Safe Instant Hardware Rendering Fallback Path */}
          <div className="block lg:hidden w-full text-left mx-auto max-w-xl">
            <ContactFormCard
              badgeText="Get A Free Quote"
              title="Let's Build Your Mobile App Together - Contact Us Today !"
              showLiveIndicator={true}
            />
          </div>

        </div>

      </div>

      {/* Hardware Accelerated Floating Context Animations */}
      <style jsx global>{`
        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </section>
  );
}